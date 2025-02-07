# Movie Website

This movie website was built using **React** and integrated with the **TMDb (The Movie Database)** API. It displays various movie-related pages such as popular movies, top-rated movies, upcoming releases, movie details, and a search functionality. The app is designed to provide users with an interactive and engaging experience while exploring movies.

## Features

- **Popular Movies Page**: Displays a list of popular movies.
- **Top Rated Movies Page**: Shows the top-rated movies as per user ratings.
- **Upcoming Movies Page**: Displays movies that are set to release in the near future.
- **Single Movie Detail Page**: Displays detailed information about a selected movie, including its title, release date, plot, and more.
- **Search Functionality**: Allows users to search for movies by name and view their details.

## Tech Stack

- **Frontend**: React.js
- **API**: TMDb API (The Movie Database)
- **State Management**: React Hooks (useState, useEffect)
- **Styling**: Bootstrap / Styled-components (or any other preferred method)

## Setup

### Prerequisites

Make sure you have the following installed:

- **Node.js** (LTS version recommended)  
  Download and install from [Node.js website](https://nodejs.org/)
  
- **npm** (comes with Node.js)

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/movie-website.git
   cd movie-website
   ```

2. **Install dependencies**:

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Set up your TMDb API key**:

   - Sign up for a free account at [TMDb](https://www.themoviedb.org/).
   - Go to your account settings, navigate to the "API" section, and generate a new API key.
   - Create a `.env` file in the root of the project and add your API key like so:

     ```
     REACT_APP_TMDB_API_KEY=your_api_key_here
     ```

4. **Start the development server**:

   Run the following command to start the application:

   ```bash
   npm start
   ```

   The website will be available at `http://localhost:3000/`.

## Pages

- **Popular Page**: Shows a list of currently popular movies using the TMDb API.
- **Top Rated Page**: Displays movies with the highest user ratings.
- **Upcoming Page**: Displays movies that are scheduled to be released soon.
- **Movie Detail Page**: A detailed view of each movie with information such as description, release date, and more.
- **Search Functionality**: Allows users to search for movies by name and see the results.

## API Endpoints Used

- **Popular Movies**:  
  `https://api.themoviedb.org/3/movie/popular?api_key=<YOUR_API_KEY>&language=en-US&page=1`

- **Top Rated Movies**:  
  `https://api.themoviedb.org/3/movie/top_rated?api_key=<YOUR_API_KEY>&language=en-US&page=1`

- **Upcoming Movies**:  
  `https://api.themoviedb.org/3/movie/upcoming?api_key=<YOUR_API_KEY>&language=en-US&page=1`

- **Search Movies**:  
  `https://api.themoviedb.org/3/search/movie?api_key=<YOUR_API_KEY>&query=<QUERY>`

- **Movie Details**:  
  `https://api.themoviedb.org/3/movie/<MOVIE_ID>?api_key=<YOUR_API_KEY>&language=en-US`

## Folder Structure

```
/movie-website
├── /public
│   └── index.html
├── /src
│   ├── /components
│   │   ├── Popular.js
│   │   ├── TopRated.js
│   │   ├── Upcoming.js
│   │   ├── MovieDetail.js
│   │   ├── Search.js
│   ├── /services
│   │   └── tmdbAPI.js
│   ├── App.js
│   ├── index.js
│   ├── /assets
│   └── /styles
├── .env
├── package.json
└── README.md
```

## Additional Information

- You can customize the look and feel of the website by modifying the CSS files or adding **styled-components** for more dynamic styling.
- The search bar allows for dynamic search, so as you type, it fetches and shows the results immediately.
- The `MovieDetail.js` component fetches and displays detailed movie data when a user clicks on a movie.

## Known Issues

- Ensure the API key is valid, as expired or incorrect keys will cause the app to break or not display any data.
- Rate-limiting from TMDb might temporarily block requests if too many API calls are made in a short period.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any inquiries or suggestions, feel free to open an issue in this repository or reach out to [shubhampal9757@gmail.com].

---
