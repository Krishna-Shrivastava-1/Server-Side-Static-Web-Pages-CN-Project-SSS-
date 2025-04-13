# Basic HTTP Server Serving Static Web Pages

This project is a simple HTTP server built with Node.js that serves static web pages. It handles basic routing for different HTML files.

## Features

* Serves static HTML content for the homepage (`/`), an about page (`/about`), and a services page (`/service`).
* Handles requests for non-existent routes by serving a custom 404 "Not Found" page.
* Includes basic error handling for file reading operations.

## Getting Started

To run this server locally, you need to have Node.js installed on your system.

1.  **Clone the repository (if you have it on GitHub):**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Navigate to the project directory in your terminal.**

3.  **Run the server:**
    ```bash
    node index.js
    ```
    (Replace `index.js` with the name of your main server file if it's different).

4.  **Open your web browser and navigate to `http://localhost:5500`** to view the homepage. You can also access the other pages at `http://localhost:5500/about` and `http://localhost:5500/service`. Requests for other paths will be served with the `404.html` page.

## Project Structure

The project should contain the following files:

.
├── index.js          (The main Node.js server file)
├── index.html        (The homepage content)
├── about.html        (The about page content)
├── service.html      (The services page content)
└── 404.html          (The "Not Found" page content)


Make sure these HTML files exist in the same directory as your `index.js` file.

## Deployment

This basic server can be deployed to various platforms that support Node.js applications. Some popular options include:

* **Heroku:** (See deployment instructions in previous responses)
* **Render:** (See deployment instructions in previous responses)
* **DigitalOcean App Platform:** (See deployment instructions in previous responses)

You will typically need to create a `Procfile` (for Heroku) or configure the start command in the platform's settings to run your `index.js` file.

## Further Development

This is a very basic server. You could extend it with features like:

* Serving other static file types (CSS, JavaScript, images).
* More sophisticated routing using libraries like Express.js.
* Handling POST requests and form data.
* Templating engines to generate dynamic HTML.

## Author

Krishna Shrivastava
Github Profile - https://github.com/Krishna-Shrivastava-1
