// const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// mongoose.connect(process.env.MONGODB_URI, { tls: true, tlsAllowInvalidCertificates: true })
//   .then(() => {
//     console.log('Connected to the database');
//   })
//   .catch((error) => {
//     console.error('Cannot be connected', error);
//   });

module.exports = {
  url: process.env.MONGODB_URI,
};


