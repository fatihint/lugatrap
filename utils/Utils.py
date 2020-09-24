import os
import json
from config import config


class Utils:

    @staticmethod
    def get_current_dir():
        return os.path.dirname(os.path.realpath(__file__))

    @staticmethod
    def get_project_base_dir():
        return os.path.abspath(os.path.join(Utils.get_current_dir(), os.pardir))

    @staticmethod
    def get_base_file_path(file_name):
        return os.path.join(Utils.get_project_base_dir(), file_name)

    @staticmethod
    def file_exists(file_name):
        return os.path.exists(os.path.relpath(os.path.join(Utils.get_current_dir(), file_name))) or os.path.exists(
            os.path.abspath(file_name))

    @staticmethod
    def base_file_exists(file_name):
        return Utils.file_exists(Utils.get_base_file_path(file_name))

    @staticmethod
    def is_file_json(*args):
        for file in args:
            if os.path.splitext(file)[1][1:].strip().lower() != 'json':
                return False
        return True

    @staticmethod
    def is_token_valid():
        return 'genius_api_token' in config and config['genius_api_token']

    @staticmethod
    def is_json_file_valid(*args, first_key):
        try:
            with open(file) as f:
                data = json.load(f)
                if first_key in data:
                    print(data)
        except json.JSONDecodeError as e:
            print(f'{e}')
            return False
        else:
            return True

    @staticmethod
    def scrape_validation(artists_input_file):
        error = ''
        if Utils.is_token_valid():
            if Utils.file_exists(artists_input_file):
                if Utils.is_json_file_valid(artists_input_file, 'artists'):
                    return error
            else:
                error = f'Error: {artists_input_file} does not exist!'
        else:
            error = 'Error: please specify your Genius API token in the config file!'
        return error
