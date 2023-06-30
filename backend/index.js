require("dotenv").config({path: './.env'});
require("./config/dbConfig");

// Main Imports
const app = require("express")();
const cors = require("cors");
const bodyParser = require('body-parser');
const serverPort = Number(process.env.SERVER_PORT);
const errorHandler = require("./middlewares/errorMiddleware");

// Routes Imports
const authRoutes = require("./routes/authRoutes");
const usersRoutes = require("./routes/usersRoutes");
const blogsRoutes = require("./routes/blogsRoutes");
const reportsRoutes = require("./routes/reportsRoutes");

// Configs
app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());

// Middlewares
app.use(errorHandler);

// Routes
app.use('/auth', authRoutes);
app.use('/user', usersRoutes);
app.use('/blogs', blogsRoutes);
app.use('/reports', reportsRoutes);

app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}.`);
});
