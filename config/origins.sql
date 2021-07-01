-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-07-2021 a las 22:06:21
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `origins`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accionesusuarios`
--

CREATE TABLE `accionesusuarios` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `simbolo` varchar(200) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `moneda` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `accionesusuarios`
--

INSERT INTO `accionesusuarios` (`id`, `id_usuario`, `simbolo`, `nombre`, `moneda`) VALUES
(115, 2, 'HUD', 'Hudson Ltd', 'USD'),
(117, 1, 'SDRL', 'Seadrill Ltd', 'USD'),
(118, 1, 'D', 'Dominion Energy Inc', 'USD'),
(119, 2, 'TEF', 'Telefonica SA', 'USD'),
(120, 2, 'KO', 'Coca-Cola Co-The', 'USD');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `clave` varchar(200) NOT NULL,
  `token` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `usuario`, `clave`, `token`) VALUES
(1, 'Test1', 'test1', '123456', ''),
(2, 'Origin Software', 'origin', '123456', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjI1MTY2NDE2LCJleHAiOjE2MjUxNjY1MDJ9.ZpcuZsmTYTOzJSXnfcAeLvXqhcnTtdAduQn_EzktQS0');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accionesusuarios`
--
ALTER TABLE `accionesusuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accionesusuarios`
--
ALTER TABLE `accionesusuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
