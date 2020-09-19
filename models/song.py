import re


class Song(object):
    def __init__(self, title, artist_id, url, lyrics=''):
        self._title = title
        self._artist_id = artist_id
        self._url = url
        self._lyrics = lyrics

    @property
    def title(self):
        return self._title

    @property
    def artist_id(self):
        return self._artist_id

    @property
    def url(self):
        return self._url

    @property
    def lyrics(self):
        return self._lyrics

    @lyrics.setter
    def lyrics(self, lyrics):
        self._lyrics = lyrics

    def __str__(self):
        # return self.title + '\n' + self.url
        return self.title + ' - ' + str(self.artist_id)

