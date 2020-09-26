import sys
import argparse

from config import config
from app import App
from utils import Utils


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('-l', action='store_true', help='Fetch lyrics of the given artists.')
    parser.add_argument('-a', action='store_true', help='Analyze the given lyrics.')
    args = parser.parse_args()

    def start_scrape(app):
        scrape_validation_errors = Utils.scrape_validation()
        if not scrape_validation_errors:
            values = Utils.get_config_values('artists_input_file', 'lyrics_result_file')
            app.scrape(token=config['genius_api_token'], artists_input=values['artists'], lyrics_result=values['lyrics'])
        else:
            for error in scrape_validation_errors:
                print(error)
                exit(0)

    def start_analyze(app):
        analyze_validation_errors = Utils.analyze_validation()
        if not analyze_validation_errors:
            values = Utils.get_config_values('lyrics_result_file', 'stats_result_file')
            app.analyze(lyrics_result=values['lyrics'], stats_result=values['stats'])
        else:
            for error in analyze_validation_errors:
                print(error)
                exit(0)

    scrape, analyze = args.l, args.a
    app = App()

    if not scrape and not analyze:
        # Default behavior. Both scrape and analyze.
        start_scrape(app)
        start_analyze(app)
    else:
        # One or both of the arguments are given.
        if scrape:
            start_scrape(app)
        if analyze:
            start_analyze(app)

    sys.exit(0)


if __name__ == '__main__':
    main()
