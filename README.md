# Persistent Number Counter

This is a simple React web application that provides a counter with undo/redo functionality. The counter is persistent, meaning it retains its value and history even after the page is reloaded.

## Features

- Increment and decrement a number using buttons.
- Number is constrained between 0 and 150.
- Progress bar reflects the current number.
- Smooth transition/animation for the progress bar.
- Undo/Redo functionality.
- State is saved in `localStorage` for persistence.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Framer Motion:** A library for animations in React.
- **Tailwind CSS:** Utility-first CSS framework for styling.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Node.js package manager (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aaupatel/persistent-number-counter.git

2. Navigate into the project directory:

   ```bash
   cd persistent-number-counter

3. Install the dependencies:

   ```bash
   npm install

### Running the Application
   To start the development server, run:

   ```base
   npm run dev

This will open the app in your default web browser. If it doesn't, navigate to http://localhost:5173/ in your browser.