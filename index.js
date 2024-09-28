const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// GET /hello endpoint
app.get('/hello', (req, res) => {
    res.send("Hello Express JS");
});

// GET /user endpoint with query parameters
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || "Pritesh";
    const lastname = req.query.lastname || "Patel";
    res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname endpoint with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
