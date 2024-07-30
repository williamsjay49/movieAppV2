````markdown
# Movie App

A simple movie search app built with React and vanilla CSS, using the [The Movie Database (TMDb)](https://www.themoviedb.org) API.

## Features

- Search movies by title
- View movie details: release date, rating, and overview
- Display movie posters

## Technologies

- **React**
- **Vanilla CSS**
- **TMDb API**

## Setup

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/movie-app.git
   cd movie-app
   ```
````

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Add TMDb API key**:

   - Create a `.env` file in the root directory:
     ```bash
     REACT_APP_TMDB_API_KEY=your_api_key_here
     ```

4. **Run the app**:
   ```bash
   npm start
   ```
   Open `http://localhost:3000` in your browser.

## API Request Example

```javascript
const searchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  setMovies(data.results);
};
```

## Project Structure

```
movie-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── index.css
├── .env
├── package.json
├── README.md
```

## License

This project is licensed under the MIT License.

## Acknowledgements

- [TMDb API](https://www.themoviedb.org/documentation/api)
- [React](https://reactjs.org/)

```

```
