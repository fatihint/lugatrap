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
    def is_token_valid():
        return 'genius_api_token' in config and config['genius_api_token']

    @staticmethod
    def validation(validation_type):
        errors = []
        keys = {'lyrics': 'lyrics_result_file'}
        if validation_type == 'scrape':
            if not Utils.is_token_valid():
                errors.append('Error: please specify your Genius API token in the config file!')
            else:
                keys['artists'] = 'artists_input_file'
        elif validation_type == 'analyze':
            keys['stats'] = 'stats_result_file'
        else:
            errors.append('Validation type unknown...')

        if not errors:
            try:
                for json_key, config_key in keys.items():
                    if (config_key == 'lyrics_result_file' or config_key == 'stats_result_file') and not Utils.file_exists(config[config_key]):
                        with open(Utils.get_base_file_path(config[config_key]), 'w') as f:
                            f.write(json.dumps({json_key: []}))
                    else:
                        with open(config[config_key]) as f:
                            data = json.load(f)
                            if json_key in data:
                                if not type(data[json_key]) == list:
                                    errors.append(
                                        f'Error: key {json_key} in the {config[config_key]} file has a non-list value')
                            else:
                                errors.append(f'Error: file {config[config_key]} is missing the key: {json_key}')
            except KeyError as e:
                errors.append(f'Error: config.py file missing the key: {e}!')
            except FileNotFoundError as e:
                errors.append(f'Error: file {config[config_key]} is not found for {config_key}')
            except json.JSONDecodeError as e:
                errors.append(f'Error: JSON file is invalid')
            except Exception as e:
                errors.append('Something went wrong...')
        return errors

    @staticmethod
    def get_config_values(*keys):
        return {key.split('_')[0]: config[key] for key in keys}
