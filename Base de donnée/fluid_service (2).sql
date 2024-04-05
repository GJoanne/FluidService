-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 05 Avril 2024 à 06:41
-- Version du serveur :  11.4.0-MariaDB
-- Version de PHP :  5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `fluid_service`
--
CREATE DATABASE IF NOT EXISTS `fluid_service` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `fluid_service`;

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

--
-- Index pour les tables exportées
--

--
-- Index pour la table `employe`
--
ALTER TABLE `employe`
  ADD PRIMARY KEY (`Employe_ID`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`Reservation_ID`),
  ADD KEY `id_table` (`Numero_table`);

--
-- Index pour la table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`Restaurant_ID`);

--
-- Index pour la table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`Service_ID`),
  ADD UNIQUE KEY `id_restaurant` (`id_restaurant`) USING BTREE;

--
-- Index pour la table `table_restaurant`
--
ALTER TABLE `table_restaurant`
  ADD PRIMARY KEY (`Numero`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `employe`
--
ALTER TABLE `employe`
  MODIFY `Employe_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `Reservation_ID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `Restaurant_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `service`
--
ALTER TABLE `service`
  MODIFY `Service_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`Numero_table`) REFERENCES `table_restaurant` (`Numero`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
