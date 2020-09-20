import sys
import argparse
from app import App


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('-l', metavar='artists.json', help='Scrape the lyrics of given artists.')
    parser.add_argument('-a', metavar='lyrics.json', help='Analyze the given lyrics.')
    args = parser.parse_args()

    art, res = args.l, args.a

    artists_input = lyrics_input = ''

    if not art and not res:
        artists_input = 'artists.json'
        lyrics_input = 'lyrics.json'
    else:
        if art:
            artists_input = art
            if res:
                lyrics_input = res
        elif res:
            lyrics_input = res

    print('Artist input:', artists_input)
    print('Analyze input:', lyrics_input, '\n')

    app = App()
    if artists_input:
        app.lyrics(artists_input, lyrics_input)
    if lyrics_input:
        app.analyze(lyrics_input)

    sys.exit(0)


if __name__ == '__main__':
    main()
