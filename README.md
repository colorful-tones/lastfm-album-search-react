# Simple Last.fm API React app

Unfortunately, [Last.fm discontinued album artwork from API results recently](https://getsatisfaction.com/lastfm/topics/api-announcement-dac8oefw5vrxq). So, this app is quite simple for now.

Objectives:

1. Consume [Last.fm Album Search API](https://www.last.fm/api/show/album.search) in simple React app using new Hooks API (i.e. [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect) and [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)).
2. Publish on Heroku (coming soon!)

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser

## To-Do

- [x] Add simple check for results. If none, then offer appropriate feedback.
- [ ] Publish to Heroku
- [ ] Add paginated results (right now just showing first 30, on first page)
- [ ] Add simple field validation for empty field.
- [ ] Integrate another API request (e.g. [MusicBrainz](https://musicbrainz.org/doc/Developer_Resources)) for album artwork.
