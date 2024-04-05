
-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `Reservation_ID` int(100) NOT NULL,
  `Date` date NOT NULL,
  `Heure` varchar(5) NOT NULL,
  `Nom` varchar(100) NOT NULL,
  `Nb_couverts` int(50) NOT NULL,
  `Numero_table` int(50) NOT NULL,
  `Etat_resa` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Contenu de la table `reservation`
--

INSERT INTO `reservation` (`Reservation_ID`, `Date`, `Heure`, `Nom`, `Nb_couverts`, `Numero_table`, `Etat_resa`) VALUES
(6, '2024-02-14', '15:30', 'Roger', 1, 1, 'Annulee'),
(7, '2024-02-14', '15h30', 'Roger', 1, 2, 'Annulee'),
(8, '2024-03-20', '17h00', 'Guerrad', 1, 3, 'Arrivee'),
(9, '2024-03-20', '17h00', 'Guerrad', 1, 4, 'Arrivee'),
(10, '2024-04-05', '12h00', 'TinTin', 1, 1, 'Prevu');
