import json
import config

from models import Artist, ArtistDecoder, ArtistEncoder, ArtistStatsEncoder, ArtistStatsDecoder
from data import Genius
from data import SAlt
from nlp import NLP
from utils import Utils, Lyrics


class App:

    def __init__(self):
        self.data = {'artists': [], 'lyrics': [], 'stats': []}
        self.artists_to_analyze_list = []

    def scrape(self, token, artists_input, lyrics_result):

        self.data['artists'] = self.parse_artists(artists_input)
        self.data['lyrics'] = self.parse_lyrics(lyrics_result)

        artists_to_scrape = self.divide_artist_sources()
        genius_artists, salt_artists = artists_to_scrape['genius'], artists_to_scrape['salt']
        genius_data = []
        salt_data = []

        if genius_artists:
            print('Retrieving data from Genius...')
            genius = Genius(api_token=token, artists_to_scrape=genius_artists)
            genius_data = genius.get_data()
            self.append(genius_data)

        if salt_artists:
            print('Retrieving data from Sarki Alternatifim...')
            salt = SAlt(artists_to_scrape=salt_artists, current_lyrics=genius_data)
            salt_data = salt.get_data()
            self.append(salt_data)

        self.save_lyrics(lyrics_result)
        print('Lyrics saved!')

    def parse_artists(self, artists_input):
        """
        Parse input file and create Artist objects.
        """
        artists_list = []
        with open(artists_input) as f:
            data = json.load(f)
            for artist_name in data['artists']:
                artists_list.append(Artist(Lyrics.sanitize_artist_name(artist_name)))
        return artists_list

    def parse_lyrics(self, lyrics_result):
        """
        Parse lyrics output file (results).
        """
        lyrics_result_list = []
        with open(lyrics_result) as f:
            data = json.load(f, cls=ArtistDecoder)
            for artist in data['lyrics']:
                lyrics_result_list.append(artist)

        return lyrics_result_list

    def parse_stats(self, artists_input_from_lyrics):
        """
        Parse stats file and create ArtistStats objects.
        """
        file = Utils.get_base_file_path("stats.json")
        try:
            with open(file) as f:
                data = json.load(f, cls=ArtistStatsDecoder)
                self.stats['stats'] = data['stats']
                for a in artists_input_from_lyrics:
                    # for s in self.stats['stats']:
                    #     print(s.__dict__)
                    if a.name not in list(s.artist_name for s in self.stats['stats'] if type(s) != dict):
                        self.artists_to_analyze_list.append(a)
        except FileNotFoundError:
            self.artists_to_analyze_list = artists_input_from_lyrics
        except json.JSONDecodeError:
            print('Stats file is invalid.')

    def divide_artist_sources(self):
        artists_to_scrape = {'genius': [], 'salt': []}
        artists = self.data['artists']
        lyrics = self.data['lyrics']
        lyrics_result = {a.name: a.source for a in lyrics}

        for a in artists:
            if a.name not in lyrics_result:
                artists_to_scrape['genius'].append(Artist(a.name))
                artists_to_scrape['salt'].append(Artist(a.name))
            else:
                if 'genius' not in lyrics_result[a.name]:
                    artists_to_scrape['genius'].append(Artist(a.name))
                if 'salt' not in lyrics_result[a.name]:
                    artists_to_scrape['salt'].append(Artist(a.name))
        return artists_to_scrape

    def append(self, data):
        current_names = [artist.name for artist in self.data['lyrics']]
        lyrics = self.data['lyrics']
        for artist in data:
            if artist.name not in current_names:
                self.data['lyrics'].append(artist)
            else:
                for a in lyrics:
                    if artist.name == a.name:
                        a.source.append(artist.source[0])
                        a.songs.append(artist.songs)

    def save_lyrics(self, lyrics_result):
        dump = {"lyrics": self.data['lyrics']}
        _json = json.dumps(dump, cls=ArtistEncoder, indent=4, ensure_ascii=False)
        with open(lyrics_result, 'w') as f:
            f.write(_json)

    def analyze(self, lyrics_result, stats_result):
        pass
        # try:
        #     with open(Utils.get_base_file_path(lyrics_input)) as f:
        #         try:
        #             data = json.load(f, cls=ArtistDecoder)
        #             stats = data['results']
        #             self.parse_stats(stats)
        #             if self.artists_to_analyze_list:
        #                 nlp = NLP(self.artists_to_analyze_list)
        #                 new_stats = nlp.start()
        #                 processed_new_stats = self.process_stats(new_stats)
        #                 self.stats['stats'].append(processed_new_stats)
        #             self.save_stats()
        #
        #         except json.JSONDecodeError:
        #             print('File to be analyzed is invalid..')
        #         # except Exception:
        #         #     print('GRPC server may not be running...')
        # except FileNotFoundError:
        #     print('Lyrics file to analyze not found...')

    def process_stats(self, stats):
        for s in stats['stats']:
            s.analyzed_word_count = len(s.vocab)
            s.unique_word_count = len(set(s.vocab))
            s.calculate_top_ten()
        return stats

    def save_stats(self):
        try:
            file = Utils.get_base_file_path("stats.json")
            _json = json.dumps(self.stats, cls=ArtistStatsEncoder, indent=4, ensure_ascii=False)
            with open(file, 'w') as f:
                f.write(_json)
        except Exception:
            print('Output file can not be created...')
