const app = require('./app');

// app.get('/', (req, res) => {
//   res.send('hello');
// });

const userSignup = require('./routes/users/signup');
const userLogin = require('./routes/users/login');
const getUserDetails = require('./routes/users/userProfile');

//  User - SIGNUP
app.use('/users/signup', userSignup);
// User - Login
app.use('/users/login', userLogin);
//Get User details
app.use('/users', getUserDetails)
//Update User details

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Application started listening to port ${PORT} successfully.`);
});
