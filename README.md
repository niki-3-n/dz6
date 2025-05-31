# Image Search Application

This is a React application that allows users to search for images using the Pixabay API. The application features a search bar, image gallery, modal view for enlarged images, and infinite scrolling functionality.

## Features

- Search images by keywords
- Responsive image gallery
- Modal view for enlarged images
- Load more functionality
- Loading spinner
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Pixabay API key

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Pixabay API key:
   ```
   REACT_APP_PIXABAY_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Enter a search term in the search bar
2. Click on an image to view it in a modal
3. Click "Load more" to load additional images
4. Press ESC or click outside the modal to close it

## Technologies Used

- React
- TypeScript
- Axios
- React Loader Spinner
- CSS Modules
