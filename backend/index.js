const app = require('./app');
const connectDB = require('./config/mongoConnection');

const userSignup = require('./routes/users/signup');
const userLogin = require('./routes/users/login');
const getUserDetails = require('./routes/users/userProfile');
const userImage = require('./routes/users/image');
const recommendation = require('./routes/recommendations/recommendation');

// Connect to mongoDB database
connectDB();

//  User - SIGNUP
app.use('/users/signup', userSignup);
// User - Login
app.use('/users/login', userLogin);
//Get User details
app.use('/users', getUserDetails);
//Update User details

//User - Image
app.use('/users/image', userImage);
// Recommendations
app.use('/recommendations', recommendation);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Application started listening to port ${PORT} successfully.`);
});
