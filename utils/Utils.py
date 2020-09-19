import os


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
        return os.path.exists(os.path.relpath(os.path.join(Utils.get_current_dir(), file_name))) or os.path.exists(os.path.abspath(file_name))

    @staticmethod
    def base_file_exists(file_name):
        return Utils.file_exists(Utils.get_base_file_path(file_name))
