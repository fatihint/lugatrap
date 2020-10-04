import json

from models import Artist, ArtistDecoder, ArtistEncoder, ArtistStatsEncoder, ArtistStatsDecoder
from data import Genius
from data import SAlt
from nlp import NLP
from utils import Lyrics


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
            print('\nRetrieving data from Sarki Alternatifim...')
            salt = SAlt(artists_to_scrape=salt_artists, current_lyrics=genius_data)
            salt_data = salt.get_data()
            self.append(salt_data)

        self.save('lyrics', lyrics_result)
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
        current_names = {artist.name: artist for artist in self.data['lyrics']}
        for artist in data:
            if artist.name not in current_names:
                self.data['lyrics'].append(artist)
            else:
                a = current_names[artist.name]
                a.source.append(artist.source[0])
                for song in artist.songs:
                    a.songs.append(song)

    def analyze(self, lyrics_result, stats_result, analyze_threshold):
        if not self.data['lyrics']:
            self.data['lyrics'] = self.parse_lyrics(lyrics_result)
        self.data['stats'] = self.parse_stats(stats_result)
        artists_to_analyze = self.divide_artists_to_analyze()
        nlp = NLP(artists=artists_to_analyze, analyze_threshold=analyze_threshold)
        results = nlp.start()
        processed_stats = nlp.process_stats(results)
        for stat in processed_stats:
            self.data['stats'].append(stat)
        self.save('stats', stats_result)
        print('Analyzes saved!')

    def parse_stats(self, stats_result):
        """
        Parse stats output file (results).
        """
        stats_result_list = []
        with open(stats_result) as f:
            data = json.load(f, cls=ArtistStatsDecoder)
            for artist in data['stats']:
                stats_result_list.append(artist)
        return stats_result_list

    def divide_artists_to_analyze(self):
        current_stats_name = [stat.artist_name for stat in self.data['stats']]
        lyrics = self.data['lyrics']
        artists_to_analyze = []

        for artist in lyrics:
            if artist.name not in current_stats_name:
                artists_to_analyze.append(artist)
        return artists_to_analyze

    def save(self, result_type, result_file):
        cls = dump = ''
        if result_type == 'lyrics':
            cls=ArtistEncoder
            dump = {"lyrics": self.data['lyrics']}
        elif result_type == 'stats':
            cls=ArtistStatsEncoder
            dump = {"stats": self.data['stats']}

        _json = json.dumps(dump, cls=cls, indent=4, ensure_ascii=False)
        with open(result_file, 'w') as f:
            f.write(_json)
