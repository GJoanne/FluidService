const express = require("express")
const mysql =require ("mysql2")
const cors = require ("cors")
const bodyParser=require("body-parser")
const bcrypt = require ("bcrypt")

const app=express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"fluid_service"
})

// Ajout d'un restaurant
app.post('/InscriptionInexistant', (req, res) => {
    const { nom, siret, adresse, email, siteWeb } = req.body;
    if (!nom || !siret || !adresse || !email) {
        return res.status(400).json({ message: "Tous les champs sont obligatoires." });
    }
    db.query(
        "INSERT INTO restaurant (nom, siret, adresse, email, site_web) VALUES (?, ?, ?, ?, ?)",
        [nom, siret, adresse, email, siteWeb],
        (err, result) => {
            if (err) {
                console.error("Erreur lors de l'insertion des données dans la base de données :", err);
                return res.status(500).json({ message: "Une erreur s'est produite lors de l'inscription de l'entreprise." });
            }
            console.log("Entreprise inscrite avec succès !");
            res.status(200).json({ message: "Entreprise inscrite avec succès !" });
        }
    );
});

// Ajout d'un employe
app.post('/InscriptionExistant', async (req, res) => {
    const { nom, prenom, email, tel, adresse, motDePasse, motDePasse2 } = req.body;

    if (!nom || !prenom || !email || !tel || !adresse || !motDePasse || !motDePasse2) {
        return res.status(400).json({ message: "Tous les champs sont obligatoires." });
    }

    if(motDePasse != motDePasse2){
        return res.status(400).json({ message: "Veuillez ssaisir les mêmes mots de passes" });
    }

    try {
        
        const hashedPassword = await bcrypt.hash(motDePasse, 10);

    
        db.query(
            "INSERT INTO employe (Nom, Prenom, Email, Telephone, Adresse, MotDePasse) VALUES (?, ?, ?, ?, ?, ?)",
            [nom, prenom, email, tel, adresse, hashedPassword],
            (err, result) => {
                if (err) {
                    console.error("Erreur lors de l'insertion des données dans la base de données :", err);
                    return res.status(500).json({ message: "Une erreur s'est produite lors de l'inscription de l'employé." });
                }
                console.log("Employé inscrit avec succès !");
                res.status(200).json({ message: "Employé inscrit avec succès !" });
            }
        );
    } catch (error) {
        console.error("Erreur lors du hachage du mot de passe :", error);
        return res.status(500).json({ message: "Une erreur s'est produite lors du hachage du mot de passe." });
    }
});


//connexion employe
app.post("/Connexion", async (req, res) => {
    const { identifiant, motDePasse } = req.body;
    
    try {
        const [rows, fields] = await db.promise().execute("SELECT * FROM employe WHERE CONCAT(LEFT(prenom, 1), nom) = ?", [identifiant]);

       if (!rows || rows.length === 0) {
    return res.status(401).json({ message: "Identifiant incorrect." });
}

        const employe = rows[0];
        const passwordMatch = await bcrypt.compare(motDePasse, employe.MotDePasse);
        


        if (!passwordMatch) {
            return res.status(401).json({ message: "Mot de passe incorrect." });
        }

        res.status(200).json({ message: "Authentification réussie.", employe: { id: employe.employe_id, nom: employe.nom, prenom: employe.prenom } });
    } catch (error) {
        console.error("Erreur lors de l'authentification :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de l'authentification." });
    }
});

//Occupation du restaurant
app.get("/Occupation", (req, res) => {
  db.query("SELECT COUNT(*) AS total_tables FROM table_restaurant WHERE Etat = 'Libre'", (err, tablesCount) => {
    if (err) {
      console.error("Erreur lors de la récupération du nombre total de tables :", err);
      return res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du nombre total de tables." });
    }

    db.query("SELECT COUNT(*) AS tables_reserves FROM table_restaurant WHERE Etat = 'Reservee'", (err, reservedTablesCount) => {
      if (err) {
        console.error("Erreur lors de la récupération du nombre de tables réservées :", err);
        return res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du nombre de tables réservées." });
      }

      res.json({
        tables_reserves: reservedTablesCount[0].tables_reserves,
        tables_disponibles: tablesCount[0].total_tables
      });
    });
  });
});

//Reservations du restaurant
app.get("/Reservation", (req, res) => {

  db.query("SELECT * FROM Reservation", (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des réservations :", err);
      return res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des réservations." });
    }

    res.json(results);
  });
});

//Ne  fonctionne pas

// // Ajout d'une table
// app.post('/Salle', (req, res) => {
//     const { id, chairDirection, x, y, equipments } = req.body;
//     if (!id || !chairDirection || !x || !y || !equipments) {
//         return res.status(400).json({ message: "Tous les champs sont obligatoires." });
//     }
//     db.query(
//         "INSERT INTO table_restaurant (Numero, Etat, Direction, x, y) VALUES (?, ?, ?, ?, ?)",
//         [id, JSON.stringify(equipments), chairDirection, x, y],
//         (err, result) => {
//             if (err) {
//                 console.error("Erreur lors de l'insertion des données dans la base de données :", err);
//                 return res.status(500).json({ message: "Une erreur s'est produite lors de l'ajout de la table." });
//             }
//             console.log("Table ajoutée avec succès !");
//             res.status(200).json({ message: "Table ajoutée avec succès !" });
//         }
//     );
   
// });

// // Suppression d'une table
// app.delete('/Salle/:id', (req, res) => {
//     const tableId = req.params.id;
//     db.query(
//         "DELETE FROM table_restaurant WHERE id = ?",
//         [tableId],
//         (err, result) => {
//             if (err) {
//                 console.error("Erreur lors de la suppression des données dans la base de données :", err);
//                 return res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de la table." });
//             }
//             console.log("Table supprimée avec succès !");
//             res.status(200).json({ message: "Table supprimée avec succès !" });
//         }
//     );
// });



app.listen(8000)
