# lugatrap
Vocabulary investigation of turkish rap musicians.

See the results and graphs generated here: https://fatihint.github.io/lugatrap

Read the blog post about the investigation: https://fatihintek.in/turkce-rapte-kelime-dagarcigi

## Configuration

Define the input and output files in `config.py`:

    config = {
        'genius_api_token': 'YOUR_GENIUS_API_TOKEN',
        'artists_input_file': 'artists.json',
        'lyrics_result_file': 'lyrics.json',
        'stats_result_file': 'stats.json',
        'analyze_threshold': 10000
    }
 
 `genis_api_token`: (required for scrape mode) Two different sources have been used for lyrics scraping. One of them is [Genius](https://www.genius.com) and its API requires a token to use which you can get from [here](https://genius.com/api-clients/new).
    
`artists_input_file`: (required for scrape mode) is the json file for artist name inputs.

`lyrics_result_file`: (required) is the output file for saving artists' lyrics after the scrape operation.

 `stats_result_file`: (required for analyze mode) is the output file for saving the artist stats after the nlp analyzing.
 
 `analyze_threshold`: (optional) defines the number of words that you want to analyze per artist. In this example, only first 10000 words of the artists will be analyzed.
 
 ## Usage

App has 2 modes: scraping artists' lyrics and analyzing them, respectively.

As a default, both modes are run:

    $ python main.py
     
Either of the modes can be run seperately as well. (*-l* parameter states the lyrics scrape, *-a* parameter states the lyrics analyze)

    $ python main.py [-l] [-a]
    
    
**Important** : Word analyzing is conducted via Zemberek NLP library by using grpc server. Therefore, analyze mode requires Zemberek application to work. To download the jar file, go [here](https://drive.google.com/drive/u/0/folders/0B9TrB39LQKZWSjNKdVcwWUxxUm8) or to read more about Zemberek, go [here](https://github.com/ahmetaa/zemberek-nlp).

After the download, run zemberek application with grpc server option:

    $ java -jar zemberek-full.jar StartGrpcServer
    
 ## Sources
 
 For lyric scraping: https://www.genius.com, https://sarki.alternatifim.com
 
 **Zemberek** NLP library to analyze lyrics: https://github.com/ahmetaa/zemberek-nlp