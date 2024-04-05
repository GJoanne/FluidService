
-- --------------------------------------------------------

--
-- Structure de la table `service`
--

CREATE TABLE `service` (
  `Service_ID` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Heure_debut` varchar(5) NOT NULL,
  `Nb_employe` int(50) NOT NULL,
  `Heure_fin` varchar(5) NOT NULL,
  `id_restaurant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Contenu de la table `service`
--

INSERT INTO `service` (`Service_ID`, `Date`, `Heure_debut`, `Nb_employe`, `Heure_fin`, `id_restaurant`) VALUES
(1, '2024-03-29', '12h00', 3, '19h00', 1);
