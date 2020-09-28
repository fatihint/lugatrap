import requests
from bs4 import BeautifulSoup
from models import Artist, Song
from utils import Lyrics


class SAlt():
    _BASE_URL = 'https://sarki.alternatifim.com'
    id = 1

    def __init__(self, artists_to_scrape):
        self.results = {'results': []}
        self.artist_name_url_map = {}

    def get_data(self, artist):
        try:
            self.find_artist(artist)
            if "salt" not in artist.source:
                print('{} could not be found on Sarki Alternatifim...'.format(artist.name))
            else:
                print('Retrieving data for {}'.format(artist.name))
                self.get_songs(artist)
                self.results['results'].append(artist)
        except:
            print('Something went wrong...')

    def find_artist(self, artist):
        name = Lyrics.salt_artist_url(artist.name)
        artist_url = SAlt._BASE_URL + '/sarkici/' + name
        soup = self.get_html_response(artist_url)
        content = soup.find(class_='sarkisozu')
        if not content:
            if not artist.id: artist.id = -1
        else:
            if not artist.id:
                artist.id = SAlt.id
                SAlt.id += 1
            artist.source += ['salt']
            self.artist_name_url_map[artist.name] = artist_url

    def get_html_response(self, url):
        res = requests.get(url).text
        return BeautifulSoup(res, 'html.parser')

    def get_songs(self, artist):
        songs_current = list(map(lambda s: Lyrics.sanitize_title(s.title), artist.songs))
        page = 1
        while page:
            url = self.artist_name_url_map[artist.name]
            if page != 1: url += '/sayfa-' + str(page)
            soup = self.get_html_response(url)
            song_container = soup.find('div', class_='sarkisozu')
            if song_container:
                song_titles_list = song_container.find_all('ul')
                titles = [li for ul in song_titles_list for li in ul.find_all('li')]
                pagination = soup.find('div', class_='pagination')
                if pagination: page += 1
                else: page = None
                for title in titles:
                    a = title.find('a')
                    if not isinstance(a, int):  # there are integers between <a> elements
                        title_ = Lyrics.sanitize_title(a.text)
                        if title_ not in songs_current and Lyrics.is_salt_title_valid(a.text):
                            song_url = SAlt._BASE_URL + a['href']
                            text = Lyrics.remove_redundant_spaces(a.text)
                            song_obj = Song(title=text, artist_id=artist.id, url=song_url)
                            artist.songs.append(song_obj)
                            self.get_song_lyrics(song_obj)
            else:
                break

    def get_song_lyrics(self, song):
        soup = self.get_html_response(song.url)
        lyrics = soup.find('div', class_='sarkisozu').find_all(text=True, recursive=False)
        final = []
        for lyric in lyrics:
            if Lyrics.salt_lyrics_is_valid(lyric):
                final.append(lyric)
        final = ' '.join(final)
        final = Lyrics.sanitize(final)

        song.lyrics = final

    def get_results(self):
        return self.results
