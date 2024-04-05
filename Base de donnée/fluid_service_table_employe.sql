
-- --------------------------------------------------------

--
-- Structure de la table `employe`
--

CREATE TABLE `employe` (
  `Employe_ID` int(11) NOT NULL,
  `Nom` varchar(100) NOT NULL,
  `Prenom` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Telephone` int(10) NOT NULL,
  `Adresse` varchar(200) NOT NULL,
  `MotDePasse` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Contenu de la table `employe`
--

INSERT INTO `employe` (`Employe_ID`, `Nom`, `Prenom`, `Email`, `Telephone`, `Adresse`, `MotDePasse`) VALUES
(8, 'GANGAPAL', 'Joanne', 'jgangapal@ensc.fr', 659678210, 'azertyuiop', '$2b$10$LE422V6kX58o5.sMRoP5ru1..deaY/JLmXOO4yo5w3TEIHJSKY8L6');
