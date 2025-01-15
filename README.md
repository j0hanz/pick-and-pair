![Logo](docs/images/logo-README.png)

**Pick & Pair** is a memory game built with React. The objective is to match all pairs of cards with the least number of moves and time.

---

## Features

- **Responsive Design**: Fully adaptable to various screen sizes.
- **Animated Card Flips**: Smooth animations for flips and matches.
- **Scoring System**: Earn stars based on your performance.
- **Sound Effects**: Audio feedback for matches and misses.
- **Latest Updates**: Displays the latest commits from the GitHub repository.

---

## Technologies Used

- **React**: For building the user interface.
- **React Bootstrap**: Bootstrap components for responsive design.
- **Framer Motion**: For animations and transitions.
- **Howler.js**: For handling audio effects.
- **Axios**: For HTTP requests.

---

## Getting Started

### Prerequisites

- Node.js (v20.x)
- npm (v10.x)

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

To start the development server:

```sh
npm start
```

Access the application at `http://localhost:3000`.

### Building for Production

To create a production build:

```sh
npm run build
```

### Running Tests

To run tests:

```sh
npm test
```

---

## Usage Instructions

1. Start the game by clicking the **Start Game** button.
2. Memorize the positions of the cards during the initial flip.
3. Click cards to reveal them and match pairs.
4. The game ends when all pairs are matched. Your score is based on moves and time taken.

---

## Scoring System

Earn up to 5 stars based on moves and time:

- **5 stars**: Complete in 6 moves within 15 seconds.
- **4 stars**: Complete in 7 moves within 30 seconds.
- **3 stars**: Complete in 8 moves within 45 seconds.
- **2 stars**: Complete in 9 moves within 60 seconds.
- **1 star**: 10+ moves or more than 60 seconds.

---

## Configuration

Customize the game by editing the following environment variable in the `.env` file:

- `REACT_APP_GITHUB_TOKEN`: GitHub token to fetch the latest commits.

---

## Deployment

To deploy to a hosting service like Heroku:

1. Create a Heroku account and install the Heroku CLI.
2. Log in to Heroku:

   ```sh
   heroku login
   ```

3. Create a new Heroku app:

   ```sh
   heroku create
   ```

4. Deploy the application:

   ```sh
   git push heroku main
   ```

---

## Acknowledgements

- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Framer Motion](https://www.framer.com/motion/)
- [Howler.js](https://howlerjs.com/)
- [Axios](https://axios-http.com/)

Special thanks to creators of GIFs used in the project from [Pixabay](https://pixabay.com/):

- [Volkan Akın](https://pixabay.com/users/aknkidshouse-21218370)
- [Marijana Jakelich](https://pixabay.com/users/mxjfiles-41050463)
- [SuperGSATB](https://pixabay.com/users/supergsatb-32809140)
- [Peace, love, happiness](https://pixabay.com/users/placidplace-25572496)

---

## Project Structure

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
