const path = require('path');
const express = require('express');
const app = express();

const userRoute = require('./routes/user');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user route
app.use('/user', userRoute);

// Serve static files (optional, adjust the path as necessary)
// app.use(express.static(path.join(__dirname, 'public')));

// Error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
