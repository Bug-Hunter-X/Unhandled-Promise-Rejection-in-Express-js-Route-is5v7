const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling missing here!  Express doesn't automatically handle promise rejections.
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an error
  throw new Error('Something went wrong!');
}