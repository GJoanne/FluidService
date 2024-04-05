
-- --------------------------------------------------------

--
-- Structure de la table `restaurant`
--

CREATE TABLE `restaurant` (
  `Restaurant_ID` int(11) NOT NULL,
  `Siret` bigint(20) NOT NULL,
  `Adresse` varchar(200) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Site_web` varchar(100) NOT NULL,
  `Nom` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Contenu de la table `restaurant`
--

INSERT INTO `restaurant` (`Restaurant_ID`, `Siret`, `Adresse`, `Email`, `Site_web`, `Nom`) VALUES
(1, 294501674839203, 'Opéra National de Bordeaux - Grand-Théâtre, 2 Pl. de la Comédie, 33000 Bordeaux', 'Atable@gmail.com', 'Atable.fr', 'Atable'),
(4, 12345689024, 'FEZZZA', 'zzza@gmail.com', 'ENCS.fr', 'Mustang');
