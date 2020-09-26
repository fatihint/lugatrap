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

    scrape, analyze = args.l, args.a
    app = App()

    if not scrape and not analyze:
        # All 3 keys are needed.
        scrape_validation_errors = Utils.scrape_validation()
        analyze_validation_errors = Utils.analyze_validation()

        if not scrape_validation_errors and not analyze_validation_errors:
            values = Utils.get_config_values("artists_input_file", 'lyrics_result_file', 'stats_result_file')
            app.scrape(values['artists'], values['lyrics'])
            app.analyze(values['lyrics'], values['stats'])
        else:
            for error in scrape_validation_errors + analyze_validation_errors:
                print(error)
    else:
        if scrape:
            values = Utils.get_config_values('artists_input_file', 'lyrics_result_file')
            app.scrape(values)
        if analyze:
            values = Utils.get_config_values('lyrics_result_file', 'stats_result_file')
            app.analyze(values)

    sys.exit(0)


if __name__ == '__main__':
    main()
