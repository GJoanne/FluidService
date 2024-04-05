
-- --------------------------------------------------------

--
-- Structure de la table `table_restaurant`
--

CREATE TABLE `table_restaurant` (
  `Numero` int(100) NOT NULL,
  `Etat` varchar(10000) NOT NULL,
  `Direction` varchar(1000) NOT NULL,
  `x` int(100) NOT NULL,
  `y` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Contenu de la table `table_restaurant`
--

INSERT INTO `table_restaurant` (`Numero`, `Etat`, `Direction`, `x`, `y`) VALUES
(1, 'Reservee', 'west', 0, 0),
(2, 'Libre', 'east', 1, 0),
(3, 'Entree', 'south', 3, 0),
(4, 'Entree', 'north', 3, 1);
