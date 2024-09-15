const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const faqRoutes = require('./routes/faq');
dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB...", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use('/api/faqs',faqRoutes);