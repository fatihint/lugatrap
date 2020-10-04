import requests
import json

from utils import Lyrics
from bs4 import BeautifulSoup
from models import Song


class Genius:
    _BASE_API_URL = 'https://api.genius.com'
    _api_headers = {}

    def __init__(self, api_token, artists_to_scrape):
        self._api_token = api_token
        self._artists_to_scrape = artists_to_scrape
        self._api_headers['Authorization'] = 'Bearer ' + self._api_token
        self.results = []

    def get_data(self):
        try:
            for artist in self._artists_to_scrape:
                for name in artist.name.split(','):
                    if self.artist_exists(artist, name):
                        print(f'Scraping {name}')
                        self.get_songs(artist, name)
                        artist.source = ['genius']
                        self.append(artist)
                    else:
                        print(f'Artist {name} could not be found...')
            return self.results
        except Exception:
            print('Error: Something went wrong...')

    def artist_exists(self, artist, name):
        search_url = f'{Genius._BASE_API_URL}/search?q={name}'
        response = self.get_json_response(search_url)['hits']
        if response:
            for item in response:
                if Lyrics.sanitize_genius_name(item['result']['primary_artist']['name'].lower()) == Lyrics.remove_all_spaces(name):
                    artist.id = item['result']['primary_artist']['id']
                    return True
        return False

    def get_songs(self, artist, name):
        page = 1
        song_list = []
        while page:
            songs_url = f'{Genius._BASE_API_URL}/artists/{artist.id}/songs?per_page=40&page={page}'
            response = self.get_json_response(songs_url)
            r_songs = response['songs']
            page = response['next_page']
            for r_song in r_songs:
                if Lyrics.sanitize_genius_name(r_song['primary_artist']['name'].lower()) == Lyrics.remove_all_spaces(name):
                    if Lyrics.is_genius_title_valid(r_song):
                        song_obj = Song(title=Lyrics.sanitize_title(r_song['title']), artist_id=artist.id, url=r_song['url'])
                        self.get_song_lyrics(song_obj)
                        if song_obj.lyrics:
                            song_list.append(song_obj)
        artist.songs += song_list

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
        try:
            response = requests.get(url, headers=self._api_headers)
            return json.loads(response.text)['response']
        except requests.exceptions.ConnectionError:
            print('Error: Please check your internet connection...')

    def get_results(self):
        return self.results

    def append(self, artist_to_append):
        for i, artist in enumerate(self.results):
            if artist_to_append.name == artist.name:
                self.results.pop(i)
            self.results.append(artist_to_append)
        if not self.results:
            self.results.append(artist_to_append)
