require("dotenv").config({path: './.env'});
require("./config/dbConfig");

// Main Imports
const app = require("express")();
const cors = require("cors");
const bodyParser = require('body-parser');
const serverPort = Number(process.env.SERVER_PORT);
const errorHandler = require("./middlewares/errorMiddleware");

// Routes Imports
const authRoute = require("./routes/authRoute");
const usersRoute = require("./routes/usersRoute");
const blogsRoute = require("./routes/blogsRoute");
const reportsRoute = require("./routes/reportsRoute");
const educationsRoute = require("./routes/educationsRoute");
const experiencesRoute = require("./routes/experiencesRoute");
const projectsRoute = require("./routes/projectsRoute");
const socialLinksRoute = require("./routes/socialLinksRoute");

// Configs
app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());

// Middlewares
app.use(errorHandler);

// Routes
app.use('/auth', authRoute);
app.use('/user', usersRoute);
app.use('/blogs', blogsRoute);
app.use('/reports', reportsRoute);
app.use('/educations', educationsRoute);
app.use('/experiences', experiencesRoute);
app.use('/projects', projectsRoute);
app.use('/social-links', socialLinksRoute);

app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}.`);
});
