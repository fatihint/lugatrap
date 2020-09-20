import json
import config

from models import Artist, ArtistDecoder, ArtistEncoder
from data import Genius
from data import SAlt
from nlp import NLP
from utils import Utils


class App:

    def __init__(self):
        self.results = {'results': []}
        self.artist_list = []  # Names string
        self.artists = []  # Artist objects list
        self.artist_list_genius = []
        self.artist_list_salt = []

    def lyrics(self, artists_input, lyrics_input):
        self.parse_artists(artists_input)
        self.parse_results(lyrics_input)
        self.divide_artist_sources()
        self.scrape(lyrics_input)

    def parse_artists(self, artists_input):
        """
        Parse input file and create Artist objects with names in the file.
        """
        try:
            flag = 0
            with open(artists_input) as f:
                data = json.load(f)
                for artist in data['artists']:
                    self.artist_list.append(artist)
        except FileNotFoundError:
            print(f'Input file for artists: {artists_input} not found...')
        except json.JSONDecodeError:
            print('Input file for artists format has to be JSON!')
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

    def parse_results(self, lyrics_input):
        """
        Parse output file (results).
        """
        if not lyrics_input:
            lyrics_input = 'lyrics.json'
        if Utils.base_file_exists(lyrics_input):
            try:
                with open(Utils.get_base_file_path(lyrics_input)) as f:
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

        if self.artist_list_genius:
            print('Genius: ')
        for artist in self.artist_list_genius:
            print(artist.name)
        if self.artist_list_salt:
            print('\nSalt:')
        for artist in self.artist_list_salt:
            print(artist.name)

    def scrape(self, lyrics_input):
        genius_api_client_access_token = config.keys['access_token']
        genius = Genius(genius_api_client_access_token)
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

    def append(self, artist):
        for result in self.results['results']:
            if result.id == artist.id:
                result = artist
                break
        else:
            self.results['results'].append(artist)

    def save(self, lyrics_input):
        try:
            file = Utils.get_base_file_path(lyrics_input)
            _json = json.dumps(self.results, cls=ArtistEncoder, indent=4, ensure_ascii=False)
            with open(file, 'w') as f:
                f.write(_json)
        except Exception:
            print('Output file can not be created...')

    def analyze(self, lyrics_input):
        try:
            with open(Utils.get_base_file_path(lyrics_input)) as f:
                try:
                    data = json.load(f, cls=ArtistDecoder)
                    self.results['results'] = data['results']
                    nlp = NLP(self.results['results'])
                    results = nlp.start()
                except json.JSONDecodeError:
                    print('File to be analyzed is invalid..')
        except FileNotFoundError:
            print('Lyrics file to analyze not found...')

    # def get_artists(self):
        # return self.artists
