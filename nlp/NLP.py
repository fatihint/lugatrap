import grpc
from .zemberek import language_id_pb2 as z_langid
from .zemberek import language_id_pb2_grpc as z_langid_g
from .zemberek import normalization_pb2 as z_normalization
from .zemberek import normalization_pb2_grpc as z_normalization_g
from .zemberek import preprocess_pb2 as z_preprocess
from .zemberek import preprocess_pb2_grpc as z_preprocess_g
from .zemberek import morphology_pb2 as z_morphology
from .zemberek import morphology_pb2_grpc as z_morphology_g
from models import ArtistStats


class NLP:
    def __init__(self, artists):

        self.channel = grpc.insecure_channel('localhost:6789')
        self.langid_stub = z_langid_g.LanguageIdServiceStub(self.channel)
        self.normalization_stub = z_normalization_g.NormalizationServiceStub(self.channel)
        self.preprocess_stub = z_preprocess_g.PreprocessingServiceStub(self.channel)
        self.morphology_stub = z_morphology_g.MorphologyServiceStub(self.channel)
        self.artists = artists

    def find_lang_id(self, i):
        return self.langid_stub.Detect(z_langid.LanguageIdRequest(input=i))

    def tokenize(self, i):
        return self.preprocess_stub.Tokenize(z_preprocess.TokenizationRequest(input=i))

    def normalize(self, i):
        return self.normalization_stub.Normalize(z_normalization.NormalizationRequest(input=i))

    def analyze(self, i):
        return self.morphology_stub.AnalyzeSentence(z_morphology.SentenceAnalysisRequest(input=i))

    def start(self):
        blacklist = ['punc', 'unk', 'num', 'conj']
        stats = []
        for artist in self.artists:
            lemmas_result = []
            artist_stats = ArtistStats(artist.name)
            for song in artist.songs:
                analysed_result = self.analyze(song.lyrics)
                for a in analysed_result.results:
                    best = a.best
                    lemma = best.lemmas[-1]
                    if best.pos.lower() not in blacklist:
                        lemmas_result.append(best.dictionaryItem.lemma.lower())
            artist_stats.vocab = lemmas_result
            stats.append(artist_stats)

        return stats

    def process_stats(self, stats):
        for s in stats:
            s.analyzed_word_count = len(s.vocab)
            s.unique_word_count = len(set(s.vocab))
            s.calculate_top_ten()
        return stats
