# Pick & Pair Memory Game

Pick & Pair is a memory game built with React. The objective of the game is to match all pairs of cards within the least number of moves and time.

## Features

- **Responsive Design**: The game is fully responsive and works on various screen sizes.
- **Animated Card Flips**: Smooth animations for card flips and matches.
- **Scoring System**: Earn stars based on the number of moves and time taken.
- **Sound Effects**: Audio feedback for correct and incorrect matches.
- **Latest Updates**: View the latest commits from the GitHub repository.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Bootstrap**: Bootstrap components built with React.
- **Howler.js**: JavaScript library for audio effects.
- **Axios**: Promise-based HTTP client for the browser and Node.js.

## Getting Started

### Prerequisites

- Node.js (version 20.x)
- npm (version 10.x)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/j0hanz/pick-and-pair.git
   cd pick-and-pair
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your GitHub token:

   ```env
   REACT_APP_GITHUB_TOKEN=your_github_token
   ```

### Running the Application

To start the development server, run:

```sh
npm start
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:

```sh
npm run build
```

### Running Tests

To run the tests, use:

```sh
npm test
```

## Project Structure

The project is organized into several directories:

```sh
src/
  ├── api/
  ├── assets/
  ├── components/
  ├── data/
  ├── hooks/
  ├── styles/
  ├── utils/
  ├── App.jsx
  ├── index.jsx
  ├── reportWebVitals.js
  └── setupTests.js
```

## Scoring System

The game rates your performance based on the number of moves and the time taken to complete the game. You can earn up to 5 stars:

- **5 stars**: Complete the game in 6 moves and within 15 seconds.
- **4 stars**: Complete the game in 7 moves and within 30 seconds.
- **3 stars**: Complete the game in 8 moves and within 45 seconds.
- **2 stars**: Complete the game in 9 moves and within 60 seconds.
- **1 star**: Complete the game in 10 or more moves or take longer than 60 seconds.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
