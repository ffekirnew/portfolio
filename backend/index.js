require("dotenv").config({path: './.env'});
require("./config/dbConfig");

// Main Imports
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require('body-parser');
const serverPort = Number(process.env.SERVER_PORT);
const errorHandler = require("./middlewares/errorMiddleware");
const fileUpload = require('express-fileupload');

// Routes Imports
const authRoute = require("./routes/authRoute");
const usersRoute = require("./routes/usersRoute");
const blogsRoute = require("./routes/blogsRoute");
const reportsRoute = require("./routes/reportsRoute");
const educationsRoute = require("./routes/educationsRoute");
const experiencesRoute = require("./routes/experiencesRoute");
const projectsRoute = require("./routes/projectsRoute");

// Configs
app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());

// Middlewares
app.use(errorHandler);
app.use(fileUpload());


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
const apiPrefix = '/api/v1';
app.use(`${apiPrefix}/auth`, authRoute);
app.use(`${apiPrefix}/user`, usersRoute);
app.use(`${apiPrefix}/blogs`, blogsRoute);
app.use(`${apiPrefix}/reports`, reportsRoute);
app.use(`${apiPrefix}/educations`, educationsRoute);
app.use(`${apiPrefix}/experiences`, experiencesRoute);
app.use(`${apiPrefix}/projects`, projectsRoute);

app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}.`);
});
