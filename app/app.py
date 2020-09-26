import json
import config

from models import Artist, ArtistDecoder, ArtistEncoder, ArtistStatsEncoder, ArtistStatsDecoder
from data import Genius
from data import SAlt
from nlp import NLP
from utils import Utils


class App:

    def __init__(self, artists_input_file='', lyrics_result_file='', stats_result_file=''):
        self.artists_input_file = artists_input_file
        self.lyrics_result_file = lyrics_result_file
        self.stats_result_file = stats_result_file
        self.artists = {'artists': []}
        self.results = {'results': []}
        self.stats = {'stats': []}

        self.artist_list = []  # Names string
        self.artists = []  # Artist objects list
        self.artist_list_genius = []
        self.artist_list_salt = []
        self.artists_to_analyze_list = []

    def scrape(self, genius_api_token, a):
        genius = Genius(genius_api_token)
        salt = SAlt()

        if self.artist_list_genius:
            print('Retrieving data from Genius...')
        for artist in self.artist_list_genius:
            genius.get_data(artist)
            self.append(artist)
            self.save(lyrics_input)
            print('Saved.')

        if self.artist_list_salt:
            print('Retrieving data from Sarki Alternatifim...')
        for artist in self.artist_list_salt:
            salt.get_data(artist)
            self.append(artist)
            self.save(lyrics_input)
            print('Saved.')

    def lyrics(self, artists_input, lyrics_input):
        self.parse_artists(artists_input)
        self.parse_results(lyrics_input)
        self.divide_artist_sources()
        self.scrape(lyrics_input)

    def parse_artists(self, artists_input):
        """
        Parse input file and create Artist objects.
        """
        flag = 0
        try:
            with open(artists_input) as f:
                data = json.load(f)
                for artist in data['artists']:
                    self.artist_list.append(artist)
        except FileNotFoundError:
            print(f'Input file for artists: {artists_input} not found...')
        except json.JSONDecodeError:
            print('Artists input file is invalid.')
        except Exception:
            print('Invalid input file for artists...')
        else:
            flag = 1
            for artist in self.artist_list:
                artist_obj = Artist(artist)
                self.artists.append(artist_obj)
        finally:
            if flag != 1:
                exit(0)

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

    def parse_results(self, lyrics_input):
        """
        Parse output file (results).
        """
        if not lyrics_input:
            lyrics_input = 'lyrics.json'
        if Utils.base_file_exists(lyrics_input):
            try:
                with open(Utils.get_base_file_path(lyrics_input)) as f:
                    data = json.load(f, cls=ArtistDecoder)
                    self.results['results'] = data['results']
            except FileNotFoundError:
                print('File not found...')
            except json.JSONDecodeError:
                print(f'Results file {lyrics_input} is invalid..')

    def divide_artist_sources(self):
        results = self.results['results']
        input = self.artists
        results_names = list(map(lambda a: a.name, results))

        # Check artists in the input file, if they are brand new, add them both sources
        for artist in input:
            if artist.name not in results_names:
                self.artist_list_genius.append(artist)
                self.artist_list_salt.append(artist)
        # Check artists in the results file
        for artist in results:
            if "genius" not in artist.source:
                self.artist_list_genius.append(artist)
            if "salt" not in artist.source:
                self.artist_list_salt.append(artist)

        if self.artist_list_genius:
            print('Genius: ')
        for artist in self.artist_list_genius:
            print(artist.name)
        if self.artist_list_salt:
            print('\nSalt:')
        for artist in self.artist_list_salt:
            print(artist.name)

    def append(self, artist):
        if artist.id in (result.id for result in self.results['results']):
            result = artist
        else:
            self.results['results'].append(artist)

    def save(self, lyrics_input):
        try:
            file = Utils.get_base_file_path(lyrics_input)
            _json = json.dumps(self.results, cls=ArtistEncoder, indent=4, ensure_ascii=False)
            with open(file, 'w') as f:
                f.write(_json)
        except Exception:
            print(f'Output file {lyrics_input} can not be created...')

    def analyze(self, lyrics_input, a):
        try:
            with open(Utils.get_base_file_path(lyrics_input)) as f:
                try:
                    data = json.load(f, cls=ArtistDecoder)
                    stats = data['results']
                    self.parse_stats(stats)
                    if self.artists_to_analyze_list:
                        nlp = NLP(self.artists_to_analyze_list)
                        new_stats = nlp.start()
                        processed_new_stats = self.process_stats(new_stats)
                        self.stats['stats'].append(processed_new_stats)
                    self.save_stats()

                except json.JSONDecodeError:
                    print('File to be analyzed is invalid..')
                # except Exception:
                #     print('GRPC server may not be running...')
        except FileNotFoundError:
            print('Lyrics file to analyze not found...')

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

