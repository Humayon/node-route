const express = require('express');
const app = express();
const userRoute = require('./userRoute');
const postRoute = require('./postRoute');

/**
 * Route and Middlewares
 */
app.use('/user', userRoute);
app.use('/posts', postRoute);

/**
 * Route with Param
 */

app.get('/products/:prodId', (req, res) => {
  res.send(
    '<h1>Single Product Page</h1> ' + '<h2>Product ID:</h2>' + req.params.prodId
  );
});

/**
 * Main and 404 route
 */
app.get('/', (req, res) => {
  res.send('<h1>Hello from Node.js</h1>');
});

app.get('*', (req, res) => {
  res.send('<h1>404, Page not found</h1>');
});

/**
 * Server
 */
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
