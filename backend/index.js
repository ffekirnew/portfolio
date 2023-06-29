require("dotenv").config({path: './.env'});
require("./config/dbConfig");

// Main Imports
const app = require("express")();
const cors = require("cors");
const bodyParser = require('body-parser');
const PORT = Number(process.env.SERVER_PORT);

// Routes Imports
const blogsRoutes = require("./routes/blogsRoutes");

app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());

app.use('/blogs', blogsRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});