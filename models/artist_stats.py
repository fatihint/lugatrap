import json


class ArtistStats(object):

    def __init__(self, artist_name):
        self._artist_name = artist_name
        self._vocab = []
        self._analyzed_word_count = 0
        self._unique_word_count = 0
        self.top_ten = {}

    @property
    def artist_name(self):
        return self._artist_name

    @artist_name.setter
    def artist_name(self, artist_name):
        self._artist_name = artist_name

    @property
    def vocab(self):
        return self._vocab

    @vocab.setter
    def vocab(self, vocab):
        self._vocab = vocab

    @property
    def analyzed_word_count(self):
        return self._analyzed_word_count

    @analyzed_word_count.setter
    def analyzed_word_count(self, analyzed_word_count):
        self._analyzed_word_count = analyzed_word_count

    @property
    def unique_word_count(self):
        return self._unique_word_count

    @unique_word_count.setter
    def unique_word_count(self, unique_word_count):
        self._unique_word_count = unique_word_count

    def calculate_top_ten(self):
        word_dict = {}
        result = {}
        counter = 0
        for word in self.vocab:
            if word in word_dict:
                word_dict[word] += 1
            else:
                word_dict[word] = 1
        word_dict = dict(sorted(word_dict.items(), key=lambda k: k[1], reverse=True))

        for w, c in word_dict.items():
            if counter < 10:
                result[w] = c
                counter += 1
            else:
                break

        self.top_ten = result

    def __str__(self):
        return self.artist_name + str(self._vocab) + '\n\n\n'


class ArtistStatsEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ArtistStats):
            return {
                '_type': 'artist_stats',
                '_artist_name': obj.artist_name,
                '_analyzed_word_count': obj.analyzed_word_count,
                '_unique_word_count': obj.unique_word_count,
                '_top_ten_words': obj.top_ten
            }
        return super(ArtistStatsEncoder, self).default(obj)


class ArtistStatsDecoder(json.JSONDecoder):
    def __init__(self, *args, **kwargs):
        json.JSONDecoder.__init__(self, object_hook=self.object_hook, *args, **kwargs)

    def object_hook(self, obj):
        if '_type' not in obj:
            return obj
        type = obj['_type']
        if type == 'artist_stats':
            return ArtistStats(artist_name=obj['_artist_name'])
        return obj