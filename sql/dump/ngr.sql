SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ngr`
--
CREATE DATABASE IF NOT EXISTS `ngr` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `ngr`;

-- --------------------------------------------------------

--
-- Table structure for table `developer`
--

CREATE TABLE `developer` (
  `id` tinyint(3) NOT NULL,
  `developer` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `developer`
--

INSERT INTO `developer` (`id`, `developer`) VALUES
(1, 'ADK'),
(2, 'Aicom'),
(3, 'Aiky'),
(4, 'Alpha Denshi'),
(5, 'Asatsu-DK'),
(6, 'Atlus'),
(7, 'BrezzaSoft'),
(8, 'Capcom'),
(9, 'Data East'),
(10, 'Eleven'),
(11, 'Envoga'),
(12, 'Eolith'),
(13, 'Hudson Soft'),
(14, 'SNK'),
(15, 'SNK Playmore'),
(16, 'Taito'),
(17, 'Visco');

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `id` tinyint(3) NOT NULL,
  `title` varchar(45) NOT NULL,
  `genre_id` tinyint(3) DEFAULT NULL,
  `developer_id` tinyint(3) DEFAULT NULL,
  `rating_id` tinyint(3) DEFAULT NULL,
  `year_id` tinyint(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`id`, `title`, `genre_id`, `developer_id`, `rating_id`, `year_id`) VALUES
(1, 'Baseball Stars 2', 15, 14, 7, 3);

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `id` tinyint(3) NOT NULL,
  `genre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`id`, `genre`) VALUES
(1, 'Action'),
(2, 'Action RPG'),
(3, 'Beat \'em up'),
(4, 'Board game'),
(5, 'Compilation'),
(6, 'Fighting'),
(7, 'Hack and slash'),
(8, 'Maze'),
(9, 'Platform'),
(10, 'Puzzle'),
(11, 'Quiz game'),
(12, 'Racing'),
(13, 'Run and gun'),
(14, 'Shoot \'em up'),
(15, 'Sports');

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` tinyint(3) NOT NULL,
  `rating` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rating`
--

INSERT INTO `rating` (`id`, `rating`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- --------------------------------------------------------

--
-- Table structure for table `release_year`
--

CREATE TABLE `release_year` (
  `id` tinyint(3) NOT NULL,
  `release_year` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `release_year`
--

INSERT INTO `release_year` (`id`, `release_year`) VALUES
(1, 1990),
(2, 1991),
(3, 1992),
(4, 1993),
(5, 1994),
(6, 1995),
(7, 1996),
(8, 1997),
(9, 1998),
(10, 1999),
(11, 2000),
(12, 2001),
(13, 2002),
(14, 2003),
(15, 2004);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `developer`
--
ALTER TABLE `developer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_game_genre` (`genre_id`),
  ADD KEY `fk_game_rating` (`rating_id`),
  ADD KEY `fk_game_release_year` (`year_id`),
  ADD KEY `fk_game_developer` (`developer_id`);

--
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `release_year`
--
ALTER TABLE `release_year`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `developer`
--
ALTER TABLE `developer`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `genre`
--
ALTER TABLE `genre`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `release_year`
--
ALTER TABLE `release_year`
  MODIFY `id` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `fk_game_developer` FOREIGN KEY (`developer_id`) REFERENCES `developer` (`id`),
  ADD CONSTRAINT `fk_game_genre` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`),
  ADD CONSTRAINT `fk_game_rating` FOREIGN KEY (`rating_id`) REFERENCES `rating` (`id`),
  ADD CONSTRAINT `fk_game_release_year` FOREIGN KEY (`year_id`) REFERENCES `release_year` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
