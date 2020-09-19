import json
from .song import Song


class Artist(object):
    def __init__(self, name, songs=[], id=-1, source=None, stats=None, invalid_titles=[]):
        self._name = name
        self._songs = songs
        self._id = id
        self._stats = stats
        self._source = source
        self._invalid_titles = invalid_titles

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        self._name = name

    @property
    def songs(self):
        return self._songs

    @songs.setter
    def songs(self, songs):
        self._songs = songs

    @property
    def id(self):
        return self._id

    @id.setter
    def id(self, id):
        self._id = id

    @property
    def source(self):
        return self._source

    @source.setter
    def source(self, source):
        self._source = source

    def __str__(self):
        a = self.name + '\n' + 'Songs:\n'
        for i, song in enumerate(self.songs):
            a += ' -  ' + str(song.artist_id) + '\n'
            a += 'Title: ' + song.title
            if i > len(self.songs) - 3:
                a += '\n' + song.lyrics
            # a += 'URL: ' + song.url + '\n'
            # a += 'Lyrics: ' + song.lyrics + '\n'
        return a


class ArtistEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Artist):
            return {
                '_type': 'artist',
                '_name': obj.name,
                '_id': obj.id,
                '_source': obj.source,
                '_songs': obj.songs
            }
        if isinstance(obj, Song):
            return {
                '_type': 'song',
                '_title': obj.title,
                '_url': obj.url,
                '_lyrics': obj.lyrics,
                '_artist_id': obj.artist_id
            }
        return super(ArtistEncoder, self).default(obj)


class ArtistDecoder(json.JSONDecoder):
    def __init__(self, *args, **kwargs):
        json.JSONDecoder.__init__(self, object_hook=self.object_hook, *args, **kwargs)

    def object_hook(self, obj):
        if '_type' not in obj:
            return obj
        type = obj['_type']
        if type == 'artist':
            return Artist(name=obj['_name'], songs=obj['_songs'], id=obj['_id'], source=obj['_source'])
        if type == 'song':
            return Song(title=obj['_title'], url=obj['_url'], lyrics=obj['_lyrics'], artist_id=obj['_artist_id'])
        return obj
