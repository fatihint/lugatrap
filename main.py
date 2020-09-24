import sys
import argparse
from app import App
from config import config
from utils import Utils


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('-l', action='store_true', help='Fetch lyrics of the given artists.')
    parser.add_argument('-a', action='store_true', help='Analyze the given lyrics.')
    args = parser.parse_args()

    try:
        artists_input_file = config['artists_input_file']
        lyrics_result_file = config['lyrics_result_file']
        stats_result_file = config['stats_result_file']
    except KeyError as e:
        print(f'Error: config.py file missing the key: {e}!')
        return
    else:
        scrape, analyze = args.l, args.a
        app = App(artists_input_file, lyrics_result_file, stats_result_file)
        if not scrape and not analyze:
            # When no arguments given, default behaviour: both scrape and analyze
            error = Utils.scrape_validation(artists_input_file)
            if not error:
                # app.scrape(config["genius_api_token"])
                # app.analyze("")
                print('no errors, good to go')
            else:
                print(f'{error}')
                return
        else:
            # When at least one argument is provided.
            if scrape:
                if Utils.is_token_valid():
                    app.scrape(config['genius_api_token'])
                else:
                    print('Please specify your Genius API token in the config file!')
                    return
            if analyze:
                app.analyze('')

    sys.exit(0)


if __name__ == '__main__':
    main()
