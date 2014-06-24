-- phpMyAdmin SQL Dump
-- version 4.1.8
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Mar 17, 2014 at 02:26 AM
-- Server version: 5.5.34
-- PHP Version: 5.5.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `angular`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_produtos`
--

CREATE TABLE `tb_produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tb_produtos_nome` varchar(45) DEFAULT NULL,
  `tb_produtos_preco` decimal(10,2) DEFAULT NULL,
  `tb_produtos_data` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=188 ;

--
-- Dumping data for table `tb_produtos`
--

INSERT INTO `tb_produtos` (`id`, `tb_produtos_nome`, `tb_produtos_preco`, `tb_produtos_data`) VALUES
(156, 'Monitor', 234.00, '1394497813117'),
(158, 'Placa de video', 234.00, '1394498399276'),
(166, 'Monitor 20', 45.00, '1394681962936'),
(167, 'Televisao 42 LG', 1260.00, '1394682003830'),
(168, 'Processador Intel i5', 200.00, '1394682025378'),
(169, 'Playstation 4', 10000.00, '1394682076349'),
(170, 'Playstation 3', 900.00, '1394682185980'),
(171, 'Xbox One', 2500.00, '1394682232903'),
(172, 'Xbox 360', 500.00, '1394682294160'),
(173, 'Placa de som 5.1', 300.00, '1394682356160'),
(174, 'Macbook pro', 5000.00, '1394682402964'),
(175, 'Imac', 10000.00, '1394682427125'),
(176, 'Teste', 234.00, '1394682510331'),
(178, 'Macbook pro 27', 15000.00, '1394682720825'),
(179, 'Placa de Video Radeon', 2000.00, '1394683216960'),
(182, 'Fone', 234.00, '1394683562363'),
(183, 'Teste de cadastro', 234.00, '1394683775048'),
(184, 'Monitor 45', 2400.00, '1394684205449'),
(185, 'Monitor 29', 233.00, '1394684688416'),
(186, 'Mouse', 234.00, '1394729648420'),
(187, 'Imac 27', 4000.00, '1394729682969');
