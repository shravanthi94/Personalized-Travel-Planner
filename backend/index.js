const app = require('./app');

const userSignup = require('./routes/users/signup');
const userLogin = require('./routes/users/login');
const getUserDetails = require('./routes/users/userProfile');
const userImage = require('./routes/users/image');

//  User - SIGNUP
app.use('/users/signup', userSignup);
// User - Login
app.use('/users/login', userLogin);
//Get User details
app.use('/users', getUserDetails);
//Update User details

//User - Image
app.use('/users/image', userImage);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Application started listening to port ${PORT} successfully.`);
});
