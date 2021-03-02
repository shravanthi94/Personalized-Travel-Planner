const app = require('./app');

app.get('/', (req, res) => {
  res.send('hello');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Application started listening to port ${PORT} successfully.`);
});
