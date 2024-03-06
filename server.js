// server.js

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000; // Use the port specified by the environment variable PORT, or default to 3000

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Example route for API
app.get("/api/data", (req, res) => {
  // This is an example route for handling API requests
  // You can customize it to suit your application's needs
  res.json({ message: "This is an example API response" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
