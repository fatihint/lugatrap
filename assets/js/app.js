
const canvas = document.getElementById('myChart');
      canvas2 = document.getElementById('myChart2'),
      ctx = canvas.getContext('2d'),
      ctx2 = canvas2.getContext('2d'),
      doughnutImage = document.getElementById("doughnut-image"),
      artistName = document.getElementById('artist-name'),
      topTenTitle = document.getElementById('top-ten-title'),
      graphDesc = document.getElementById('graph-desc'),
      allButton = document.getElementById('all'),
      fttButton = document.getElementById('first-ten-thousand'),
      ratioButton = document.getElementById('ratio'),
      container = document.getElementById('container'),
      i = Math.round(container.offsetWidth / 27);

const allStats = {
    "stats": [
    {
        "_type": "artist_stats",
        "_artist_name": "ağaçkakan",
        "_analyzed_word_count": 13311,
        "_unique_word_count": 3612,
        "_top_ten_words": {
            "bir": 314,
            "ben": 200,
            "olmak": 196,
            "bu": 167,
            "yok": 102,
            "etmek": 99,
            "ne": 92,
            "o": 90,
            "iç": 78,
            "sen": 72
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "mode xl",
        "_analyzed_word_count": 15789,
        "_unique_word_count": 2810,
        "_top_ten_words": {
            "sen": 322,
            "olmak": 257,
            "bir": 254,
            "bu": 241,
            "ben": 226,
            "yol": 176,
            "bakmak": 132,
            "vermek": 119,
            "kalmak": 119,
            "göz": 113
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ben fero",
        "_analyzed_word_count": 4488,
        "_unique_word_count": 1118,
        "_top_ten_words": {
            "ben": 132,
            "olmak": 81,
            "demek": 75,
            "bu": 68,
            "sen": 55,
            "yapmak": 52,
            "çok": 51,
            "iş": 49,
            "gibi": 46,
            "için": 44
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ezhel",
        "_analyzed_word_count": 11321,
        "_unique_word_count": 2170,
        "_top_ten_words": {
            "ben": 327,
            "olmak": 221,
            "sen": 181,
            "demek": 156,
            "bu": 131,
            "her": 130,
            "o": 116,
            "ne": 113,
            "bir": 92,
            "yapmak": 91
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "anıl piyancı",
        "_analyzed_word_count": 13285,
        "_unique_word_count": 2353,
        "_top_ten_words": {
            "ben": 291,
            "bu": 280,
            "olmak": 217,
            "bir": 215,
            "sen": 208,
            "yok": 114,
            "bakmak": 111,
            "demek": 103,
            "değil": 95,
            "her": 94
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "şehinşah",
        "_analyzed_word_count": 28720,
        "_unique_word_count": 5000,
        "_top_ten_words": {
            "ben": 564,
            "olmak": 360,
            "bir": 343,
            "bu": 335,
            "sen": 318,
            "o": 250,
            "ne": 229,
            "rap": 214,
            "etmek": 201,
            "yapmak": 191
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "şanışer",
        "_analyzed_word_count": 28914,
        "_unique_word_count": 3777,
        "_top_ten_words": {
            "ben": 954,
            "olmak": 554,
            "bu": 513,
            "sen": 506,
            "bir": 300,
            "var": 285,
            "yok": 233,
            "gelmek": 219,
            "o": 212,
            "her": 206
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "contra",
        "_analyzed_word_count": 21431,
        "_unique_word_count": 3089,
        "_top_ten_words": {
            "ben": 647,
            "bu": 569,
            "olmak": 356,
            "o": 285,
            "yok": 246,
            "gibi": 241,
            "sen": 236,
            "her": 222,
            "ne": 209,
            "bok": 183
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ceza",
        "_analyzed_word_count": 50527,
        "_unique_word_count": 4862,
        "_top_ten_words": {
            "ben": 1476,
            "bir": 1140,
            "bu": 933,
            "olmak": 924,
            "sen": 703,
            "her": 546,
            "yok": 502,
            "var": 444,
            "gelmek": 432,
            "bakmak": 424
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sagopa kajmer",
        "_analyzed_word_count": 75818,
        "_unique_word_count": 6565,
        "_top_ten_words": {
            "ben": 1712,
            "bir": 1437,
            "olmak": 1351,
            "bu": 1018,
            "sen": 922,
            "etmek": 503,
            "kendi": 482,
            "o": 480,
            "var": 472,
            "her": 468
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "killa hakan",
        "_analyzed_word_count": 20630,
        "_unique_word_count": 2959,
        "_top_ten_words": {
            "olmak": 382,
            "bir": 378,
            "ben": 303,
            "sen": 302,
            "bakmak": 246,
            "bu": 238,
            "gelmek": 172,
            "demek": 149,
            "yer": 148,
            "göz": 148
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "khontkar",
        "_analyzed_word_count": 14915,
        "_unique_word_count": 2319,
        "_top_ten_words": {
            "ben": 417,
            "sen": 299,
            "bakmak": 230,
            "yok": 221,
            "bu": 218,
            "olmak": 173,
            "o": 159,
            "yine": 119,
            "i": 118,
            "ne": 113
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "norm ender",
        "_analyzed_word_count": 10958,
        "_unique_word_count": 2234,
        "_top_ten_words": {
            "bu": 343,
            "ben": 310,
            "sen": 201,
            "olmak": 186,
            "bir": 175,
            "o": 140,
            "bakmak": 101,
            "yok": 101,
            "demek": 90,
            "ne": 89
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "patron",
        "_analyzed_word_count": 25629,
        "_unique_word_count": 3840,
        "_top_ten_words": {
            "ben": 710,
            "sen": 477,
            "bu": 452,
            "olmak": 373,
            "bir": 262,
            "o": 247,
            "yok": 245,
            "para": 215,
            "her": 195,
            "ne": 188
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "tepki",
        "_analyzed_word_count": 12173,
        "_unique_word_count": 2123,
        "_top_ten_words": {
            "bu": 411,
            "olmak": 211,
            "ben": 192,
            "sen": 150,
            "her": 134,
            "o": 131,
            "ne": 113,
            "benji": 105,
            "daha": 100,
            "yine": 97
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sokrat st",
        "_analyzed_word_count": 14172,
        "_unique_word_count": 2159,
        "_top_ten_words": {
            "ben": 485,
            "bu": 300,
            "olmak": 285,
            "sen": 275,
            "bir": 207,
            "değil": 154,
            "yok": 136,
            "ne": 134,
            "hayat": 124,
            "her": 122
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "kamufle",
        "_analyzed_word_count": 8399,
        "_unique_word_count": 1921,
        "_top_ten_words": {
            "ben": 226,
            "olmak": 175,
            "bu": 158,
            "bir": 124,
            "sen": 100,
            "ne": 81,
            "etmek": 79,
            "yok": 78,
            "var": 76,
            "her": 69
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "no.1",
        "_analyzed_word_count": 39726,
        "_unique_word_count": 4172,
        "_top_ten_words": {
            "ben": 1214,
            "bu": 794,
            "sen": 730,
            "olmak": 722,
            "bir": 420,
            "yok": 348,
            "gelmek": 304,
            "gibi": 296,
            "bakmak": 276,
            "her": 264
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "server uraz",
        "_analyzed_word_count": 30931,
        "_unique_word_count": 4257,
        "_top_ten_words": {
            "ben": 868,
            "bu": 601,
            "bir": 514,
            "olmak": 506,
            "sen": 412,
            "o": 292,
            "yok": 260,
            "her": 231,
            "var": 220,
            "kalmak": 218
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "xir",
        "_analyzed_word_count": 13343,
        "_unique_word_count": 2315,
        "_top_ten_words": {
            "ben": 459,
            "bu": 349,
            "olmak": 309,
            "sen": 298,
            "bir": 177,
            "ne": 147,
            "o": 140,
            "yok": 130,
            "her": 119,
            "gelmek": 111
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "grogi",
        "_analyzed_word_count": 7081,
        "_unique_word_count": 1804,
        "_top_ten_words": {
            "bu": 135,
            "ben": 130,
            "olmak": 124,
            "yok": 92,
            "o": 88,
            "sen": 77,
            "bir": 70,
            "gün": 69,
            "her": 64,
            "kafa": 64
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ceg",
        "_analyzed_word_count": 22601,
        "_unique_word_count": 3614,
        "_top_ten_words": {
            "ben": 1015,
            "bu": 848,
            "olmak": 327,
            "o": 323,
            "değil": 234,
            "vermek": 217,
            "gibi": 199,
            "etmek": 172,
            "her": 169,
            "sen": 166
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "saian",
        "_analyzed_word_count": 14957,
        "_unique_word_count": 3620,
        "_top_ten_words": {
            "ben": 400,
            "bir": 342,
            "sen": 296,
            "bu": 155,
            "olmak": 145,
            "gelmek": 112,
            "biz": 103,
            "var": 100,
            "bakmak": 99,
            "her": 95
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "aga b",
        "_analyzed_word_count": 4899,
        "_unique_word_count": 1455,
        "_top_ten_words": {
            "bu": 147,
            "ne": 93,
            "biz": 61,
            "yok": 54,
            "bir": 51,
            "ben": 51,
            "sen": 49,
            "o": 48,
            "olmak": 46,
            "daha": 46
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "şam",
        "_analyzed_word_count": 2144,
        "_unique_word_count": 704,
        "_top_ten_words": {
            "bu": 92,
            "bir": 50,
            "ben": 48,
            "olmak": 46,
            "sen": 27,
            "bakmak": 26,
            "yok": 23,
            "yol": 23,
            "yaşamak": 21,
            "hayat": 19
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "fuat",
        "_analyzed_word_count": 8440,
        "_unique_word_count": 2761,
        "_top_ten_words": {
            "olmak": 126,
            "gibi": 99,
            "hepsi": 94,
            "ben": 80,
            "gelmek": 78,
            "sen": 73,
            "yok": 67,
            "bir": 67,
            "fuat": 64,
            "el": 64
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ayben",
        "_analyzed_word_count": 10374,
        "_unique_word_count": 1937,
        "_top_ten_words": {
            "ben": 275,
            "olmak": 173,
            "bu": 165,
            "var": 160,
            "sen": 160,
            "rap": 148,
            "bir": 143,
            "o": 129,
            "gelmek": 128,
            "her": 118
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "hidra",
        "_analyzed_word_count": 33531,
        "_unique_word_count": 4567,
        "_top_ten_words": {
            "ben": 826,
            "bu": 800,
            "bir": 447,
            "olmak": 442,
            "o": 338,
            "yok": 325,
            "var": 305,
            "sen": 303,
            "demek": 263,
            "gibi": 254
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "joker",
        "_analyzed_word_count": 25595,
        "_unique_word_count": 3681,
        "_top_ten_words": {
            "ben": 628,
            "bu": 626,
            "olmak": 359,
            "sen": 321,
            "bir": 273,
            "etmek": 240,
            "yapmak": 234,
            "demek": 190,
            "ne": 185,
            "değil": 178
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "allame",
        "_analyzed_word_count": 27679,
        "_unique_word_count": 4666,
        "_top_ten_words": {
            "bu": 606,
            "ben": 572,
            "olmak": 472,
            "sen": 439,
            "bir": 367,
            "o": 226,
            "yok": 220,
            "etmek": 202,
            "vermek": 196,
            "var": 182
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sansar salvo",
        "_analyzed_word_count": 32654,
        "_unique_word_count": 4074,
        "_top_ten_words": {
            "bu": 729,
            "ben": 685,
            "olmak": 648,
            "bir": 381,
            "sen": 350,
            "her": 283,
            "bakmak": 274,
            "o": 261,
            "var": 247,
            "yok": 222
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "keişan",
        "_analyzed_word_count": 5310,
        "_unique_word_count": 1435,
        "_top_ten_words": {
            "ben": 145,
            "bu": 118,
            "sen": 74,
            "olmak": 72,
            "gucci": 61,
            "demek": 53,
            "hep": 52,
            "gibi": 47,
            "var": 45,
            "istemek": 45
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "hayki",
        "_analyzed_word_count": 24285,
        "_unique_word_count": 3440,
        "_top_ten_words": {
            "ben": 810,
            "sen": 525,
            "bu": 524,
            "bir": 373,
            "olmak": 352,
            "ne": 227,
            "yok": 225,
            "o": 214,
            "her": 169,
            "bakmak": 163
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "dr. fuchs",
        "_analyzed_word_count": 13397,
        "_unique_word_count": 1950,
        "_top_ten_words": {
            "ben": 373,
            "bu": 272,
            "sen": 270,
            "olmak": 225,
            "bir": 212,
            "her": 158,
            "bilmek": 145,
            "basmak": 132,
            "gün": 126,
            "o": 118
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "yener çevik",
        "_analyzed_word_count": 9320,
        "_unique_word_count": 2195,
        "_top_ten_words": {
            "ben": 172,
            "sen": 150,
            "olmak": 135,
            "bu": 110,
            "bir": 81,
            "demek": 77,
            "var": 73,
            "gitmek": 70,
            "gelmek": 67,
            "yol": 64
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "farazi v kayra",
        "_analyzed_word_count": 10355,
        "_unique_word_count": 2057,
        "_top_ten_words": {
            "bir": 361,
            "ben": 249,
            "bu": 206,
            "olmak": 156,
            "sen": 135,
            "o": 110,
            "gelmek": 103,
            "var": 99,
            "bakmak": 84,
            "yok": 79
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "da poet",
        "_analyzed_word_count": 7877,
        "_unique_word_count": 2075,
        "_top_ten_words": {
            "ben": 177,
            "bu": 112,
            "olmak": 102,
            "sen": 94,
            "bir": 93,
            "yine": 71,
            "yok": 69,
            "var": 67,
            "vermek": 67,
            "rap": 61
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "karaçalı",
        "_analyzed_word_count": 11048,
        "_unique_word_count": 3250,
        "_top_ten_words": {
            "bir": 232,
            "ben": 198,
            "olmak": 138,
            "sen": 124,
            "bu": 116,
            "o": 89,
            "yok": 60,
            "her": 58,
            "etmek": 56,
            "vermek": 56
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ados",
        "_analyzed_word_count": 19417,
        "_unique_word_count": 2983,
        "_top_ten_words": {
            "ben": 492,
            "bir": 456,
            "bu": 393,
            "olmak": 346,
            "sen": 257,
            "yok": 207,
            "o": 198,
            "ne": 171,
            "insan": 161,
            "var": 157
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ethnique punch",
        "_analyzed_word_count": 3985,
        "_unique_word_count": 1979,
        "_top_ten_words": {
            "olmak": 65,
            "bu": 63,
            "bir": 55,
            "ben": 35,
            "ne": 24,
            "kalmak": 24,
            "iç": 20,
            "zaman": 18,
            "o": 18,
            "her": 18
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "eypio",
        "_analyzed_word_count": 5928,
        "_unique_word_count": 1600,
        "_top_ten_words": {
            "ben": 168,
            "bu": 123,
            "biz": 93,
            "var": 92,
            "olmak": 82,
            "sen": 81,
            "yok": 69,
            "demek": 60,
            "gelmek": 59,
            "bir": 52
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ati242",
        "_analyzed_word_count": 8692,
        "_unique_word_count": 1869,
        "_top_ten_words": {
            "bu": 173,
            "kafa": 140,
            "ben": 139,
            "sen": 135,
            "ey": 121,
            "o": 105,
            "yok": 92,
            "ah": 90,
            "olmak": 89,
            "bakmak": 78
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "beta",
        "_analyzed_word_count": 14825,
        "_unique_word_count": 2660,
        "_top_ten_words": {
            "ben": 713,
            "sen": 481,
            "olmak": 343,
            "bu": 252,
            "bir": 180,
            "o": 159,
            "yok": 157,
            "yapmak": 146,
            "var": 130,
            "çok": 119
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "heja",
        "_analyzed_word_count": 419,
        "_unique_word_count": 183,
        "_top_ten_words": {
            "biri": 21,
            "iç": 21,
            "bugün": 18,
            "ben": 15,
            "kan": 15,
            "toz": 13,
            "ter": 12,
            "var": 11,
            "bakmak": 10,
            "kurşun": 8
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "gazapizm",
        "_analyzed_word_count": 15762,
        "_unique_word_count": 2726,
        "_top_ten_words": {
            "bir": 472,
            "ben": 337,
            "olmak": 299,
            "bu": 293,
            "sen": 180,
            "yok": 175,
            "bakmak": 153,
            "yol": 141,
            "kalmak": 134,
            "o": 126
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "istanbul trip",
        "_analyzed_word_count": 1060,
        "_unique_word_count": 523,
        "_top_ten_words": {
            "bu": 23,
            "olmak": 20,
            "ateş": 17,
            "yak": 16,
            "sokak": 16,
            "bir": 13,
            "sen": 13,
            "ben": 11,
            "ne": 11,
            "biz": 11
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "maestro",
        "_analyzed_word_count": 2534,
        "_unique_word_count": 1040,
        "_top_ten_words": {
            "ben": 57,
            "bu": 51,
            "sokak": 42,
            "bakmak": 33,
            "olmak": 29,
            "bir": 28,
            "el": 26,
            "rap": 25,
            "var": 25,
            "la": 21
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "zen-g",
        "_analyzed_word_count": 898,
        "_unique_word_count": 464,
        "_top_ten_words": {
            "gelmek": 20,
            "bir": 19,
            "bu": 18,
            "olmak": 17,
            "ben": 15,
            "yok": 14,
            "sen": 14,
            "berlin": 14,
            "ey": 13,
            "hast": 12
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "delaredo",
        "_analyzed_word_count": 928,
        "_unique_word_count": 394,
        "_top_ten_words": {
            "yol": 24,
            "bu": 18,
            "olmak": 17,
            "iç": 16,
            "almak": 16,
            "biz": 14,
            "etmek": 13,
            "yok": 12,
            "al": 12,
            "oyun": 11
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "burak king",
        "_analyzed_word_count": 2893,
        "_unique_word_count": 710,
        "_top_ten_words": {
            "var": 107,
            "sen": 95,
            "ben": 90,
            "ne": 79,
            "bir": 54,
            "mı": 47,
            "gibi": 44,
            "dert": 43,
            "demek": 41,
            "bu": 36
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "lil zey",
        "_analyzed_word_count": 685,
        "_unique_word_count": 327,
        "_top_ten_words": {
            "o": 27,
            "ben": 17,
            "yok": 16,
            "bu": 14,
            "bakmak": 13,
            "hep": 11,
            "bir": 11,
            "almak": 11,
            "el": 10,
            "olmak": 9
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "burry soprano",
        "_analyzed_word_count": 3021,
        "_unique_word_count": 872,
        "_top_ten_words": {
            "bu": 83,
            "ben": 83,
            "yok": 47,
            "için": 46,
            "her": 43,
            "hep": 40,
            "olmak": 39,
            "yapmak": 39,
            "çıkmak": 36,
            "bakmak": 35
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "leşker asakir",
        "_analyzed_word_count": 482,
        "_unique_word_count": 349,
        "_top_ten_words": {
            "bu": 11,
            "ben": 10,
            "her": 7,
            "bir": 5,
            "sen": 5,
            "kan": 5,
            "kalkmak": 4,
            "gibi": 4,
            "kalp": 4,
            "karşı": 3
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "tankurt manas",
        "_analyzed_word_count": 14986,
        "_unique_word_count": 3203,
        "_top_ten_words": {
            "ben": 485,
            "bu": 370,
            "olmak": 184,
            "sen": 171,
            "yok": 160,
            "değil": 150,
            "gibi": 137,
            "bakmak": 128,
            "bir": 116,
            "yol": 112
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "motive",
        "_analyzed_word_count": 968,
        "_unique_word_count": 467,
        "_top_ten_words": {
            "bu": 18,
            "değil": 18,
            "ben": 16,
            "olmak": 15,
            "sen": 15,
            "aşk": 13,
            "ah": 12,
            "gibi": 11,
            "istemek": 11,
            "için": 11
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "massaka",
        "_analyzed_word_count": 5510,
        "_unique_word_count": 1324,
        "_top_ten_words": {
            "die": 229,
            "demek": 163,
            "i̇st": 78,
            "sokak": 59,
            "biz": 56,
            "ben": 53,
            "und": 51,
            "in": 51,
            "das": 48,
            "sen": 47
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "uzi212",
        "_analyzed_word_count": 2655,
        "_unique_word_count": 816,
        "_top_ten_words": {
            "olmak": 49,
            "yok": 37,
            "bu": 33,
            "my": 29,
            "sen": 27,
            "bakmak": 26,
            "her": 26,
            "var": 26,
            "ben": 23,
            "mi": 22
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "muşta",
        "_analyzed_word_count": 2079,
        "_unique_word_count": 822,
        "_top_ten_words": {
            "ben": 88,
            "bu": 60,
            "olmak": 49,
            "o": 35,
            "muş": 30,
            "bir": 29,
            "serseri": 23,
            "sokak": 22,
            "vermek": 20,
            "sen": 20
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ozbi",
        "_analyzed_word_count": 10024,
        "_unique_word_count": 2024,
        "_top_ten_words": {
            "ben": 290,
            "bir": 174,
            "olmak": 172,
            "bu": 169,
            "sen": 161,
            "o": 133,
            "gibi": 104,
            "demek": 91,
            "gelmek": 90,
            "yok": 79
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sehabe",
        "_analyzed_word_count": 22533,
        "_unique_word_count": 3261,
        "_top_ten_words": {
            "ben": 778,
            "sen": 449,
            "olmak": 415,
            "bu": 345,
            "bir": 270,
            "demek": 257,
            "yok": 243,
            "o": 202,
            "bakmak": 199,
            "gelmek": 184
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ahiyan",
        "_analyzed_word_count": 5123,
        "_unique_word_count": 1514,
        "_top_ten_words": {
            "ben": 112,
            "olmak": 99,
            "bu": 81,
            "ne": 77,
            "sen": 61,
            "o": 46,
            "etmek": 45,
            "demek": 44,
            "çok": 37,
            "gün": 37
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "aspova",
        "_analyzed_word_count": 12471,
        "_unique_word_count": 1799,
        "_top_ten_words": {
            "bu": 288,
            "olmak": 238,
            "ben": 228,
            "bir": 169,
            "sen": 147,
            "yok": 133,
            "her": 122,
            "ey": 120,
            "o": 119,
            "hep": 113
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "çağrı sinci",
        "_analyzed_word_count": 7070,
        "_unique_word_count": 1880,
        "_top_ten_words": {
            "ben": 151,
            "sen": 129,
            "bu": 97,
            "olmak": 96,
            "bir": 78,
            "demek": 71,
            "biz": 68,
            "var": 63,
            "o": 60,
            "etmek": 59
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "stabil",
        "_analyzed_word_count": 6634,
        "_unique_word_count": 1549,
        "_top_ten_words": {
            "ben": 263,
            "bu": 146,
            "olmak": 106,
            "sen": 85,
            "var": 77,
            "değil": 71,
            "o": 70,
            "kadar": 66,
            "bir": 60,
            "hayat": 58
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "tahribad-ı isyan",
        "_analyzed_word_count": 6264,
        "_unique_word_count": 1590,
        "_top_ten_words": {
            "ben": 178,
            "bu": 164,
            "olmak": 108,
            "o": 105,
            "sen": 92,
            "biz": 79,
            "ghetto": 78,
            "ne": 77,
            "bir": 69,
            "demek": 60
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "lider",
        "_analyzed_word_count": 1926,
        "_unique_word_count": 734,
        "_top_ten_words": {
            "bir": 76,
            "olmak": 54,
            "vay": 37,
            "ben": 36,
            "dünya": 29,
            "sen": 28,
            "gelmek": 24,
            "bu": 24,
            "her": 21,
            "gitmek": 17
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "emboli",
        "_analyzed_word_count": 3775,
        "_unique_word_count": 1752,
        "_top_ten_words": {
            "bu": 63,
            "ben": 54,
            "sen": 41,
            "gibi": 32,
            "olmak": 31,
            "bir": 30,
            "vermek": 28,
            "propaganda": 28,
            "sokak": 24,
            "kafa": 20
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "aksan",
        "_analyzed_word_count": 2669,
        "_unique_word_count": 662,
        "_top_ten_words": {
            "bu": 117,
            "ben": 97,
            "olmak": 53,
            "o": 42,
            "her": 41,
            "var": 36,
            "b": 32,
            "yüz": 32,
            "bir": 31,
            "yok": 28
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "kozmos",
        "_analyzed_word_count": 2174,
        "_unique_word_count": 812,
        "_top_ten_words": {
            "ben": 58,
            "bir": 57,
            "olmak": 38,
            "sen": 35,
            "bu": 34,
            "bakmak": 33,
            "yok": 29,
            "her": 27,
            "var": 26,
            "vermek": 22
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "metth",
        "_analyzed_word_count": 1579,
        "_unique_word_count": 399,
        "_top_ten_words": {
            "biz": 92,
            "gang": 88,
            "bura": 81,
            "ben": 39,
            "manolya": 32,
            "sen": 27,
            "bu": 23,
            "için": 18,
            "çekmek": 17,
            "ne": 17
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "velet",
        "_analyzed_word_count": 7786,
        "_unique_word_count": 1497,
        "_top_ten_words": {
            "ben": 306,
            "bu": 189,
            "sen": 168,
            "olmak": 159,
            "bir": 153,
            "demek": 93,
            "var": 87,
            "o": 71,
            "gelmek": 67,
            "vermek": 65
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ilke",
        "_analyzed_word_count": 2002,
        "_unique_word_count": 673,
        "_top_ten_words": {
            "ben": 50,
            "yok": 50,
            "olmak": 45,
            "bu": 42,
            "yol": 37,
            "bakmak": 26,
            "var": 24,
            "o": 23,
            "her": 23,
            "şey": 22
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "maw",
        "_analyzed_word_count": 920,
        "_unique_word_count": 284,
        "_top_ten_words": {
            "bu": 31,
            "ben": 27,
            "sen": 22,
            "kafa": 19,
            "sokak": 18,
            "para": 17,
            "olmak": 16,
            "gelmek": 14,
            "niçin": 13,
            "iç": 12
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "kezzo",
        "_analyzed_word_count": 8424,
        "_unique_word_count": 2059,
        "_top_ten_words": {
            "bu": 162,
            "olmak": 120,
            "ben": 117,
            "bir": 101,
            "var": 89,
            "her": 77,
            "sen": 73,
            "o": 71,
            "yok": 67,
            "demek": 63
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "uur",
        "_analyzed_word_count": 2395,
        "_unique_word_count": 671,
        "_top_ten_words": {
            "keçiören": 83,
            "olmak": 61,
            "sen": 60,
            "biz": 53,
            "bu": 47,
            "kafa": 43,
            "ben": 39,
            "çukur": 33,
            "ne": 26,
            "dem": 25
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "yung ouzo",
        "_analyzed_word_count": 1519,
        "_unique_word_count": 448,
        "_top_ten_words": {
            "hep": 60,
            "peki": 48,
            "ben": 45,
            "ayran": 39,
            "demek": 33,
            "yok": 24,
            "kafa": 23,
            "şimdi": 21,
            "el": 19,
            "süzülmek": 19
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "mrf",
        "_analyzed_word_count": 9785,
        "_unique_word_count": 1933,
        "_top_ten_words": {
            "ben": 225,
            "bu": 204,
            "olmak": 173,
            "yol": 163,
            "yok": 127,
            "vermek": 118,
            "her": 100,
            "biz": 94,
            "sen": 92,
            "gelmek": 90
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "cartel",
        "_analyzed_word_count": 2135,
        "_unique_word_count": 754,
        "_top_ten_words": {
            "demek": 43,
            "bu": 42,
            "biz": 41,
            "cartel": 37,
            "sen": 37,
            "bir": 34,
            "olmak": 34,
            "die": 29,
            "para": 28,
            "und": 27
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "erci e",
        "_analyzed_word_count": 4397,
        "_unique_word_count": 1018,
        "_top_ten_words": {
            "ben": 151,
            "sen": 129,
            "bir": 127,
            "gelmek": 126,
            "bu": 114,
            "olmak": 75,
            "hadi": 60,
            "hep": 49,
            "ti": 48,
            "çok": 45
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "karakan",
        "_analyzed_word_count": 3169,
        "_unique_word_count": 916,
        "_top_ten_words": {
            "ben": 79,
            "gelmek": 67,
            "olmak": 59,
            "sen": 57,
            "bu": 56,
            "ne": 50,
            "bir": 49,
            "yok": 48,
            "ev": 44,
            "ses": 40
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sirhot",
        "_analyzed_word_count": 2456,
        "_unique_word_count": 791,
        "_top_ten_words": {
            "olmak": 61,
            "sen": 58,
            "her": 53,
            "kopmak": 49,
            "ben": 46,
            "bu": 38,
            "etmek": 32,
            "gece": 29,
            "göz": 28,
            "hep": 25
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sahtiyan",
        "_analyzed_word_count": 9873,
        "_unique_word_count": 2461,
        "_top_ten_words": {
            "ben": 228,
            "olmak": 221,
            "sen": 186,
            "bu": 144,
            "gelmek": 107,
            "bir": 102,
            "yok": 85,
            "her": 85,
            "para": 83,
            "o": 75
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ramiz",
        "_analyzed_word_count": 2537,
        "_unique_word_count": 715,
        "_top_ten_words": {
            "ben": 92,
            "bu": 89,
            "gibi": 61,
            "bir": 41,
            "biz": 38,
            "sen": 37,
            "çok": 35,
            "mi": 34,
            "etmek": 32,
            "olmak": 31
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sancak",
        "_analyzed_word_count": 14952,
        "_unique_word_count": 1696,
        "_top_ten_words": {
            "sen": 483,
            "ben": 473,
            "olmak": 279,
            "bu": 277,
            "bir": 274,
            "o": 197,
            "gelmek": 188,
            "yok": 182,
            "yine": 164,
            "ne": 156
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "taladro",
        "_analyzed_word_count": 25956,
        "_unique_word_count": 2981,
        "_top_ten_words": {
            "sen": 824,
            "ben": 763,
            "bir": 660,
            "bu": 486,
            "olmak": 407,
            "ne": 274,
            "o": 273,
            "göz": 258,
            "gelmek": 257,
            "aşk": 224
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "canfeza",
        "_analyzed_word_count": 16824,
        "_unique_word_count": 2705,
        "_top_ten_words": {
            "sen": 625,
            "ben": 592,
            "bir": 398,
            "olmak": 354,
            "bu": 304,
            "var": 160,
            "o": 154,
            "ne": 149,
            "gelmek": 136,
            "aşk": 125
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "bedo",
        "_analyzed_word_count": 323,
        "_unique_word_count": 132,
        "_top_ten_words": {
            "kafa": 13,
            "e": 12,
            "ileri": 12,
            "taraf": 12,
            "ay": 12,
            "yok": 10,
            "ben": 8,
            "bu": 8,
            "yol": 8,
            "girmek": 6
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "vio",
        "_analyzed_word_count": 909,
        "_unique_word_count": 416,
        "_top_ten_words": {
            "bu": 23,
            "olmak": 17,
            "artık": 13,
            "yeni": 12,
            "iç": 11,
            "kendi": 11,
            "sen": 11,
            "ben": 11,
            "yok": 10,
            "zehir": 10
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "koksvl",
        "_analyzed_word_count": 2699,
        "_unique_word_count": 647,
        "_top_ten_words": {
            "ay": 78,
            "şen": 72,
            "gelmek": 68,
            "bu": 68,
            "şener": 52,
            "az": 51,
            "olmak": 49,
            "ben": 42,
            "ey": 40,
            "almak": 34
        }
    }
    ]
};

const fttStats = {
    "stats": [
    {
        "_type": "artist_stats",
        "_artist_name": "ağaçkakan",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 3191,
        "_top_ten_words": {
            "bir": 236,
            "olmak": 149,
            "ben": 145,
            "bu": 119,
            "o": 80,
            "etmek": 79,
            "yok": 78,
            "ne": 65,
            "iç": 59,
            "var": 52
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "mode xl",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2252,
        "_top_ten_words": {
            "sen": 186,
            "olmak": 173,
            "bir": 163,
            "bu": 142,
            "yol": 101,
            "ben": 99,
            "vermek": 93,
            "göz": 78,
            "bakmak": 77,
            "kendi": 76
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ben fero",
        "_analyzed_word_count": 4488,
        "_unique_word_count": 1118,
        "_top_ten_words": {
            "ben": 132,
            "olmak": 81,
            "demek": 75,
            "bu": 68,
            "sen": 55,
            "yapmak": 52,
            "çok": 51,
            "iş": 49,
            "gibi": 46,
            "için": 44
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ezhel",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2036,
        "_top_ten_words": {
            "ben": 293,
            "olmak": 200,
            "sen": 172,
            "demek": 150,
            "bu": 120,
            "her": 119,
            "ne": 108,
            "o": 103,
            "hayır": 91,
            "etmek": 86
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "anıl piyancı",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 1943,
        "_top_ten_words": {
            "ben": 237,
            "bu": 207,
            "sen": 163,
            "olmak": 159,
            "bir": 154,
            "bakmak": 91,
            "demek": 90,
            "değil": 76,
            "var": 72,
            "her": 71
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "şehinşah",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2931,
        "_top_ten_words": {
            "ben": 199,
            "olmak": 130,
            "bir": 122,
            "sen": 119,
            "bu": 112,
            "o": 97,
            "demek": 83,
            "etmek": 82,
            "ne": 77,
            "rap": 75
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "şanışer",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2047,
        "_top_ten_words": {
            "ben": 307,
            "bu": 196,
            "olmak": 183,
            "sen": 137,
            "bir": 118,
            "var": 102,
            "gelmek": 91,
            "etmek": 90,
            "yanmak": 82,
            "yok": 79
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "contra",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2274,
        "_top_ten_words": {
            "ben": 337,
            "bu": 234,
            "olmak": 186,
            "o": 134,
            "ne": 118,
            "gibi": 115,
            "her": 114,
            "sen": 113,
            "demek": 104,
            "yok": 99
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ceza",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 1920,
        "_top_ten_words": {
            "ben": 272,
            "bir": 223,
            "bu": 166,
            "olmak": 163,
            "sen": 133,
            "her": 131,
            "yok": 113,
            "gelmek": 110,
            "hadi": 98,
            "var": 92
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sagopa kajmer",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2235,
        "_top_ten_words": {
            "ben": 275,
            "bir": 221,
            "olmak": 157,
            "bu": 118,
            "sen": 93,
            "bilmek": 87,
            "etmek": 74,
            "yok": 70,
            "baş": 70,
            "o": 66
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "killa hakan",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 1981,
        "_top_ten_words": {
            "olmak": 187,
            "bir": 184,
            "sen": 157,
            "ben": 119,
            "bu": 112,
            "bakmak": 109,
            "gelmek": 82,
            "yer": 77,
            "demek": 76,
            "gibi": 75
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "khontkar",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 1878,
        "_top_ten_words": {
            "ben": 309,
            "sen": 187,
            "bu": 160,
            "yok": 144,
            "bakmak": 132,
            "olmak": 104,
            "ne": 103,
            "i": 103,
            "o": 90,
            "yine": 84
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "norm ender",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2073,
        "_top_ten_words": {
            "bu": 315,
            "ben": 271,
            "sen": 192,
            "olmak": 176,
            "bir": 168,
            "o": 129,
            "bakmak": 97,
            "yok": 92,
            "ne": 86,
            "demek": 86
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "patron",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2369,
        "_top_ten_words": {
            "ben": 247,
            "sen": 214,
            "bu": 195,
            "olmak": 164,
            "yok": 121,
            "o": 110,
            "bir": 108,
            "ne": 98,
            "her": 78,
            "vermek": 60
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "tepki",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 1914,
        "_top_ten_words": {
            "bu": 320,
            "olmak": 184,
            "ben": 141,
            "sen": 127,
            "o": 124,
            "her": 121,
            "benji": 105,
            "ghetto": 91,
            "kimse": 90,
            "ne": 89
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sokrat st",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 1784,
        "_top_ten_words": {
            "ben": 348,
            "sen": 212,
            "olmak": 204,
            "bu": 200,
            "bir": 145,
            "değil": 101,
            "yok": 94,
            "ne": 93,
            "her": 88,
            "hayat": 88
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "kamufle",
        "_analyzed_word_count": 8399,
        "_unique_word_count": 1921,
        "_top_ten_words": {
            "ben": 226,
            "olmak": 175,
            "bu": 158,
            "bir": 124,
            "sen": 100,
            "ne": 81,
            "etmek": 79,
            "yok": 78,
            "var": 76,
            "her": 69
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "no.1",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2040,
        "_top_ten_words": {
            "ben": 328,
            "bu": 214,
            "sen": 142,
            "olmak": 138,
            "bir": 135,
            "the": 130,
            "ölmek": 83,
            "iç": 81,
            "görmek": 77,
            "bakmak": 71
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "server uraz",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2391,
        "_top_ten_words": {
            "ben": 324,
            "bu": 226,
            "olmak": 187,
            "bir": 138,
            "sen": 131,
            "o": 85,
            "her": 76,
            "demek": 75,
            "istemek": 70,
            "var": 69
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "xir",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 1986,
        "_top_ten_words": {
            "ben": 319,
            "bu": 285,
            "olmak": 242,
            "sen": 226,
            "bir": 136,
            "ne": 114,
            "yok": 104,
            "o": 98,
            "her": 91,
            "gelmek": 81
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "grogi",
        "_analyzed_word_count": 7081,
        "_unique_word_count": 1804,
        "_top_ten_words": {
            "bu": 135,
            "ben": 130,
            "olmak": 124,
            "yok": 92,
            "o": 88,
            "sen": 77,
            "bir": 70,
            "gün": 69,
            "her": 64,
            "kafa": 64
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ceg",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2271,
        "_top_ten_words": {
            "bu": 445,
            "ben": 443,
            "olmak": 133,
            "kafa": 125,
            "o": 123,
            "gece": 116,
            "değil": 107,
            "gibi": 106,
            "her": 94,
            "bir": 88
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "saian",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2805,
        "_top_ten_words": {
            "bir": 276,
            "ben": 256,
            "sen": 193,
            "olmak": 102,
            "bu": 93,
            "gelmek": 82,
            "o": 72,
            "var": 71,
            "kalmak": 68,
            "her": 67
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "aga b",
        "_analyzed_word_count": 4899,
        "_unique_word_count": 1455,
        "_top_ten_words": {
            "bu": 147,
            "ne": 93,
            "biz": 61,
            "yok": 54,
            "bir": 51,
            "ben": 51,
            "sen": 49,
            "o": 48,
            "olmak": 46,
            "daha": 46
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "şam",
        "_analyzed_word_count": 2144,
        "_unique_word_count": 704,
        "_top_ten_words": {
            "bu": 92,
            "bir": 50,
            "ben": 48,
            "olmak": 46,
            "sen": 27,
            "bakmak": 26,
            "yok": 23,
            "yol": 23,
            "yaşamak": 21,
            "hayat": 19
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "fuat",
        "_analyzed_word_count": 8440,
        "_unique_word_count": 2761,
        "_top_ten_words": {
            "olmak": 126,
            "gibi": 99,
            "hepsi": 94,
            "ben": 80,
            "gelmek": 78,
            "sen": 73,
            "yok": 67,
            "bir": 67,
            "fuat": 64,
            "el": 64
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ayben",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 1880,
        "_top_ten_words": {
            "ben": 269,
            "olmak": 163,
            "var": 156,
            "bu": 151,
            "sen": 149,
            "rap": 145,
            "bir": 139,
            "o": 125,
            "gelmek": 120,
            "her": 117
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "hidra",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2389,
        "_top_ten_words": {
            "ben": 255,
            "bu": 237,
            "olmak": 158,
            "bir": 141,
            "gibi": 125,
            "o": 93,
            "yok": 90,
            "demek": 88,
            "gelmek": 74,
            "sen": 72
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "joker",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2298,
        "_top_ten_words": {
            "bu": 251,
            "ben": 245,
            "olmak": 131,
            "sen": 108,
            "bir": 100,
            "yok": 85,
            "demek": 81,
            "yapmak": 76,
            "etmek": 75,
            "değil": 68
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "allame",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2773,
        "_top_ten_words": {
            "bu": 227,
            "ben": 184,
            "olmak": 163,
            "sen": 136,
            "bir": 131,
            "yok": 100,
            "etmek": 81,
            "o": 76,
            "var": 74,
            "vermek": 65
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sansar salvo",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2217,
        "_top_ten_words": {
            "bu": 233,
            "ben": 204,
            "olmak": 170,
            "o": 117,
            "sen": 82,
            "bakmak": 82,
            "bir": 81,
            "iş": 78,
            "her": 76,
            "var": 73
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "keişan",
        "_analyzed_word_count": 5310,
        "_unique_word_count": 1435,
        "_top_ten_words": {
            "ben": 145,
            "bu": 118,
            "sen": 74,
            "olmak": 72,
            "gucci": 61,
            "demek": 53,
            "hep": 52,
            "gibi": 47,
            "var": 45,
            "istemek": 45
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "hayki",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2166,
        "_top_ten_words": {
            "ben": 318,
            "bu": 207,
            "olmak": 137,
            "sen": 135,
            "bir": 132,
            "ne": 122,
            "her": 82,
            "o": 77,
            "gitmek": 74,
            "almak": 71
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "dr. fuchs",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 1643,
        "_top_ten_words": {
            "ben": 309,
            "bu": 207,
            "sen": 202,
            "olmak": 169,
            "bir": 156,
            "bilmek": 129,
            "basmak": 128,
            "her": 112,
            "gün": 92,
            "o": 83
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "yener çevik",
        "_analyzed_word_count": 9320,
        "_unique_word_count": 2195,
        "_top_ten_words": {
            "ben": 172,
            "sen": 150,
            "olmak": 135,
            "bu": 110,
            "bir": 81,
            "demek": 77,
            "var": 73,
            "gitmek": 70,
            "gelmek": 67,
            "yol": 64
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "farazi v kayra",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2016,
        "_top_ten_words": {
            "bir": 348,
            "ben": 242,
            "bu": 201,
            "olmak": 149,
            "sen": 135,
            "o": 106,
            "var": 97,
            "gelmek": 96,
            "bakmak": 82,
            "yok": 78
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "da poet",
        "_analyzed_word_count": 7877,
        "_unique_word_count": 2075,
        "_top_ten_words": {
            "ben": 177,
            "bu": 112,
            "olmak": 102,
            "sen": 94,
            "bir": 93,
            "yine": 71,
            "yok": 69,
            "var": 67,
            "vermek": 67,
            "rap": 61
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "karaçalı",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 3066,
        "_top_ten_words": {
            "bir": 204,
            "ben": 166,
            "olmak": 118,
            "sen": 112,
            "bu": 107,
            "o": 84,
            "yok": 56,
            "etmek": 51,
            "her": 50,
            "gitmek": 50
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ados",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2109,
        "_top_ten_words": {
            "ben": 257,
            "bir": 251,
            "bu": 230,
            "olmak": 182,
            "sen": 144,
            "yok": 109,
            "o": 105,
            "ne": 105,
            "insan": 90,
            "etmek": 85
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ethnique punch",
        "_analyzed_word_count": 3985,
        "_unique_word_count": 1979,
        "_top_ten_words": {
            "olmak": 65,
            "bu": 63,
            "bir": 55,
            "ben": 35,
            "ne": 24,
            "kalmak": 24,
            "iç": 20,
            "zaman": 18,
            "o": 18,
            "her": 18
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "eypio",
        "_analyzed_word_count": 5928,
        "_unique_word_count": 1600,
        "_top_ten_words": {
            "ben": 168,
            "bu": 123,
            "biz": 93,
            "var": 92,
            "olmak": 82,
            "sen": 81,
            "yok": 69,
            "demek": 60,
            "gelmek": 59,
            "bir": 52
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ati242",
        "_analyzed_word_count": 8692,
        "_unique_word_count": 1869,
        "_top_ten_words": {
            "bu": 173,
            "kafa": 140,
            "ben": 139,
            "sen": 135,
            "ey": 121,
            "o": 105,
            "yok": 92,
            "ah": 90,
            "olmak": 89,
            "bakmak": 78
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "beta",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2288,
        "_top_ten_words": {
            "ben": 451,
            "sen": 283,
            "olmak": 237,
            "bu": 162,
            "bir": 117,
            "o": 114,
            "yapmak": 111,
            "yok": 100,
            "var": 87,
            "değil": 82
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "heja",
        "_analyzed_word_count": 419,
        "_unique_word_count": 183,
        "_top_ten_words": {
            "biri": 21,
            "iç": 21,
            "bugün": 18,
            "ben": 15,
            "kan": 15,
            "toz": 13,
            "ter": 12,
            "var": 11,
            "bakmak": 10,
            "kurşun": 8
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "gazapizm",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2135,
        "_top_ten_words": {
            "bir": 355,
            "bu": 209,
            "ben": 191,
            "olmak": 182,
            "yok": 127,
            "bakmak": 101,
            "sen": 101,
            "hayat": 95,
            "yol": 86,
            "kalmak": 85
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "istanbul trip",
        "_analyzed_word_count": 1060,
        "_unique_word_count": 523,
        "_top_ten_words": {
            "bu": 23,
            "olmak": 20,
            "ateş": 17,
            "yak": 16,
            "sokak": 16,
            "bir": 13,
            "sen": 13,
            "ben": 11,
            "ne": 11,
            "biz": 11
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "maestro",
        "_analyzed_word_count": 2534,
        "_unique_word_count": 1040,
        "_top_ten_words": {
            "ben": 57,
            "bu": 51,
            "sokak": 42,
            "bakmak": 33,
            "olmak": 29,
            "bir": 28,
            "el": 26,
            "rap": 25,
            "var": 25,
            "la": 21
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "zen-g",
        "_analyzed_word_count": 898,
        "_unique_word_count": 464,
        "_top_ten_words": {
            "gelmek": 20,
            "bir": 19,
            "bu": 18,
            "olmak": 17,
            "ben": 15,
            "yok": 14,
            "sen": 14,
            "berlin": 14,
            "ey": 13,
            "hast": 12
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "delaredo",
        "_analyzed_word_count": 928,
        "_unique_word_count": 394,
        "_top_ten_words": {
            "yol": 24,
            "bu": 18,
            "olmak": 17,
            "iç": 16,
            "almak": 16,
            "biz": 14,
            "etmek": 13,
            "yok": 12,
            "al": 12,
            "oyun": 11
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "burak king",
        "_analyzed_word_count": 2893,
        "_unique_word_count": 710,
        "_top_ten_words": {
            "var": 107,
            "sen": 95,
            "ben": 90,
            "ne": 79,
            "bir": 54,
            "mı": 47,
            "gibi": 44,
            "dert": 43,
            "demek": 41,
            "bu": 36
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "lil zey",
        "_analyzed_word_count": 685,
        "_unique_word_count": 327,
        "_top_ten_words": {
            "o": 27,
            "ben": 17,
            "yok": 16,
            "bu": 14,
            "bakmak": 13,
            "hep": 11,
            "bir": 11,
            "almak": 11,
            "el": 10,
            "olmak": 9
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "burry soprano",
        "_analyzed_word_count": 3021,
        "_unique_word_count": 872,
        "_top_ten_words": {
            "bu": 83,
            "ben": 83,
            "yok": 47,
            "için": 46,
            "her": 43,
            "hep": 40,
            "olmak": 39,
            "yapmak": 39,
            "çıkmak": 36,
            "bakmak": 35
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "leşker asakir",
        "_analyzed_word_count": 482,
        "_unique_word_count": 349,
        "_top_ten_words": {
            "bu": 11,
            "ben": 10,
            "her": 7,
            "bir": 5,
            "sen": 5,
            "kan": 5,
            "kalkmak": 4,
            "gibi": 4,
            "kalp": 4,
            "karşı": 3
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "tankurt manas",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2572,
        "_top_ten_words": {
            "ben": 320,
            "bu": 270,
            "yok": 124,
            "olmak": 109,
            "gibi": 104,
            "sen": 101,
            "o": 76,
            "bakmak": 75,
            "tan": 72,
            "etmek": 71
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "motive",
        "_analyzed_word_count": 968,
        "_unique_word_count": 467,
        "_top_ten_words": {
            "bu": 18,
            "değil": 18,
            "ben": 16,
            "olmak": 15,
            "sen": 15,
            "aşk": 13,
            "ah": 12,
            "gibi": 11,
            "istemek": 11,
            "için": 11
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "massaka",
        "_analyzed_word_count": 5510,
        "_unique_word_count": 1324,
        "_top_ten_words": {
            "die": 229,
            "demek": 163,
            "i̇st": 78,
            "sokak": 59,
            "biz": 56,
            "ben": 53,
            "und": 51,
            "in": 51,
            "das": 48,
            "sen": 47
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "uzi212",
        "_analyzed_word_count": 2655,
        "_unique_word_count": 816,
        "_top_ten_words": {
            "olmak": 49,
            "yok": 37,
            "bu": 33,
            "my": 29,
            "sen": 27,
            "bakmak": 26,
            "her": 26,
            "var": 26,
            "ben": 23,
            "mi": 22
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "muşta",
        "_analyzed_word_count": 2079,
        "_unique_word_count": 822,
        "_top_ten_words": {
            "ben": 88,
            "bu": 60,
            "olmak": 49,
            "o": 35,
            "muş": 30,
            "bir": 29,
            "serseri": 23,
            "sokak": 22,
            "vermek": 20,
            "sen": 20
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ozbi",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2024,
        "_top_ten_words": {
            "ben": 288,
            "bir": 174,
            "olmak": 172,
            "bu": 168,
            "sen": 160,
            "o": 133,
            "gibi": 104,
            "demek": 91,
            "gelmek": 90,
            "yok": 79
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sehabe",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2255,
        "_top_ten_words": {
            "ben": 353,
            "olmak": 205,
            "sen": 199,
            "bu": 156,
            "bir": 123,
            "yok": 104,
            "demek": 99,
            "etmek": 96,
            "o": 95,
            "bilmek": 81
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ahiyan",
        "_analyzed_word_count": 5123,
        "_unique_word_count": 1514,
        "_top_ten_words": {
            "ben": 112,
            "olmak": 99,
            "bu": 81,
            "ne": 77,
            "sen": 61,
            "o": 46,
            "etmek": 45,
            "demek": 44,
            "çok": 37,
            "gün": 37
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "aspova",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 1630,
        "_top_ten_words": {
            "bu": 217,
            "ben": 180,
            "olmak": 152,
            "bir": 136,
            "sen": 114,
            "ey": 113,
            "yok": 101,
            "her": 100,
            "hep": 99,
            "demek": 98
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "çağrı sinci",
        "_analyzed_word_count": 7070,
        "_unique_word_count": 1880,
        "_top_ten_words": {
            "ben": 151,
            "sen": 129,
            "bu": 97,
            "olmak": 96,
            "bir": 78,
            "demek": 71,
            "biz": 68,
            "var": 63,
            "o": 60,
            "etmek": 59
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "stabil",
        "_analyzed_word_count": 6634,
        "_unique_word_count": 1549,
        "_top_ten_words": {
            "ben": 263,
            "bu": 146,
            "olmak": 106,
            "sen": 85,
            "var": 77,
            "değil": 71,
            "o": 70,
            "kadar": 66,
            "bir": 60,
            "hayat": 58
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "tahribad-ı isyan",
        "_analyzed_word_count": 6264,
        "_unique_word_count": 1590,
        "_top_ten_words": {
            "ben": 178,
            "bu": 164,
            "olmak": 108,
            "o": 105,
            "sen": 92,
            "biz": 79,
            "ghetto": 78,
            "ne": 77,
            "bir": 69,
            "demek": 60
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "lider",
        "_analyzed_word_count": 1926,
        "_unique_word_count": 734,
        "_top_ten_words": {
            "bir": 76,
            "olmak": 54,
            "vay": 37,
            "ben": 36,
            "dünya": 29,
            "sen": 28,
            "gelmek": 24,
            "bu": 24,
            "her": 21,
            "gitmek": 17
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "emboli",
        "_analyzed_word_count": 3775,
        "_unique_word_count": 1752,
        "_top_ten_words": {
            "bu": 63,
            "ben": 54,
            "sen": 41,
            "gibi": 32,
            "olmak": 31,
            "bir": 30,
            "vermek": 28,
            "propaganda": 28,
            "sokak": 24,
            "kafa": 20
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "aksan",
        "_analyzed_word_count": 2669,
        "_unique_word_count": 662,
        "_top_ten_words": {
            "bu": 117,
            "ben": 97,
            "olmak": 53,
            "o": 42,
            "her": 41,
            "var": 36,
            "b": 32,
            "yüz": 32,
            "bir": 31,
            "yok": 28
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "kozmos",
        "_analyzed_word_count": 2174,
        "_unique_word_count": 812,
        "_top_ten_words": {
            "ben": 58,
            "bir": 57,
            "olmak": 38,
            "sen": 35,
            "bu": 34,
            "bakmak": 33,
            "yok": 29,
            "her": 27,
            "var": 26,
            "vermek": 22
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "metth",
        "_analyzed_word_count": 1579,
        "_unique_word_count": 399,
        "_top_ten_words": {
            "biz": 92,
            "gang": 88,
            "bura": 81,
            "ben": 39,
            "manolya": 32,
            "sen": 27,
            "bu": 23,
            "için": 18,
            "çekmek": 17,
            "ne": 17
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "velet",
        "_analyzed_word_count": 7786,
        "_unique_word_count": 1497,
        "_top_ten_words": {
            "ben": 306,
            "bu": 189,
            "sen": 168,
            "olmak": 159,
            "bir": 153,
            "demek": 93,
            "var": 87,
            "o": 71,
            "gelmek": 67,
            "vermek": 65
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ilke",
        "_analyzed_word_count": 2002,
        "_unique_word_count": 673,
        "_top_ten_words": {
            "ben": 50,
            "yok": 50,
            "olmak": 45,
            "bu": 42,
            "yol": 37,
            "bakmak": 26,
            "var": 24,
            "o": 23,
            "her": 23,
            "şey": 22
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "maw",
        "_analyzed_word_count": 920,
        "_unique_word_count": 284,
        "_top_ten_words": {
            "bu": 31,
            "ben": 27,
            "sen": 22,
            "kafa": 19,
            "sokak": 18,
            "para": 17,
            "olmak": 16,
            "gelmek": 14,
            "niçin": 13,
            "iç": 12
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "kezzo",
        "_analyzed_word_count": 8424,
        "_unique_word_count": 2059,
        "_top_ten_words": {
            "bu": 162,
            "olmak": 120,
            "ben": 117,
            "bir": 101,
            "var": 89,
            "her": 77,
            "sen": 73,
            "o": 71,
            "yok": 67,
            "demek": 63
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "uur",
        "_analyzed_word_count": 2395,
        "_unique_word_count": 671,
        "_top_ten_words": {
            "keçiören": 83,
            "olmak": 61,
            "sen": 60,
            "biz": 53,
            "bu": 47,
            "kafa": 43,
            "ben": 39,
            "çukur": 33,
            "ne": 26,
            "dem": 25
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "mrf",
        "_analyzed_word_count": 9785,
        "_unique_word_count": 1933,
        "_top_ten_words": {
            "ben": 225,
            "bu": 204,
            "olmak": 173,
            "yol": 163,
            "yok": 127,
            "vermek": 118,
            "her": 100,
            "biz": 94,
            "sen": 92,
            "gelmek": 90
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "cartel",
        "_analyzed_word_count": 2135,
        "_unique_word_count": 754,
        "_top_ten_words": {
            "demek": 43,
            "bu": 42,
            "biz": 41,
            "cartel": 37,
            "sen": 37,
            "bir": 34,
            "olmak": 34,
            "die": 29,
            "para": 28,
            "und": 27
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "erci e",
        "_analyzed_word_count": 4397,
        "_unique_word_count": 1018,
        "_top_ten_words": {
            "ben": 151,
            "sen": 129,
            "bir": 127,
            "gelmek": 126,
            "bu": 114,
            "olmak": 75,
            "hadi": 60,
            "hep": 49,
            "ti": 48,
            "çok": 45
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "karakan",
        "_analyzed_word_count": 3169,
        "_unique_word_count": 916,
        "_top_ten_words": {
            "ben": 79,
            "gelmek": 67,
            "olmak": 59,
            "sen": 57,
            "bu": 56,
            "ne": 50,
            "bir": 49,
            "yok": 48,
            "ev": 44,
            "ses": 40
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sirhot",
        "_analyzed_word_count": 2456,
        "_unique_word_count": 791,
        "_top_ten_words": {
            "olmak": 61,
            "sen": 58,
            "her": 53,
            "kopmak": 49,
            "ben": 46,
            "bu": 38,
            "etmek": 32,
            "gece": 29,
            "göz": 28,
            "hep": 25
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sahtiyan",
        "_analyzed_word_count": 9873,
        "_unique_word_count": 2461,
        "_top_ten_words": {
            "ben": 228,
            "olmak": 221,
            "sen": 186,
            "bu": 144,
            "gelmek": 107,
            "bir": 102,
            "yok": 85,
            "her": 85,
            "para": 83,
            "o": 75
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ramiz",
        "_analyzed_word_count": 2537,
        "_unique_word_count": 715,
        "_top_ten_words": {
            "ben": 92,
            "bu": 89,
            "gibi": 61,
            "bir": 41,
            "biz": 38,
            "sen": 37,
            "çok": 35,
            "mi": 34,
            "etmek": 32,
            "olmak": 31
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sancak",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 1217,
        "_top_ten_words": {
            "sen": 382,
            "ben": 355,
            "bir": 194,
            "olmak": 193,
            "bu": 171,
            "gelmek": 149,
            "ne": 135,
            "o": 128,
            "gitmek": 115,
            "yine": 113
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "taladro",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 1948,
        "_top_ten_words": {
            "ben": 304,
            "sen": 289,
            "bir": 248,
            "bu": 189,
            "olmak": 137,
            "o": 133,
            "ne": 109,
            "kalp": 99,
            "gelmek": 97,
            "aşk": 94
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "canfeza",
        "_analyzed_word_count": 10000,
        "_unique_word_count": 2103,
        "_top_ten_words": {
            "sen": 360,
            "ben": 358,
            "bir": 234,
            "olmak": 211,
            "bu": 193,
            "gelmek": 95,
            "o": 92,
            "var": 86,
            "ne": 85,
            "aşk": 82
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "bedo",
        "_analyzed_word_count": 323,
        "_unique_word_count": 132,
        "_top_ten_words": {
            "kafa": 13,
            "e": 12,
            "ileri": 12,
            "taraf": 12,
            "ay": 12,
            "yok": 10,
            "ben": 8,
            "bu": 8,
            "yol": 8,
            "girmek": 6
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "vio",
        "_analyzed_word_count": 909,
        "_unique_word_count": 416,
        "_top_ten_words": {
            "bu": 23,
            "olmak": 17,
            "artık": 13,
            "yeni": 12,
            "iç": 11,
            "kendi": 11,
            "sen": 11,
            "ben": 11,
            "yok": 10,
            "zehir": 10
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "koksvl",
        "_analyzed_word_count": 2699,
        "_unique_word_count": 647,
        "_top_ten_words": {
            "ay": 78,
            "şen": 72,
            "gelmek": 68,
            "bu": 68,
            "şener": 52,
            "az": 51,
            "olmak": 49,
            "ben": 42,
            "ey": 40,
            "almak": 34
        }
    }
    ]
};

const ratioStats = {
"stats": [
    {
        "_type": "artist_stats",
        "_artist_name": "ağaçkakan",
        "_analyzed_word_count": 13311,
        "_unique_word_count": 3612,
        "_top_ten_words": {
            "bir": 314,
            "ben": 200,
            "olmak": 196,
            "bu": 167,
            "yok": 102,
            "etmek": 99,
            "ne": 92,
            "o": 90,
            "iç": 78,
            "sen": 72
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "mode xl",
        "_analyzed_word_count": 15789,
        "_unique_word_count": 2810,
        "_top_ten_words": {
            "sen": 322,
            "olmak": 257,
            "bir": 254,
            "bu": 241,
            "ben": 226,
            "yol": 176,
            "bakmak": 132,
            "vermek": 119,
            "kalmak": 119,
            "göz": 113
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ben fero",
        "_analyzed_word_count": 4488,
        "_unique_word_count": 1118,
        "_top_ten_words": {
            "ben": 132,
            "olmak": 81,
            "demek": 75,
            "bu": 68,
            "sen": 55,
            "yapmak": 52,
            "çok": 51,
            "iş": 49,
            "gibi": 46,
            "için": 44
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ezhel",
        "_analyzed_word_count": 11321,
        "_unique_word_count": 2170,
        "_top_ten_words": {
            "ben": 327,
            "olmak": 221,
            "sen": 181,
            "demek": 156,
            "bu": 131,
            "her": 130,
            "o": 116,
            "ne": 113,
            "bir": 92,
            "yapmak": 91
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "anıl piyancı",
        "_analyzed_word_count": 13285,
        "_unique_word_count": 2353,
        "_top_ten_words": {
            "ben": 291,
            "bu": 280,
            "olmak": 217,
            "bir": 215,
            "sen": 208,
            "yok": 114,
            "bakmak": 111,
            "demek": 103,
            "değil": 95,
            "her": 94
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "şehinşah",
        "_analyzed_word_count": 28720,
        "_unique_word_count": 5000,
        "_top_ten_words": {
            "ben": 564,
            "olmak": 360,
            "bir": 343,
            "bu": 335,
            "sen": 318,
            "o": 250,
            "ne": 229,
            "rap": 214,
            "etmek": 201,
            "yapmak": 191
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "şanışer",
        "_analyzed_word_count": 28914,
        "_unique_word_count": 3777,
        "_top_ten_words": {
            "ben": 954,
            "olmak": 554,
            "bu": 513,
            "sen": 506,
            "bir": 300,
            "var": 285,
            "yok": 233,
            "gelmek": 219,
            "o": 212,
            "her": 206
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "contra",
        "_analyzed_word_count": 21431,
        "_unique_word_count": 3089,
        "_top_ten_words": {
            "ben": 647,
            "bu": 569,
            "olmak": 356,
            "o": 285,
            "yok": 246,
            "gibi": 241,
            "sen": 236,
            "her": 222,
            "ne": 209,
            "bok": 183
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ceza",
        "_analyzed_word_count": 50527,
        "_unique_word_count": 4862,
        "_top_ten_words": {
            "ben": 1476,
            "bir": 1140,
            "bu": 933,
            "olmak": 924,
            "sen": 703,
            "her": 546,
            "yok": 502,
            "var": 444,
            "gelmek": 432,
            "bakmak": 424
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sagopa kajmer",
        "_analyzed_word_count": 75818,
        "_unique_word_count": 6565,
        "_top_ten_words": {
            "ben": 1712,
            "bir": 1437,
            "olmak": 1351,
            "bu": 1018,
            "sen": 922,
            "etmek": 503,
            "kendi": 482,
            "o": 480,
            "var": 472,
            "her": 468
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "killa hakan",
        "_analyzed_word_count": 20630,
        "_unique_word_count": 2959,
        "_top_ten_words": {
            "olmak": 382,
            "bir": 378,
            "ben": 303,
            "sen": 302,
            "bakmak": 246,
            "bu": 238,
            "gelmek": 172,
            "demek": 149,
            "yer": 148,
            "göz": 148
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "khontkar",
        "_analyzed_word_count": 14915,
        "_unique_word_count": 2319,
        "_top_ten_words": {
            "ben": 417,
            "sen": 299,
            "bakmak": 230,
            "yok": 221,
            "bu": 218,
            "olmak": 173,
            "o": 159,
            "yine": 119,
            "i": 118,
            "ne": 113
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "norm ender",
        "_analyzed_word_count": 10958,
        "_unique_word_count": 2234,
        "_top_ten_words": {
            "bu": 343,
            "ben": 310,
            "sen": 201,
            "olmak": 186,
            "bir": 175,
            "o": 140,
            "bakmak": 101,
            "yok": 101,
            "demek": 90,
            "ne": 89
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "patron",
        "_analyzed_word_count": 25629,
        "_unique_word_count": 3840,
        "_top_ten_words": {
            "ben": 710,
            "sen": 477,
            "bu": 452,
            "olmak": 373,
            "bir": 262,
            "o": 247,
            "yok": 245,
            "para": 215,
            "her": 195,
            "ne": 188
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "tepki",
        "_analyzed_word_count": 12173,
        "_unique_word_count": 2123,
        "_top_ten_words": {
            "bu": 411,
            "olmak": 211,
            "ben": 192,
            "sen": 150,
            "her": 134,
            "o": 131,
            "ne": 113,
            "benji": 105,
            "daha": 100,
            "yine": 97
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sokrat st",
        "_analyzed_word_count": 14172,
        "_unique_word_count": 2159,
        "_top_ten_words": {
            "ben": 485,
            "bu": 300,
            "olmak": 285,
            "sen": 275,
            "bir": 207,
            "değil": 154,
            "yok": 136,
            "ne": 134,
            "hayat": 124,
            "her": 122
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "kamufle",
        "_analyzed_word_count": 8399,
        "_unique_word_count": 1921,
        "_top_ten_words": {
            "ben": 226,
            "olmak": 175,
            "bu": 158,
            "bir": 124,
            "sen": 100,
            "ne": 81,
            "etmek": 79,
            "yok": 78,
            "var": 76,
            "her": 69
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "no.1",
        "_analyzed_word_count": 39726,
        "_unique_word_count": 4172,
        "_top_ten_words": {
            "ben": 1214,
            "bu": 794,
            "sen": 730,
            "olmak": 722,
            "bir": 420,
            "yok": 348,
            "gelmek": 304,
            "gibi": 296,
            "bakmak": 276,
            "her": 264
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "server uraz",
        "_analyzed_word_count": 30931,
        "_unique_word_count": 4257,
        "_top_ten_words": {
            "ben": 868,
            "bu": 601,
            "bir": 514,
            "olmak": 506,
            "sen": 412,
            "o": 292,
            "yok": 260,
            "her": 231,
            "var": 220,
            "kalmak": 218
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "xir",
        "_analyzed_word_count": 13343,
        "_unique_word_count": 2315,
        "_top_ten_words": {
            "ben": 459,
            "bu": 349,
            "olmak": 309,
            "sen": 298,
            "bir": 177,
            "ne": 147,
            "o": 140,
            "yok": 130,
            "her": 119,
            "gelmek": 111
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "grogi",
        "_analyzed_word_count": 7081,
        "_unique_word_count": 1804,
        "_top_ten_words": {
            "bu": 135,
            "ben": 130,
            "olmak": 124,
            "yok": 92,
            "o": 88,
            "sen": 77,
            "bir": 70,
            "gün": 69,
            "her": 64,
            "kafa": 64
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ceg",
        "_analyzed_word_count": 22601,
        "_unique_word_count": 3614,
        "_top_ten_words": {
            "ben": 1015,
            "bu": 848,
            "olmak": 327,
            "o": 323,
            "değil": 234,
            "vermek": 217,
            "gibi": 199,
            "etmek": 172,
            "her": 169,
            "sen": 166
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "saian",
        "_analyzed_word_count": 14957,
        "_unique_word_count": 3620,
        "_top_ten_words": {
            "ben": 400,
            "bir": 342,
            "sen": 296,
            "bu": 155,
            "olmak": 145,
            "gelmek": 112,
            "biz": 103,
            "var": 100,
            "bakmak": 99,
            "her": 95
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "aga b",
        "_analyzed_word_count": 4899,
        "_unique_word_count": 1455,
        "_top_ten_words": {
            "bu": 147,
            "ne": 93,
            "biz": 61,
            "yok": 54,
            "bir": 51,
            "ben": 51,
            "sen": 49,
            "o": 48,
            "olmak": 46,
            "daha": 46
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "şam",
        "_analyzed_word_count": 2144,
        "_unique_word_count": 704,
        "_top_ten_words": {
            "bu": 92,
            "bir": 50,
            "ben": 48,
            "olmak": 46,
            "sen": 27,
            "bakmak": 26,
            "yok": 23,
            "yol": 23,
            "yaşamak": 21,
            "hayat": 19
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "fuat",
        "_analyzed_word_count": 8440,
        "_unique_word_count": 2761,
        "_top_ten_words": {
            "olmak": 126,
            "gibi": 99,
            "hepsi": 94,
            "ben": 80,
            "gelmek": 78,
            "sen": 73,
            "yok": 67,
            "bir": 67,
            "fuat": 64,
            "el": 64
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ayben",
        "_analyzed_word_count": 10374,
        "_unique_word_count": 1937,
        "_top_ten_words": {
            "ben": 275,
            "olmak": 173,
            "bu": 165,
            "var": 160,
            "sen": 160,
            "rap": 148,
            "bir": 143,
            "o": 129,
            "gelmek": 128,
            "her": 118
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "hidra",
        "_analyzed_word_count": 33531,
        "_unique_word_count": 4567,
        "_top_ten_words": {
            "ben": 826,
            "bu": 800,
            "bir": 447,
            "olmak": 442,
            "o": 338,
            "yok": 325,
            "var": 305,
            "sen": 303,
            "demek": 263,
            "gibi": 254
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "joker",
        "_analyzed_word_count": 25595,
        "_unique_word_count": 3681,
        "_top_ten_words": {
            "ben": 628,
            "bu": 626,
            "olmak": 359,
            "sen": 321,
            "bir": 273,
            "etmek": 240,
            "yapmak": 234,
            "demek": 190,
            "ne": 185,
            "değil": 178
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "allame",
        "_analyzed_word_count": 27679,
        "_unique_word_count": 4666,
        "_top_ten_words": {
            "bu": 606,
            "ben": 572,
            "olmak": 472,
            "sen": 439,
            "bir": 367,
            "o": 226,
            "yok": 220,
            "etmek": 202,
            "vermek": 196,
            "var": 182
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sansar salvo",
        "_analyzed_word_count": 32654,
        "_unique_word_count": 4074,
        "_top_ten_words": {
            "bu": 729,
            "ben": 685,
            "olmak": 648,
            "bir": 381,
            "sen": 350,
            "her": 283,
            "bakmak": 274,
            "o": 261,
            "var": 247,
            "yok": 222
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "keişan",
        "_analyzed_word_count": 5310,
        "_unique_word_count": 1435,
        "_top_ten_words": {
            "ben": 145,
            "bu": 118,
            "sen": 74,
            "olmak": 72,
            "gucci": 61,
            "demek": 53,
            "hep": 52,
            "gibi": 47,
            "var": 45,
            "istemek": 45
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "hayki",
        "_analyzed_word_count": 24285,
        "_unique_word_count": 3440,
        "_top_ten_words": {
            "ben": 810,
            "sen": 525,
            "bu": 524,
            "bir": 373,
            "olmak": 352,
            "ne": 227,
            "yok": 225,
            "o": 214,
            "her": 169,
            "bakmak": 163
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "dr. fuchs",
        "_analyzed_word_count": 13397,
        "_unique_word_count": 1950,
        "_top_ten_words": {
            "ben": 373,
            "bu": 272,
            "sen": 270,
            "olmak": 225,
            "bir": 212,
            "her": 158,
            "bilmek": 145,
            "basmak": 132,
            "gün": 126,
            "o": 118
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "yener çevik",
        "_analyzed_word_count": 9320,
        "_unique_word_count": 2195,
        "_top_ten_words": {
            "ben": 172,
            "sen": 150,
            "olmak": 135,
            "bu": 110,
            "bir": 81,
            "demek": 77,
            "var": 73,
            "gitmek": 70,
            "gelmek": 67,
            "yol": 64
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "farazi v kayra",
        "_analyzed_word_count": 10355,
        "_unique_word_count": 2057,
        "_top_ten_words": {
            "bir": 361,
            "ben": 249,
            "bu": 206,
            "olmak": 156,
            "sen": 135,
            "o": 110,
            "gelmek": 103,
            "var": 99,
            "bakmak": 84,
            "yok": 79
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "da poet",
        "_analyzed_word_count": 7877,
        "_unique_word_count": 2075,
        "_top_ten_words": {
            "ben": 177,
            "bu": 112,
            "olmak": 102,
            "sen": 94,
            "bir": 93,
            "yine": 71,
            "yok": 69,
            "var": 67,
            "vermek": 67,
            "rap": 61
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "karaçalı",
        "_analyzed_word_count": 11048,
        "_unique_word_count": 3250,
        "_top_ten_words": {
            "bir": 232,
            "ben": 198,
            "olmak": 138,
            "sen": 124,
            "bu": 116,
            "o": 89,
            "yok": 60,
            "her": 58,
            "etmek": 56,
            "vermek": 56
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ados",
        "_analyzed_word_count": 19417,
        "_unique_word_count": 2983,
        "_top_ten_words": {
            "ben": 492,
            "bir": 456,
            "bu": 393,
            "olmak": 346,
            "sen": 257,
            "yok": 207,
            "o": 198,
            "ne": 171,
            "insan": 161,
            "var": 157
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ethnique punch",
        "_analyzed_word_count": 3985,
        "_unique_word_count": 1979,
        "_top_ten_words": {
            "olmak": 65,
            "bu": 63,
            "bir": 55,
            "ben": 35,
            "ne": 24,
            "kalmak": 24,
            "iç": 20,
            "zaman": 18,
            "o": 18,
            "her": 18
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "eypio",
        "_analyzed_word_count": 5928,
        "_unique_word_count": 1600,
        "_top_ten_words": {
            "ben": 168,
            "bu": 123,
            "biz": 93,
            "var": 92,
            "olmak": 82,
            "sen": 81,
            "yok": 69,
            "demek": 60,
            "gelmek": 59,
            "bir": 52
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ati242",
        "_analyzed_word_count": 8692,
        "_unique_word_count": 1869,
        "_top_ten_words": {
            "bu": 173,
            "kafa": 140,
            "ben": 139,
            "sen": 135,
            "ey": 121,
            "o": 105,
            "yok": 92,
            "ah": 90,
            "olmak": 89,
            "bakmak": 78
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "beta",
        "_analyzed_word_count": 14825,
        "_unique_word_count": 2660,
        "_top_ten_words": {
            "ben": 713,
            "sen": 481,
            "olmak": 343,
            "bu": 252,
            "bir": 180,
            "o": 159,
            "yok": 157,
            "yapmak": 146,
            "var": 130,
            "çok": 119
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "heja",
        "_analyzed_word_count": 419,
        "_unique_word_count": 183,
        "_top_ten_words": {
            "biri": 21,
            "iç": 21,
            "bugün": 18,
            "ben": 15,
            "kan": 15,
            "toz": 13,
            "ter": 12,
            "var": 11,
            "bakmak": 10,
            "kurşun": 8
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "gazapizm",
        "_analyzed_word_count": 15762,
        "_unique_word_count": 2726,
        "_top_ten_words": {
            "bir": 472,
            "ben": 337,
            "olmak": 299,
            "bu": 293,
            "sen": 180,
            "yok": 175,
            "bakmak": 153,
            "yol": 141,
            "kalmak": 134,
            "o": 126
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "istanbul trip",
        "_analyzed_word_count": 1060,
        "_unique_word_count": 523,
        "_top_ten_words": {
            "bu": 23,
            "olmak": 20,
            "ateş": 17,
            "yak": 16,
            "sokak": 16,
            "bir": 13,
            "sen": 13,
            "ben": 11,
            "ne": 11,
            "biz": 11
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "maestro",
        "_analyzed_word_count": 2534,
        "_unique_word_count": 1040,
        "_top_ten_words": {
            "ben": 57,
            "bu": 51,
            "sokak": 42,
            "bakmak": 33,
            "olmak": 29,
            "bir": 28,
            "el": 26,
            "rap": 25,
            "var": 25,
            "la": 21
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "zen-g",
        "_analyzed_word_count": 898,
        "_unique_word_count": 464,
        "_top_ten_words": {
            "gelmek": 20,
            "bir": 19,
            "bu": 18,
            "olmak": 17,
            "ben": 15,
            "yok": 14,
            "sen": 14,
            "berlin": 14,
            "ey": 13,
            "hast": 12
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "delaredo",
        "_analyzed_word_count": 928,
        "_unique_word_count": 394,
        "_top_ten_words": {
            "yol": 24,
            "bu": 18,
            "olmak": 17,
            "iç": 16,
            "almak": 16,
            "biz": 14,
            "etmek": 13,
            "yok": 12,
            "al": 12,
            "oyun": 11
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "burak king",
        "_analyzed_word_count": 2893,
        "_unique_word_count": 710,
        "_top_ten_words": {
            "var": 107,
            "sen": 95,
            "ben": 90,
            "ne": 79,
            "bir": 54,
            "mı": 47,
            "gibi": 44,
            "dert": 43,
            "demek": 41,
            "bu": 36
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "lil zey",
        "_analyzed_word_count": 685,
        "_unique_word_count": 327,
        "_top_ten_words": {
            "o": 27,
            "ben": 17,
            "yok": 16,
            "bu": 14,
            "bakmak": 13,
            "hep": 11,
            "bir": 11,
            "almak": 11,
            "el": 10,
            "olmak": 9
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "burry soprano",
        "_analyzed_word_count": 3021,
        "_unique_word_count": 872,
        "_top_ten_words": {
            "bu": 83,
            "ben": 83,
            "yok": 47,
            "için": 46,
            "her": 43,
            "hep": 40,
            "olmak": 39,
            "yapmak": 39,
            "çıkmak": 36,
            "bakmak": 35
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "leşker asakir",
        "_analyzed_word_count": 482,
        "_unique_word_count": 349,
        "_top_ten_words": {
            "bu": 11,
            "ben": 10,
            "her": 7,
            "bir": 5,
            "sen": 5,
            "kan": 5,
            "kalkmak": 4,
            "gibi": 4,
            "kalp": 4,
            "karşı": 3
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "tankurt manas",
        "_analyzed_word_count": 14986,
        "_unique_word_count": 3203,
        "_top_ten_words": {
            "ben": 485,
            "bu": 370,
            "olmak": 184,
            "sen": 171,
            "yok": 160,
            "değil": 150,
            "gibi": 137,
            "bakmak": 128,
            "bir": 116,
            "yol": 112
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "motive",
        "_analyzed_word_count": 968,
        "_unique_word_count": 467,
        "_top_ten_words": {
            "bu": 18,
            "değil": 18,
            "ben": 16,
            "olmak": 15,
            "sen": 15,
            "aşk": 13,
            "ah": 12,
            "gibi": 11,
            "istemek": 11,
            "için": 11
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "massaka",
        "_analyzed_word_count": 5510,
        "_unique_word_count": 1324,
        "_top_ten_words": {
            "die": 229,
            "demek": 163,
            "i̇st": 78,
            "sokak": 59,
            "biz": 56,
            "ben": 53,
            "und": 51,
            "in": 51,
            "das": 48,
            "sen": 47
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "uzi212",
        "_analyzed_word_count": 2655,
        "_unique_word_count": 816,
        "_top_ten_words": {
            "olmak": 49,
            "yok": 37,
            "bu": 33,
            "my": 29,
            "sen": 27,
            "bakmak": 26,
            "her": 26,
            "var": 26,
            "ben": 23,
            "mi": 22
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "muşta",
        "_analyzed_word_count": 2079,
        "_unique_word_count": 822,
        "_top_ten_words": {
            "ben": 88,
            "bu": 60,
            "olmak": 49,
            "o": 35,
            "muş": 30,
            "bir": 29,
            "serseri": 23,
            "sokak": 22,
            "vermek": 20,
            "sen": 20
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ozbi",
        "_analyzed_word_count": 10024,
        "_unique_word_count": 2024,
        "_top_ten_words": {
            "ben": 290,
            "bir": 174,
            "olmak": 172,
            "bu": 169,
            "sen": 161,
            "o": 133,
            "gibi": 104,
            "demek": 91,
            "gelmek": 90,
            "yok": 79
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sehabe",
        "_analyzed_word_count": 22533,
        "_unique_word_count": 3261,
        "_top_ten_words": {
            "ben": 778,
            "sen": 449,
            "olmak": 415,
            "bu": 345,
            "bir": 270,
            "demek": 257,
            "yok": 243,
            "o": 202,
            "bakmak": 199,
            "gelmek": 184
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ahiyan",
        "_analyzed_word_count": 5123,
        "_unique_word_count": 1514,
        "_top_ten_words": {
            "ben": 112,
            "olmak": 99,
            "bu": 81,
            "ne": 77,
            "sen": 61,
            "o": 46,
            "etmek": 45,
            "demek": 44,
            "çok": 37,
            "gün": 37
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "aspova",
        "_analyzed_word_count": 12471,
        "_unique_word_count": 1799,
        "_top_ten_words": {
            "bu": 288,
            "olmak": 238,
            "ben": 228,
            "bir": 169,
            "sen": 147,
            "yok": 133,
            "her": 122,
            "ey": 120,
            "o": 119,
            "hep": 113
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "çağrı sinci",
        "_analyzed_word_count": 7070,
        "_unique_word_count": 1880,
        "_top_ten_words": {
            "ben": 151,
            "sen": 129,
            "bu": 97,
            "olmak": 96,
            "bir": 78,
            "demek": 71,
            "biz": 68,
            "var": 63,
            "o": 60,
            "etmek": 59
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "stabil",
        "_analyzed_word_count": 6634,
        "_unique_word_count": 1549,
        "_top_ten_words": {
            "ben": 263,
            "bu": 146,
            "olmak": 106,
            "sen": 85,
            "var": 77,
            "değil": 71,
            "o": 70,
            "kadar": 66,
            "bir": 60,
            "hayat": 58
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "tahribad-ı isyan",
        "_analyzed_word_count": 6264,
        "_unique_word_count": 1590,
        "_top_ten_words": {
            "ben": 178,
            "bu": 164,
            "olmak": 108,
            "o": 105,
            "sen": 92,
            "biz": 79,
            "ghetto": 78,
            "ne": 77,
            "bir": 69,
            "demek": 60
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "lider",
        "_analyzed_word_count": 1926,
        "_unique_word_count": 734,
        "_top_ten_words": {
            "bir": 76,
            "olmak": 54,
            "vay": 37,
            "ben": 36,
            "dünya": 29,
            "sen": 28,
            "gelmek": 24,
            "bu": 24,
            "her": 21,
            "gitmek": 17
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "emboli",
        "_analyzed_word_count": 3775,
        "_unique_word_count": 1752,
        "_top_ten_words": {
            "bu": 63,
            "ben": 54,
            "sen": 41,
            "gibi": 32,
            "olmak": 31,
            "bir": 30,
            "vermek": 28,
            "propaganda": 28,
            "sokak": 24,
            "kafa": 20
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "aksan",
        "_analyzed_word_count": 2669,
        "_unique_word_count": 662,
        "_top_ten_words": {
            "bu": 117,
            "ben": 97,
            "olmak": 53,
            "o": 42,
            "her": 41,
            "var": 36,
            "b": 32,
            "yüz": 32,
            "bir": 31,
            "yok": 28
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "kozmos",
        "_analyzed_word_count": 2174,
        "_unique_word_count": 812,
        "_top_ten_words": {
            "ben": 58,
            "bir": 57,
            "olmak": 38,
            "sen": 35,
            "bu": 34,
            "bakmak": 33,
            "yok": 29,
            "her": 27,
            "var": 26,
            "vermek": 22
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "metth",
        "_analyzed_word_count": 1579,
        "_unique_word_count": 399,
        "_top_ten_words": {
            "biz": 92,
            "gang": 88,
            "bura": 81,
            "ben": 39,
            "manolya": 32,
            "sen": 27,
            "bu": 23,
            "için": 18,
            "çekmek": 17,
            "ne": 17
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "velet",
        "_analyzed_word_count": 7786,
        "_unique_word_count": 1497,
        "_top_ten_words": {
            "ben": 306,
            "bu": 189,
            "sen": 168,
            "olmak": 159,
            "bir": 153,
            "demek": 93,
            "var": 87,
            "o": 71,
            "gelmek": 67,
            "vermek": 65
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ilke",
        "_analyzed_word_count": 2002,
        "_unique_word_count": 673,
        "_top_ten_words": {
            "ben": 50,
            "yok": 50,
            "olmak": 45,
            "bu": 42,
            "yol": 37,
            "bakmak": 26,
            "var": 24,
            "o": 23,
            "her": 23,
            "şey": 22
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "maw",
        "_analyzed_word_count": 920,
        "_unique_word_count": 284,
        "_top_ten_words": {
            "bu": 31,
            "ben": 27,
            "sen": 22,
            "kafa": 19,
            "sokak": 18,
            "para": 17,
            "olmak": 16,
            "gelmek": 14,
            "niçin": 13,
            "iç": 12
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "kezzo",
        "_analyzed_word_count": 8424,
        "_unique_word_count": 2059,
        "_top_ten_words": {
            "bu": 162,
            "olmak": 120,
            "ben": 117,
            "bir": 101,
            "var": 89,
            "her": 77,
            "sen": 73,
            "o": 71,
            "yok": 67,
            "demek": 63
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "uur",
        "_analyzed_word_count": 2395,
        "_unique_word_count": 671,
        "_top_ten_words": {
            "keçiören": 83,
            "olmak": 61,
            "sen": 60,
            "biz": 53,
            "bu": 47,
            "kafa": 43,
            "ben": 39,
            "çukur": 33,
            "ne": 26,
            "dem": 25
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "yung ouzo",
        "_analyzed_word_count": 1519,
        "_unique_word_count": 448,
        "_top_ten_words": {
            "hep": 60,
            "peki": 48,
            "ben": 45,
            "ayran": 39,
            "demek": 33,
            "yok": 24,
            "kafa": 23,
            "şimdi": 21,
            "el": 19,
            "süzülmek": 19
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "mrf",
        "_analyzed_word_count": 9785,
        "_unique_word_count": 1933,
        "_top_ten_words": {
            "ben": 225,
            "bu": 204,
            "olmak": 173,
            "yol": 163,
            "yok": 127,
            "vermek": 118,
            "her": 100,
            "biz": 94,
            "sen": 92,
            "gelmek": 90
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "cartel",
        "_analyzed_word_count": 2135,
        "_unique_word_count": 754,
        "_top_ten_words": {
            "demek": 43,
            "bu": 42,
            "biz": 41,
            "cartel": 37,
            "sen": 37,
            "bir": 34,
            "olmak": 34,
            "die": 29,
            "para": 28,
            "und": 27
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "erci e",
        "_analyzed_word_count": 4397,
        "_unique_word_count": 1018,
        "_top_ten_words": {
            "ben": 151,
            "sen": 129,
            "bir": 127,
            "gelmek": 126,
            "bu": 114,
            "olmak": 75,
            "hadi": 60,
            "hep": 49,
            "ti": 48,
            "çok": 45
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "karakan",
        "_analyzed_word_count": 3169,
        "_unique_word_count": 916,
        "_top_ten_words": {
            "ben": 79,
            "gelmek": 67,
            "olmak": 59,
            "sen": 57,
            "bu": 56,
            "ne": 50,
            "bir": 49,
            "yok": 48,
            "ev": 44,
            "ses": 40
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sirhot",
        "_analyzed_word_count": 2456,
        "_unique_word_count": 791,
        "_top_ten_words": {
            "olmak": 61,
            "sen": 58,
            "her": 53,
            "kopmak": 49,
            "ben": 46,
            "bu": 38,
            "etmek": 32,
            "gece": 29,
            "göz": 28,
            "hep": 25
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sahtiyan",
        "_analyzed_word_count": 9873,
        "_unique_word_count": 2461,
        "_top_ten_words": {
            "ben": 228,
            "olmak": 221,
            "sen": 186,
            "bu": 144,
            "gelmek": 107,
            "bir": 102,
            "yok": 85,
            "her": 85,
            "para": 83,
            "o": 75
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "ramiz",
        "_analyzed_word_count": 2537,
        "_unique_word_count": 715,
        "_top_ten_words": {
            "ben": 92,
            "bu": 89,
            "gibi": 61,
            "bir": 41,
            "biz": 38,
            "sen": 37,
            "çok": 35,
            "mi": 34,
            "etmek": 32,
            "olmak": 31
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "sancak",
        "_analyzed_word_count": 14952,
        "_unique_word_count": 1696,
        "_top_ten_words": {
            "sen": 483,
            "ben": 473,
            "olmak": 279,
            "bu": 277,
            "bir": 274,
            "o": 197,
            "gelmek": 188,
            "yok": 182,
            "yine": 164,
            "ne": 156
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "taladro",
        "_analyzed_word_count": 25956,
        "_unique_word_count": 2981,
        "_top_ten_words": {
            "sen": 824,
            "ben": 763,
            "bir": 660,
            "bu": 486,
            "olmak": 407,
            "ne": 274,
            "o": 273,
            "göz": 258,
            "gelmek": 257,
            "aşk": 224
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "canfeza",
        "_analyzed_word_count": 16824,
        "_unique_word_count": 2705,
        "_top_ten_words": {
            "sen": 625,
            "ben": 592,
            "bir": 398,
            "olmak": 354,
            "bu": 304,
            "var": 160,
            "o": 154,
            "ne": 149,
            "gelmek": 136,
            "aşk": 125
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "bedo",
        "_analyzed_word_count": 323,
        "_unique_word_count": 132,
        "_top_ten_words": {
            "kafa": 13,
            "e": 12,
            "ileri": 12,
            "taraf": 12,
            "ay": 12,
            "yok": 10,
            "ben": 8,
            "bu": 8,
            "yol": 8,
            "girmek": 6
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "vio",
        "_analyzed_word_count": 909,
        "_unique_word_count": 416,
        "_top_ten_words": {
            "bu": 23,
            "olmak": 17,
            "artık": 13,
            "yeni": 12,
            "iç": 11,
            "kendi": 11,
            "sen": 11,
            "ben": 11,
            "yok": 10,
            "zehir": 10
        }
    },
    {
        "_type": "artist_stats",
        "_artist_name": "koksvl",
        "_analyzed_word_count": 2699,
        "_unique_word_count": 647,
        "_top_ten_words": {
            "ay": 78,
            "şen": 72,
            "gelmek": 68,
            "bu": 68,
            "şener": 52,
            "az": 51,
            "olmak": 49,
            "ben": 42,
            "ey": 40,
            "almak": 34
        }
    }
    ]
};

let images = [], 
    datasets = [],
    y = {};

(setStats = (stats, limit=0, distance=240, co=3, ratio=null) => {
    datasets = [];
    images = [];
    y = {};
    stats.stats.forEach((element, index) => {
        let yValue = 10,
            xValue = element._unique_word_count,
            name = element._artist_name,
            top_ten = element._top_ten_words,
            analyzed = element._analyzed_word_count,
            yCounter = 1,
            yCoefficient = co,
            distanceLimit = distance;

        if (ratio) {
            xValue = ((xValue / analyzed) * 100).toFixed(2);
            yValue = 3
        }  
        
        if (analyzed >= limit) {
            let image = new Image(i, i);
            image.src = `assets/images/${element._artist_name}.png`;
            images.push(image);
            name = name.split(' ');
            let upperCaseName = name.map((element) => {
                return element.charAt(0).toUpperCase() + element.slice(1);
            });
            name = upperCaseName.join(' ');
            while (true) {
                let flag = true;
                if (!(yValue in y)) {
                    y[yValue] = []
                }
                for (const value of y[yValue]) {
                    if (Math.abs(value - xValue) < distanceLimit) {
                        if (yCounter % 2 === 1) {
                            yValue += (yCoefficient * yCounter)
                        } else {
                            yValue -= (yCoefficient * yCounter);
                        }
                        flag = false;
                        yCounter++;
                        break;
                    }
                }
                if (flag) break;
            }          

            y[yValue].push(xValue);
            let d = {
                label: name,
                data: [{x: xValue, y:yValue, r:30, analyzed: analyzed, top_ten: top_ten, ratio: ratio}]
            };
            datasets.push(d)
        }
    });
})(allStats);

const customTooltips = function(tooltip) {
    let tooltipEl = document.getElementById('chartjs-tooltip');

    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.innerHTML = '<table></table>';
        this._chart.canvas.parentNode.appendChild(tooltipEl);
    }

    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = '0';
        return;
    }

    // Set caret Position
    tooltipEl.classList.remove('above', 'below', 'no-transform');
    if (tooltip.yAlign) {
        tooltipEl.classList.add(tooltip.yAlign);
    } else {
        tooltipEl.classList.add('no-transform');
    }

    function getBody(bodyItem) {
        return bodyItem.lines;
    }

    if (tooltip.body) {
        let titleLines = tooltip.title || [];
        let bodyLines = tooltip.body.map(getBody);

        let innerHtml = '<thead>';

        titleLines.forEach(function(title) {
            innerHtml += '<tr><th>' + title + '</th></tr>';
        });
        innerHtml += '</thead><tbody>';

        bodyLines.forEach(function(body, i) {
            let colors = tooltip.labelColors[i];
            let style = 'background:' + colors.backgroundColor;
            style += '; border-color:' + colors.borderColor;
            style += '; border-width: 2px';
            innerHtml += '<tr><td>' + body + '</td></tr>';
        });
        innerHtml += '</tbody>';

        let tableRoot = tooltipEl.querySelector('table');
        tableRoot.innerHTML = innerHtml;
    }

    let positionY = this._chart.canvas.offsetTop;
    let positionX = this._chart.canvas.offsetLeft;

    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
    tooltipEl.style.fontSize = tooltip.bodyFontSize;
    tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
    tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
};

let donutChart;

let itemClick = (evt) => {
    let firstPoint = lugatrapChart.getElementAtEvent(evt)[0];
    if (firstPoint) {
        fttButton.classList.remove('active');
        allButton.classList.remove('active');

        let label = lugatrapChart.data.datasets[firstPoint._datasetIndex].label,
            value = lugatrapChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];

        let labels = [],
            data = [];

        for (word in value.top_ten) {
            labels.push(word);
            data.push(value.top_ten[word]);
        }

        canvas.style.display = 'none';
        let height = parseInt(canvas.style.height.replace('px', ''));
            width = parseInt(canvas.style.width.replace('px', '')),
            imgHeight = (height / 2.8);

        canvas2.style.display = 'block';
        canvas2.style.marginTop = '0 !important';
        doughnutImage.style.display = 'block';
        doughnutImage.style.position = 'absolute';
        doughnutImage.style.height = imgHeight + 'px';
        doughnutImage.style.width = imgHeight + 'px';

        let low = label.split(' ').map((value, index) => {
            return value.toLowerCase()
        });
        let name = low.join(' ');

        doughnutImage.src = `assets/images/${name}.png`
        doughnutImage.style.marginTop = (height / 2) - (imgHeight) - 8 + 'px';
        doughnutImage.style.marginLeft = (width / 2) - (imgHeight / 2) + 'px';
        artistName.style.display = 'block';
        topTenTitle.style.display = 'block';
        graphDesc.style.display = 'none';
        artistName.innerText = `${label}`;

        donutChart = new Chart(ctx2, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: data,
                    backgroundColor: ['#282828', '#404040', '#606060', '#808080', '#A0A0A0', '#B8B8B8', '#D0D0D0', '#DCDCDC', '#E8E8E8', '#FFFFFF']
                }],
                labels: labels
            },
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            count = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            let word = data.labels[tooltipItem.index];
                            label = `<h4 class="text-center">${word || ''}: ${count}</h4>`;
                            return label;
                        }
                    },
                    enabled: false,
                    bodyFontSize: '0.5em',
                    mode: 'index',
                    position: 'nearest',
                    custom: customTooltips
                }
            }
        });
    }
};

let itemHover = (evt) => {
    let firstPoint = lugatrapChart.getElementAtEvent(evt)[0];
    if (firstPoint) {
        evt.target.style.cursor = 'pointer'
    } else {
        evt.target.style.cursor = 'default'
    }
};

let lugatrapChart = new Chart(ctx, {
    type: 'bubble',
    plugins: [{
    afterUpdate: function(chart) {
        images.forEach((element, index) => {
            chart.config.data.datasets[index]._meta[0].data[0]._model.pointStyle = element;
        });
    }
    }],
    responsive: true,
    data: {
        datasets: datasets
    },
    options: {
        onClick: itemClick,
        onHover: itemHover,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                display: false,
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Eşsiz Kelime Sayısı',
                    fontSize: 15,
                    fontFamily: 'Helvetica',
                    padding: 10
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 7000
                }
            }]
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    let analyzed = data.datasets[tooltipItem.datasetIndex].data[0].analyzed,
                        top_ten = data.datasets[tooltipItem.datasetIndex].data[0].top_ten,
                        ratio = data.datasets[tooltipItem.datasetIndex].data[0].ratio,
                        xLabel = '',
                        uniqueLabel = 'Eşsiz kelime'
                    if (ratio) {
                        uniqueLabel += ' oranı'
                        xLabel += '%'
                    } 
                    xLabel += tooltipItem.xLabel
                    let label = `<h4 class="text-center">${data.datasets[tooltipItem.datasetIndex].label || ''} </h4>`;
                    label += `<span class="text-danger"><b>Analiz edilen kelime: </b></span><span class="tt-value">${analyzed}</span><br>`;
                    label += `<span class="text-danger"><b>${uniqueLabel}: </b></span><span class="tt-value">${xLabel}</span><br>`;
                    return label;
                }
            },
            enabled: false,
            bodyFontSize: '1em',
            mode: 'dataset',
            position: 'nearest',
            xPadding: 10,
            yPadding: 8,
            custom: customTooltips
        }
    }
});

allButton.addEventListener('click', () => {
    canvas.style.display = 'block';
    doughnutImage.style.display = 'none';
    artistName.style.display = 'none';
    topTenTitle.style.display = 'none';
    graphDesc.style.display = 'block';
    graphDesc.innerHTML = 'Tüm şarkılardaki eşsiz kelime sayısı karşılaştırması.';
    setStats(allStats);
    lugatrapChart.data.datasets = datasets;
    lugatrapChart.options.scales.xAxes = [{
        ticks: {
            suggestedMin: 0,
            suggestedMax: 7000
        },
        scaleLabel: {
            display: true,
            labelString: 'Eşsiz Kelime Sayısı',
            fontSize: 15,
            fontFamily: 'Helvetica',
            padding: 10
        },
    }];

    lugatrapChart.update();
    if (donutChart) {
        donutChart.destroy();
    }
    canvas2.style.setProperty('display', 'none', 'important');
    fttButton.classList.remove('active');
    ratioButton.classList.remove('active');
    allButton.classList.add('active');
});

fttButton.addEventListener('click', () => {
    canvas.style.display = 'block';
    doughnutImage.style.display = 'none';
    artistName.style.display = 'none';
    topTenTitle.style.display = 'none';
    graphDesc.style.display = 'block';
    graphDesc.innerHTML = 'İlk 10000 kelimedeki eşsiz kelime sayısı karşılaştırması.';
    setStats(fttStats, 10000, 100, 1.2);
    lugatrapChart.data.datasets = datasets;
    lugatrapChart.options.scales.xAxes = [{
        ticks: {
            suggestedMin: 1000,
            suggestedMax: 3500
        },
        scaleLabel: {
            display: true,
            labelString: 'Eşsiz Kelime Sayısı',
            fontSize: 15,
            fontFamily: 'Helvetica',
            padding: 10
        }
    }];
    lugatrapChart.options.scales.yAxes = [{
        ticks: {
            suggestedMin: 0,
            suggestedMax: 20
        },
        display: false
    }];
    lugatrapChart.update();
    if (donutChart) {
        donutChart.destroy();
    }
    canvas2.style.setProperty('display', 'none', 'important');
    fttButton.classList.add('active');
    allButton.classList.remove('active');
    ratioButton.classList.remove('active');
});

ratioButton.addEventListener('click', () => {
    canvas.style.display = 'block';
    doughnutImage.style.display = 'none';
    artistName.style.display = 'none';
    topTenTitle.style.display = 'none';
    graphDesc.style.display = 'block';
    graphDesc.innerHTML = 'Eşsiz kelime sayısının, analiz edilen toplam kelime sayısına oranı karşılaştırması.';
    setStats(ratioStats, 5000, 1.2, 0.4, 'ratio');
    lugatrapChart.data.datasets = datasets;
    lugatrapChart.options.scales.xAxes = [{
        ticks: {
            suggestedMin: 5,
            suggestedMax: 35
        },
        scaleLabel: {
            display: true,
            labelString: 'Eşsiz kelime sayısı / Analiz edilen toplam kelime sayısı',
            fontSize: 15,
            fontFamily: 'Helvetica',
            padding: 10
        }
    }];
    lugatrapChart.options.scales.yAxes = [{
        ticks: {
            suggestedMin: 0,
            suggestedMax: 6
        },
        display: false
    }];
    lugatrapChart.update();
    if (donutChart) {
        donutChart.destroy();
    }
    canvas2.style.setProperty('display', 'none', 'important');
    fttButton.classList.remove('active');
    allButton.classList.remove('active');
    ratioButton.classList.add('active');
});