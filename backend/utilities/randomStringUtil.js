function getRandomUtil(string) {
    // I want to use the passed string to generate a random string of characters of length 20.
    let randomString = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < 20; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomString;
}

module.exprts = getRandomUtil;