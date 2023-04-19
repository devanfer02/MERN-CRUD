-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Apr 2023 pada 04.04
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crudmern1`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nim` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `major` varchar(255) DEFAULT NULL,
  `university` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `students`
--

INSERT INTO `students` (`id`, `name`, `nim`, `email`, `major`, `university`, `createdAt`, `updatedAt`) VALUES
('1', 'Muhammad Hannan Abrar', '225150600111023', 'muhamm@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('2', 'Zakiyyah Asma Amanyna Wardani', '225150600111024', 'zakiyy@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('3', 'Auralia Laksa Aji ', '225150600111025', 'aurali@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('4', 'Rivaldo Sidiq Pradana', '225150600111026', 'rivald@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('5', 'Fathiya Aulia Khoirunnisa ', '225150600111027', 'fathiy@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('6', 'Sarah Safira Millati', '225150600111028', 'sarahs@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('7', 'Ardi Vivando Perangin Angin', '225150600111029', 'ardivi@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('8', 'Putri Yudha Solikhati Sylvia ', '225150600111030', 'putriy@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('9', 'Devan Ferrel', '225150600111031', 'devanf@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('10', 'Elisabet Marisa Manalu', '225150600111032', 'elisab@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('11', 'Selma Mutiari Andini', '225150600111033', 'selmam@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('12', 'Jeihan Shinta Maharani', '225150600111034', 'jeihan@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('13', 'Winanda Kusuma Wigyantara', '225150601111020', 'winand@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('14', 'Muhammad Usman', '225150601111021', 'muhamm@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('15', 'Yuvina Nurvitasari', '225150601111022', 'yuvina@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('16', 'Afif Al Dzaqwan', '225150601111023', 'afifal@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('17', 'Mustika Ningtias', '225150601111024', 'mustik@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('18', 'Theresia Surya Sabatini', '225150601111025', 'theres@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('19', 'Thariq Azam Firdaus', '225150601111026', 'thariq@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('20', 'Annida Rahma Nadhifa ', '225150601111027', 'annida@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('21', 'Ni Nyoman Dinda Permata Putri Bangse', '225150607111034', 'ninyom@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('22', 'Ni Luh Putu Ayu Amanda Oka Virna Nurata', '225150607111035', 'niluhp@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('23', 'Hamdalla Agil Putra Nasol', '225150607111037', 'hamdal@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('24', 'Naela Nabila Mumtaza ', '225150607111038', 'naelan@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('25', 'Rifqi Nabil Al Fath ', '225150607111039', 'rifqin@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('26', 'Rafly Achmad Barran', '225150607111040', 'raflya@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('27', 'Desindy Rizki Anindityas', '225150607111041', 'desind@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('28', 'Mauliddyah Evalyanti  ', '225150607111042', 'maulid@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('29', 'Alda Fahimah Apriliana ', '225150607111043', 'aldafa@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('30', 'Khonsa Jahro Nabila Putri Wijaya ', '225150607111044', 'khonsa@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('31', 'Fikri Is Ad Ibnu Wiyasa ', '225150607111046', 'fikrii@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('32', 'Olivia Jihan Fadella', '225150607111047', 'olivia@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('33', 'Ayu Chiento Suci', '225150607111048', 'ayuchi@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57'),
('34', 'Gurnita Salma Atmainun', '225150607111049', 'gurnit@gmail.com', 'Pendidikan Teknologi Informasi', 'Universitas Brawijaya', '2023-04-19 09:11:57', '2023-04-19 09:11:57');



--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
