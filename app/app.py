import json
import config

from models import Artist, ArtistDecoder, ArtistEncoder
from data import Genius
from data import SAlt
from nlp import NLP
from utils import Utils


class App:
    results_file = 'results.json'

    def __init__(self, input_file):
        self.input_file = input_file
        self.results = {'results': []}
        self.artist_list = []  # Names string
        self.artists = []  # Artist objects list
        self.artist_list_genius = []
        self.artist_list_salt = []

    def start(self):
        self.parse_artists()
        self.parse_results()
        self.divide_artist_sources()
        self.scrape()

    def parse_artists(self):
        """
        Parse input file and create Artist objects with names in the file.
        """
        try:
            with open(self.input_file) as f:
                data = json.load(f)
                for artist in data['artists']:
                    self.artist_list.append(artist)
        except FileNotFoundError:
            print('File not found...')
        finally:
            for artist in self.artist_list:
                artist_obj = Artist(artist)
                self.artists.append(artist_obj)

    def parse_results(self):
        """
        Parse output file (results) and .
        """
        if Utils.base_file_exists('results.json'):
            try:
                with open(Utils.get_base_file_path('results.json')) as f:
                    try:
                        data = json.load(f, cls=ArtistDecoder)
                        self.results['results'] = data['results']
                    except json.JSONDecodeError:
                        print('Results file is invalid..')
            except FileNotFoundError:
                print('File not found...')

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

        print('Genius: ')
        for artist in self.artist_list_genius:
            print(artist.name, end=', ')
        print('\nSalt:')
        for artist in self.artist_list_salt:
            print(artist.name, end=', ')
        print('\n')

    def scrape(self):
        genius_api_client_access_token = config.keys['access_token']
        genius = Genius(genius_api_client_access_token)
        salt = SAlt()

        print('Retrieving data from Genius...')
        for artist in self.artist_list_genius:
            genius.get_data(artist)
            self.append(artist)
            self.save()
            print('saved..')

        print('Retrieving data from Sarki Alternatifim...')
        for artist in self.artist_list_salt:
            salt.get_data(artist)
            self.append(artist)
            self.save()
            print('saved..')

    def append(self, artist):
        for result in self.results['results']:
            if result.id == artist.id:
                result = artist
                break
        else:
            self.results['results'].append(artist)

    def save(self):
        try:
            file = Utils.get_base_file_path(self.results_file)
            _json = json.dumps(self.results, cls=ArtistEncoder, indent=4, ensure_ascii=False)
            with open(file, 'w') as f:
                f.write(_json)
        except:
            print('Output file can not be created...')

    def analyze(self):
        nlp = NLP(self.results['results'])
        nlp.start()
        # self.results

    def get_artists(self):
        return self.artists