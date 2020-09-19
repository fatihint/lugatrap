import sys
from app import App
from utils import Utils


def main():
    if len(sys.argv) < 2:
        if Utils.file_exists('artists.json'):
            input_file = 'artists.json'
        else:
            print('Usage: main.py input_file.json output_file.json')
            return
    else:
        input_file_arg = sys.argv[1]
        if input_file_arg.split('.')[-1] != 'json':
            print('Input file extension has to be json...')
            return
        else:
            if Utils.file_exists(input_file_arg):
                input_file = input_file_arg
            else:
                print('File not found...')
                return

    app = App(input_file)
    app.start()
    app.analyze()
    sys.exit(0)


if __name__ == '__main__':
    main()
