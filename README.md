# movie-list

- 온라인 강의 참고

    https://nomadcoders.co/react-for-beginners

## 1. 기능

- React.js 활용 (반응형 UI)

    : JSX, State, Props, Class Components, Data Fetching, Routing

- 영화 API 활용 (토렌트 인기순)

## 2. API 호출 예시

* <b>URL</b>

    https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year

* <b>Result (JSON)</b>

    ```
    {
        "id": 37384,
        "url": "https://yts.mx/movies/jai-bhim-2021",
        "imdb_code": "tt15097216",
        "title": "Jai Bhim",
        "title_english": "Jai Bhim",
        "title_long": "Jai Bhim (2021)",
        "slug": "jai-bhim-2021",
        "year": 2021,
        "rating": 9.3,
        "runtime": 164,
        "genres": [
          "Crime",
          "Drama"
        ],
        "summary": "...",
        "description_full": "...",
        "synopsis": "...",
        "yt_trailer_code": "ElXnVVDl8cA",
        "language": "ta",
        "mpa_rating": "",
        "background_image": "https://yts.mx/assets/images/movies/jai_bhim_2021/background.jpg",
        "background_image_original": "https://yts.mx/assets/images/movies/jai_bhim_2021/background.jpg",
        "small_cover_image": "https://yts.mx/assets/images/movies/jai_bhim_2021/small-cover.jpg",
        "medium_cover_image": "https://yts.mx/assets/images/movies/jai_bhim_2021/medium-cover.jpg",
        "large_cover_image": "https://yts.mx/assets/images/movies/jai_bhim_2021/large-cover.jpg",
        "state": "ok",
        "torrents": [
          {
            "url": "https://yts.mx/torrent/download/704092B55506327B4FBB226EC8F3F57644781153",
            "hash": "704092B55506327B4FBB226EC8F3F57644781153",
            "quality": "720p",
            "type": "web",
            "seeds": 62,
            "peers": 3,
            "size": "1.47 GB",
            "size_bytes": 1578400481,
            "date_uploaded": "2021-11-03 16:12:36",
            "date_uploaded_unix": 1635952356
          },
          {
            "url": "https://yts.mx/torrent/download/AD6FA54A7C7E99510FF1433EB736C31E44F442A0",
            "hash": "AD6FA54A7C7E99510FF1433EB736C31E44F442A0",
            "quality": "1080p",
            "type": "web",
            "seeds": 116,
            "peers": 6,
            "size": "3.02 GB",
            "size_bytes": 3242700308,
            "date_uploaded": "2021-11-03 19:19:18",
            "date_uploaded_unix": 1635963558
          }
        ],
        "date_uploaded": "2021-11-03 16:12:36",
        "date_uploaded_unix": 1635952356
      }

## 3. 화면 예시

![image](https://user-images.githubusercontent.com/14077108/153196368-a25d1904-d49d-4009-9000-220184acd08a.png)

![image](https://user-images.githubusercontent.com/14077108/153196743-a7d09bcc-5471-469a-bda4-864b8750e348.png)
