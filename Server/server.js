// goal: set up express routing

const express = require('express');
const path = require('path');
const controller = require('./controller.js');

const app = express();
const PORT = 3000;

// Parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the compiled React files from build
app.use(express.static(path.join(__dirname, '..', 'build')));

// API route
app.get('/api', controller.getStretches, (req, res) => {
  return res.status(200).json(res.locals.apiRes);
});

// Serve the React app for all other routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start server
app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
