const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://gretchesketch:EkpVPbhhvoCYfQNP@cluster0.zuqwz.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
