export const getHomePage = (req, res) => {
    //Put the links for a specific route for each class here
    res.sendFile();
}

export const getHealth = (req, res) => {
    //Send the file for the correct wordlist
    res.sendFile("C:/Users/catsr/Documents/Computer Science/Medical-Wordle/server/index/health.html");
}

export const getCivics = (req, res) => {
    //Send the file for the correct wordlist
    res.sendFile("C:/Users/catsr/Documents/Computer Science/Medical-Wordle/server/index/civics.html");
}