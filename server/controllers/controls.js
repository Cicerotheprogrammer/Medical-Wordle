import { __dirname } from "../app.js";

export const getHomePage = (req, res) => {
    //Put the links for a specific route for each class here
    res.sendFile(`${__dirname}/index/index.html`);
}

export const getHealth = (req, res) => {
    //Send the file for the correct wordlist
    res.sendFile(`${__dirname}/index/health.html`);
}

export const getCivics = (req, res) => {
    //Send the file for the correct wordlist
    res.sendFile(`${__dirname}/index/civics.html`);
}