![Screenshot 2024-10-27 at 17 48 11](https://github.com/user-attachments/assets/e6e4db92-9bff-4055-ac03-13f790e8e6da)


# Memory Card Game
# Project Overview

The Memory Card Game is a React-based application where users test their memory by clicking on cards representing coffee types. The objective is to remember which cards have been clicked and avoid selecting the same card twice. After each selection, the cards are shuffled to add an extra challenge to the game. The project leverages the Sample Coffee API to dynamically load coffee images and details for the cards.
# Table of Contents

    Features
    Installation
    Usage
    Project Structure
    Technologies Used
    Future Improvements

# Features

    Dynamic Card Loading: Coffee card data is fetched from an external API.
    Memory Game Logic: Users click on each card without repeating selections.
    Score Tracking: Score increases with each unique card click and resets upon duplicate clicks.
    Card Shuffling: Cards shuffle once per click, enhancing the memory challenge.

Installation

    Clone the repository:

    bash

git clone [<repository-url>](https://github.com/ayuboketch/project-memory-card)
cd memory-card-game

Install dependencies:

bash

    npm install

Run the application:

bash

    npm start

    The app will be available at http://localhost:3000.

Usage

    Load the Game: Open the app, and a set of coffee cards will be displayed.
    Play the Game: Click on a card to increase the score if it hasn’t been selected before. Selecting the same card twice will reset the score.
    Observe Shuffling: After each selection, the cards will shuffle, requiring you to remember previously selected cards.

Project Structure

plaintext

src
├── components
│   ├── Card.js          # Handles the main card logic
│   ├── Sidebar.js       # Optional: Placeholder for a potential sidebar
│   ├── Scoreboard.js    # Optional: Placeholder for displaying score details
├── styles
│   ├── Card.module.css  # Styles for the Card component
├── App.js               # Main app component
└── index.js             # Entry point for the React app

# Technologies Used

    React: Component-based UI library.
    JavaScript: For interactive logic.
    CSS Modules: Scoped styling for components.
    Sample Coffee API: External API for coffee card data.

# Future Improvements

    Enhanced Scoring System: Introduce levels or points based on speed or consecutive correct selections.
    Game Levels: Implement levels with increasing difficulty or number of cards.
    User Statistics: Track and display best scores and past performance.

Acknowledgments

Special thanks to Sample APIs for providing coffee data for this project.
