import requests
import json

from utils import Lyrics
from bs4 import BeautifulSoup
from models import Song


class Genius:
    _BASE_API_URL = 'https://api.genius.com'
    api_headers = {}

    def __init__(self, api_token, artists_to_scrape):
        self._client_token = client_token
        self.api_headers['Authorization'] = 'Bearer ' + self._client_token
        self.results = {'results': []}

    def get_data(self, artist):
        try:
            self.find_artist(artist)
            if artist.id == -1:
                print('{} could not be found on Genius...'.format(artist.name))
            else:
                print('Retrieving data for {}'.format(artist.name))
                artist.source = ['genius']
                self.get_songs(artist)
                self.results['results'].append(artist)
        except:
            print('Something went wrong...')

    def find_artist(self, artist):
        search_url = Genius._BASE_API_URL + '/search?q='
        response = self.get_json_response(search_url + artist.name)['hits']
        if response:
            self.get_artist_id(artist, response)
        else:
            artist.id = -1

    def get_songs(self, artist):
        songs_url = Genius._BASE_API_URL + '/artists/'
        page = 1
        song_list = []
        while page:
            url = songs_url + str(artist.id) + '/songs?per_page=40&page=' + str(page)
            response = self.get_json_response(url)
            r_songs = response['songs']
            page = response['next_page']
            for r_song in r_songs:
                if artist.name == r_song['primary_artist']['name'].lower():
                    if Lyrics.is_genius_title_valid(r_song):
                        song_obj = Song(title=r_song['title'], artist_id=artist.id, url=r_song['url'])
                        song_list.append(song_obj)
                        artist.songs = song_list
                        self.get_song_lyrics(song_obj)

    def get_song_lyrics(self, song):
        lyrics = None
        while not lyrics:
            response = requests.get(song.url).text
            soup = BeautifulSoup(response, 'html.parser')
            lyrics = soup.find(class_='lyrics')
            if lyrics:
                lyrics = lyrics.p.get_text()
                song.lyrics = Lyrics.sanitize(lyrics)

    def get_json_response(self, url):
        response = requests.get(url, headers=self.api_headers)
        return json.loads(response.text)['response']

    def get_artist_id(self, artist, items):
        for item in items:
            artist_in_results = item['result']['primary_artist']
            if artist.name == artist_in_results['name'].lower():
                artist.id = artist_in_results['id']
                break
        else:
            artist.id = -1

    def get_results(self):
        return self.results


