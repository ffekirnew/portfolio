const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registerUser = async (userData, admin) => {
    try {
        // Create a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        // Create a new user
        const user = new User({
            username: userData.username,
            salt: salt,
            email: userData.email,
            password: hashedPassword,
            role: (admin ? 'admin' : 'user')
        });

        // Save the user
        return await user.save();
    } catch (error) {
        throw new Error(error);
    }
}

exports.loginUser = async (username, password) => {
    try {
        const user = await User.find({ username: username });
        if (user.length === 0) {
            throw new Error('User does not exist');
        }

        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, user[0].salt);

        // Check if the hashed password matches the one in the database
        if (hashedPassword !== user[0].password) {
            throw new Error('Invalid password');
        }

        // Create a JWT token
        const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return token;
    } catch (error) {
        throw new Error(error);
    }
}
