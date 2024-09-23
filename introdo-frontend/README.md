# Introdo

A responsive UI developed using React for both web and mobile platforms based on Figma designs. The UI features dynamic elements such as auto-switching tabs and a progress bar synced with a timer.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Project Architecture](#project-architecture)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project implements a responsive and dynamic user interface that switches between tabs automatically and includes a progress bar that updates over time. The interface adapts to both mobile and web platforms. Below are the key features:

### Features to Implement:
1. **Tab Switching Feature**
   - **Auto-Switch Mechanism:** Tabs switch automatically every 5 seconds.
   - **Manual Interaction:** Manual tab switching by user resets the timer, providing a full 5-second interval before switching again.
   - **Visual Feedback:** Highlights the active tab with a smooth transition effect.

2. **Unlock The Perks Section**
   - **Timer:** A timer runs from 14:00 to 14:59.
   - **Progress Bar:** A progress bar syncs with the timer, filling from 0% to 100% as the time advances from 14:00 to 14:59.

## Technologies

- **React**: UI framework used to build responsive components.
- **CSS/SCSS**: Used for styling the components.
- **React Hooks**: For state management and handling side effects (e.g., `useEffect` for timers).
- **Figma Designs**: Used for layout and visual elements.

## Project Architecture

- `src/`: Main source directory containing all the components and logic.
  - `components/`: React components for UI elements like Tabs, Timer, and ProgressBar.
  - `styles/`: CSS or SCSS files for styling.
  - `assets/`: Any images or static files.
  - `App.js`: Main file where the components are integrated.
  - `index.js`: Entry point of the application.

## Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or above)
- npm (v6 or above)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/20Varsha/introdo.git

Navigate to the project directory:
cd introdo

Install the project dependencies:
npm install

Start the development server:
npm start

Open the app in your browser:

http://localhost:3000

