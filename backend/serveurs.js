const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Route API
app.post("/api/contact", (req, res) => {
    const { nom, email, message } = req.body;

    console.log("Données reçues :", nom, email, message);

    // Ici tu vas enregistrer dans la base de données

    res.json({ success: true, message: "Données reçues avec succès" });
});

app.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});