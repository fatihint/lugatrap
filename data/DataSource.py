class DataSource:

    def __init__(self, base_url, artists={}, songs=[]):
        self.base_url = base_url
        self.artists = artists
        self.songs = songs

    def get_song_titles(self):
        raise NotImplementedError

    def get_song_lyrics(self):
        raise NotImplementedError


# base_url = 'https://sarki.alternatifim.com'
# artist_page_url = base_url + '/sarkici'
#
# artists = {'agackakan', 'sehinsah'}
# songs = {}
#
# for artist in artists:
#     songs[artist] = []
#     artist_url = artist_page_url + '/' + artist # https://sarki.alternatifim.com/sarkici/sehinsah
#     artist_page = requests.get(artist_url)
#     soup = BeautifulSoup(artist_page.content, 'html.parser')
#     song_titles = soup.find('div', class_='sarkisozu')
#     ul = song_titles.find('ul')
#
#     for li in ul:
#         a = li.find('a')
#         if not isinstance(a, int):
#             songs[artist].append({
#                 'title': a.text,
#                 'link': a['href']
#             })
#
# for artist, tracks in songs.items():
#     for track in tracks:
#         song_url = base_url + track['link']
#         song_page = requests.get(song_url)
#         soup = BeautifulSoup(song_page.content, 'html.parser')
#         song_lyrics = soup.find('div', class_='sarkisozu').find_all(text=True, recursive=False)
#         results = []
#         for lyric in song_lyrics:
#             if lyric.strip() != '':
#                 results.append(lyric.strip())
#         song_lyrics = ' '.join(results)
#         track['lyrics'] = song_lyrics
#
# for artist, tracks in songs.items():
#     print(artist + ' -> ')
#     for track in tracks:
#         print(track, '\n\n')



# "Bilmiyorum ama Yok olmak ihtimali kafamı kurcalıyor hem de gayri ihtiyari Laleli'den Azize, Ankara'da peşimde " \
# "Kaçmak istesem o gölgem olur peşimde Nasılsa sennheiser kulaklığa İnanmak zorundayım, hatta Benim dinim, tanrım, ibadetim" \
# "Müzik derken Agora'dan kovulsam Bir nebze alınmam Hiçbir şeyden emin olmayınca ağırca yok olmak ihtimali Kafama dank ediyor hem de gayri ihtiyari" \
# "Laleli'den Azize, Ankara'da peşimde Kaçmak istesem o gölgem olur dibimde Nasılsa sennheiser kulaklığa İnanmak zorundayım, hatta" \
# "Benim dinim, tanrım, ibadetim Müzik derken Agora'dan kovulsam Küstah bir bavulla Olanca hali terk Bisküvi ve çaya batık bir paranoya" \
# "Sanki başka yerdeyim o zaman –kalimera! Fevkalade yanılsama Bütün bu kalabalıkta itinayla buram buram aradığım Pans ve permia Ütopyalar güzel değil" \
# "Burkay yazdığını okuyamaz, üryan olur kemikleri Ben de biliyorum"