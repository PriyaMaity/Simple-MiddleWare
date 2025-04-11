# Simple Middleware

This is a simple Express application that demonstrates the use of a custom logging middleware. The middleware intercepts incoming requests and logs essential details such as the HTTP method, requested URL, timestamp, status code, and the time taken to process the request. In addition, the application has two routes: one for the home page and another for contact information.

## Overview

- **Logging Middleware:** Logs details about incoming requests including HTTP method, URL, timestamp, response status code, and processing time.
- **Routes:**
  - `/` - Home Page
  - `/contact` - Contact Page
- **Developer:** Priya Maity

## Features

- Uses `express.json()` middleware to parse JSON payloads.
- Custom middleware (`requestLogger`) to log request details.
- Simple route structure for demonstration purposes.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install express
   ```

## Running the Application

1. **Start the server:**

   ```bash
   node index.js
   ```

2. **Access the endpoints:**
   - Home: [http://localhost:5050/](http://localhost:5050/)
   - Contact: [http://localhost:5050/contact](http://localhost:5050/contact)

The console will display logs similar to:

```
Listening to Port : 5050
Developer: Priya Maity
[2025-04-11T12:00:00.000Z] GET / - 200 - 5ms
[2025-04-11T12:51:04.396Z] GET /contact - 200 - 1ms

```

## Author

Priya Maity
```
