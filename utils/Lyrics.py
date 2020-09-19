import re
import string


class Lyrics:
    @staticmethod
    def sanitize(text):
        """
        Remove everything except alphanumeric characters and needed whitespaces
        """
        s = re.sub('\[.*\]', '', text) # remove everything between []
        s = re.sub(r'[^a-zçğıöşüA-ZÇĞİÖŞÜ0-9.\' ]+', ' ', s)
        return Lyrics.remove_redundant_spaces(s)

    @staticmethod
    def sanitize_title(text):
        s = re.sub(r'[^a-zçğıöşüA-ZÇĞİÖŞÜ0-9. ]+', ' ', text)
        return Lyrics.remove_redundant_spaces(s)

    @staticmethod
    def trim(text):
        """
        Trim spaces at the beginning and at the end of the string
        """
        return re.sub("^\s+|\s+$", "", text, flags=re.UNICODE)

    @staticmethod
    def remove_all_spaces(text):
        """
        Remove all spaces from the string. (whitespace + new line + cr)
        """
        t = str.maketrans('', '', string.whitespace)
        return text.translate(t)

    @staticmethod
    def remove_redundant_spaces(text):
        s = Lyrics.trim(text)
        return " ".join(re.split("\s+", s, flags=re.UNICODE))

    @staticmethod
    def salt_artist_url(name):
        name = Lyrics.replace_turkish_chars(name)
        table = str.maketrans(" ", "-")
        return name.translate(table)

    @staticmethod
    def salt_lyrics_is_valid(text):
        black_list = ['nakarat', 'verse', 'bridge']
        text = Lyrics.sanitize(text)
        for l in black_list:
            if l == text.lower():
                return False
        return True

    @staticmethod
    def replace_turkish_chars(text):
        """
        Replace turkish chars in the string with the corresponding chars.
        """
        table = str.maketrans("ğĞıİöÖüÜşŞçÇ", "gGiIoOuUsScC")
        return text.translate(table)

    @staticmethod
    def is_genius_title_valid(song):
        if song['lyrics_state'] != 'complete' or "instrumental" in song['path']:
            return False
        for el in ('Feat', 'Ft.', '(', ')', 'Intro', 'Outro'):
            if el in song['full_title'] or el in song['title_with_featured']:
                return False
        return True

    @staticmethod
    def is_salt_title_valid(title):
        title = Lyrics.trim(title)
        for el in ('Feat', 'Ft.', '(', ')', 'Intro', 'Outro'):
            if el in title:
                return False
        return True
