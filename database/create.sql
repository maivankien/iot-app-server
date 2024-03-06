-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: maivankien
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `devices`
--

DROP TABLE IF EXISTS `devices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `devices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `state` int DEFAULT '0',
  `icon` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `pin` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devices`
--

LOCK TABLES `devices` WRITE;
/*!40000 ALTER TABLE `devices` DISABLE KEYS */;
INSERT INTO `devices` VALUES (1,1,'FaLightbulb','Đèn phòng khách','2024-01-03 08:29:39','2024-03-06 15:17:50',16),(2,0,'FaLightbulb','Đèn phòng bếp','2024-01-04 15:28:14','2024-02-29 13:37:26',5),(3,1,'FaLightbulb','Đèn phòng ngủ','2024-01-07 11:44:39','2024-02-29 13:45:00',4),(4,0,'FaFan','Quạt','2024-01-10 08:27:29','2024-02-29 13:37:45',2);
/*!40000 ALTER TABLE `devices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `energy_usage_daily`
--

DROP TABLE IF EXISTS `energy_usage_daily`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `energy_usage_daily` (
  `id` int NOT NULL AUTO_INCREMENT,
  `energy_consumed` float NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_date` (`date`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `energy_usage_daily`
--

LOCK TABLES `energy_usage_daily` WRITE;
/*!40000 ALTER TABLE `energy_usage_daily` DISABLE KEYS */;
INSERT INTO `energy_usage_daily` VALUES (1,223,'2024-01-18'),(2,111,'2024-01-16'),(3,1111,'2023-01-16'),(4,313,'2024-01-20'),(5,656,'2024-01-23'),(6,1121,'2024-01-07'),(7,0,'2024-01-27'),(9,44,'2024-01-24'),(12,1000,'2024-03-01'),(21,1210,'2024-02-01');
/*!40000 ALTER TABLE `energy_usage_daily` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `energy_usage_monthly`
--

DROP TABLE IF EXISTS `energy_usage_monthly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `energy_usage_monthly` (
  `id` int NOT NULL AUTO_INCREMENT,
  `energy_consumed` float NOT NULL,
  `month` tinyint NOT NULL,
  `year` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `month_year` (`year`,`month`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `energy_usage_monthly`
--

LOCK TABLES `energy_usage_monthly` WRITE;
/*!40000 ALTER TABLE `energy_usage_monthly` DISABLE KEYS */;
INSERT INTO `energy_usage_monthly` VALUES (1,3670,1,2024,'2024-01-26 08:31:38'),(2,13000,2,2024,'2024-01-26 08:39:21'),(3,34000,1,2023,'2024-01-28 00:38:07'),(4,50000,3,2021,'2024-03-06 07:55:39'),(5,50000,3,2024,'2024-03-06 07:55:39');
/*!40000 ALTER TABLE `energy_usage_monthly` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule_jobs`
--

DROP TABLE IF EXISTS `schedule_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule_jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `device_id` int NOT NULL,
  `action` tinyint NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `time` bigint NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule_jobs`
--

LOCK TABLES `schedule_jobs` WRITE;
/*!40000 ALTER TABLE `schedule_jobs` DISABLE KEYS */;
INSERT INTO `schedule_jobs` VALUES (1,3,0,0,1706883928469,'2024-02-02 14:24:30','2024-02-02 14:34:05',NULL),(2,3,0,0,1706883960469,'2024-02-02 14:25:59','2024-02-02 14:34:05',NULL),(3,3,1,0,1706884080469,'2024-02-02 14:27:58','2024-02-02 14:35:01',NULL),(4,3,0,0,1706884340469,'2024-02-02 14:32:07','2024-02-02 14:32:20',NULL),(5,3,0,1,1706884340469,'2024-02-02 14:58:20','2024-02-02 14:58:20','2024-02-02 14:58:20'),(6,2,0,0,1706886020469,'2024-02-02 14:58:33','2024-02-17 05:52:00',NULL),(7,2,1,0,1706886080469,'2024-02-02 15:00:41','2024-02-17 15:35:57',NULL),(8,3,1,0,1706886140469,'2024-02-02 15:01:35','2024-02-17 15:35:57',NULL),(9,3,0,0,1706887220469,'2024-02-02 15:12:14','2024-02-17 15:35:57',NULL),(10,1,1,0,1708182300970,'2024-02-17 15:02:10','2024-02-17 15:05:00',NULL),(11,1,1,0,1708182600306,'2024-02-17 15:03:29','2024-02-17 15:10:00',NULL),(12,1,1,0,1708182600178,'2024-02-17 15:06:49','2024-02-17 15:10:00',NULL),(13,1,1,0,1708182600178,'2024-02-17 15:07:29','2024-02-17 15:10:00',NULL),(14,1,0,0,1708182600178,'2024-02-17 15:07:33','2024-02-17 15:10:00',NULL),(15,1,1,0,1708182600193,'2024-02-17 15:09:18','2024-02-17 15:10:00',NULL),(16,1,1,0,1708182600193,'2024-02-17 15:09:23','2024-02-17 15:10:00',NULL),(17,1,0,0,1708182600193,'2024-02-17 15:09:52','2024-02-17 15:10:00',NULL),(18,1,1,1,1708269300000,'2024-02-17 15:10:47','2024-02-17 15:14:23','2024-02-17 15:14:23'),(19,1,1,1,1708182900363,'2024-02-17 15:14:33','2024-02-17 15:14:36','2024-02-17 15:14:36'),(20,1,1,1,1708269000000,'2024-02-17 15:15:58','2024-02-18 02:20:32','2024-02-18 02:20:32'),(21,1,1,1,1708269000000,'2024-02-17 15:16:04','2024-02-18 02:18:19','2024-02-18 02:18:19'),(22,1,1,1,1708269000000,'2024-02-17 15:16:04','2024-02-18 02:18:16','2024-02-18 02:18:16'),(23,1,1,1,1708269000000,'2024-02-17 15:16:05','2024-02-18 02:18:16','2024-02-18 02:18:16'),(24,1,1,1,1708269000000,'2024-02-17 15:16:05','2024-02-18 02:18:16','2024-02-18 02:18:16'),(25,1,0,0,1708183500452,'2024-02-17 15:18:50','2024-02-17 15:25:00',NULL),(26,1,0,0,1708183500452,'2024-02-17 15:18:52','2024-02-17 15:25:00',NULL),(27,1,0,0,1708183500452,'2024-02-17 15:18:52','2024-02-17 15:25:00',NULL),(28,1,0,0,1708183500452,'2024-02-17 15:18:54','2024-02-17 15:25:00',NULL),(29,1,0,0,1708183500452,'2024-02-17 15:18:56','2024-02-17 15:25:00',NULL),(30,1,0,0,1708189200000,'2024-02-17 15:27:42','2024-02-18 02:17:48',NULL),(31,1,0,0,1708189200000,'2024-02-17 15:27:42','2024-02-18 02:17:48',NULL),(32,1,1,0,1708222800401,'2024-02-18 02:18:39','2024-02-18 02:20:00',NULL),(33,1,0,0,1708222805000,'2024-02-18 02:18:50','2024-02-18 02:20:05',NULL),(34,4,1,0,1708222810000,'2024-02-18 02:19:40','2024-02-18 02:20:10',NULL),(35,2,0,0,1708223100000,'2024-02-18 02:22:39','2024-02-18 02:25:00',NULL),(36,2,0,0,1708223100000,'2024-02-18 02:22:40','2024-02-18 02:25:00',NULL),(37,2,0,0,1708223100000,'2024-02-18 02:22:40','2024-02-18 02:25:00',NULL),(38,2,0,0,1708223100000,'2024-02-18 02:22:41','2024-02-18 02:25:00',NULL),(39,2,0,0,1708223100000,'2024-02-18 02:22:41','2024-02-18 02:25:00',NULL),(40,2,1,0,1708223100000,'2024-02-18 02:22:53','2024-02-18 02:25:00',NULL),(41,2,1,0,1708223100000,'2024-02-18 02:22:54','2024-02-18 02:25:00',NULL),(42,2,1,0,1708223100000,'2024-02-18 02:22:54','2024-02-18 02:25:00',NULL),(43,2,1,0,1708223100000,'2024-02-18 02:22:55','2024-02-18 02:25:00',NULL),(44,2,1,0,1708223100000,'2024-02-18 02:22:57','2024-02-18 02:25:00',NULL),(45,1,1,1,1708828200000,'2024-02-18 02:26:29','2024-02-24 12:05:50','2024-02-24 12:05:50'),(46,1,1,1,1708828200000,'2024-02-18 02:26:29','2024-02-24 12:05:50','2024-02-24 12:05:50'),(47,1,1,1,1708828200000,'2024-02-18 02:26:29','2024-02-24 12:05:49','2024-02-24 12:05:49'),(48,1,1,1,1708828200000,'2024-02-18 02:26:29','2024-02-24 12:05:49','2024-02-24 12:05:49'),(49,1,1,1,1708828200000,'2024-02-18 02:26:29','2024-02-24 12:05:48','2024-02-24 12:05:48'),(50,1,0,1,1708828200000,'2024-02-18 02:26:33','2024-02-24 12:05:48','2024-02-24 12:05:48'),(51,1,0,1,1708828200000,'2024-02-18 02:26:33','2024-02-24 12:05:47','2024-02-24 12:05:47'),(52,1,0,1,1708828200000,'2024-02-18 02:26:37','2024-02-24 12:05:47','2024-02-24 12:05:47'),(53,1,0,1,1708828200000,'2024-02-18 02:26:38','2024-02-18 14:29:30','2024-02-18 14:29:30'),(54,1,0,1,1708828200000,'2024-02-18 02:26:39','2024-02-18 02:27:08','2024-02-18 02:27:08'),(55,1,0,1,1708828500000,'2024-02-18 02:31:57','2024-02-18 02:35:33','2024-02-18 02:35:33'),(56,1,0,1,1708707600000,'2024-02-18 02:35:37','2024-02-18 14:29:30','2024-02-18 14:29:30'),(57,2,1,0,1708266660000,'2024-02-18 14:30:37','2024-02-18 14:31:00',NULL),(58,2,0,0,1708266665000,'2024-02-18 14:30:43','2024-02-18 14:31:05',NULL),(59,3,0,0,1708266666000,'2024-02-18 14:30:59','2024-02-18 14:31:06',NULL),(60,3,0,0,1708266696000,'2024-02-18 14:31:21','2024-02-18 14:31:36',NULL),(61,2,0,0,1708267200184,'2024-02-18 14:33:10','2024-02-18 14:40:00',NULL),(62,3,1,0,1708266900000,'2024-02-18 14:33:23','2024-02-18 14:35:00',NULL),(63,2,1,0,1708269660000,'2024-02-18 15:20:28','2024-02-18 15:21:00',NULL),(64,3,1,0,1708269661000,'2024-02-18 15:20:39','2024-02-18 15:21:01',NULL),(65,3,1,0,1708270200567,'2024-02-18 15:29:19','2024-02-18 15:30:00',NULL),(66,3,0,0,1708270202000,'2024-02-18 15:29:27','2024-02-18 15:30:02',NULL),(67,3,1,0,1708775400000,'2024-02-24 11:48:43','2024-02-24 11:50:00',NULL),(68,3,0,1,1708775400402,'2024-02-24 11:48:49','2024-02-24 11:48:52','2024-02-24 11:48:52'),(69,3,1,0,1708775405000,'2024-02-24 11:49:02','2024-02-24 11:50:05',NULL),(70,1,0,0,1708776600877,'2024-02-24 12:05:57','2024-02-24 12:10:00',NULL),(71,2,0,0,1708776600083,'2024-02-24 12:06:07','2024-02-24 12:10:00',NULL),(72,3,0,0,1708776600992,'2024-02-24 12:06:14','2024-02-24 12:10:01',NULL),(73,4,0,0,1708776600657,'2024-02-24 12:06:20','2024-02-24 12:10:00',NULL),(74,3,1,0,1709212800303,'2024-02-29 06:19:55','2024-02-29 06:19:59',NULL),(75,3,1,0,1709212860000,'2024-02-29 13:20:15','2024-02-29 13:21:00',NULL),(76,3,0,0,1709212862000,'2024-02-29 13:20:28','2024-02-29 13:21:02',NULL),(77,3,1,0,1709212920000,'2024-02-29 13:21:21','2024-02-29 13:22:00',NULL),(78,2,0,0,1709212920000,'2024-02-29 13:21:32','2024-02-29 13:22:00',NULL),(79,4,1,0,1709212980000,'2024-02-29 13:22:22','2024-02-29 13:23:00',NULL),(80,3,0,0,1709212980000,'2024-02-29 13:22:46','2024-02-29 13:23:00',NULL),(81,3,1,0,1709213330000,'2024-02-29 13:28:46','2024-02-29 13:28:50',NULL),(82,3,0,0,1709213400573,'2024-02-29 13:29:04','2024-02-29 13:30:00',NULL),(83,3,1,0,1709213430000,'2024-02-29 13:30:26','2024-02-29 13:30:30',NULL),(84,3,0,0,1709213460000,'2024-02-29 13:30:43','2024-02-29 13:31:00',NULL),(85,3,0,0,1709214000095,'2024-02-29 13:39:03','2024-02-29 13:40:00',NULL),(86,3,1,0,1709214005000,'2024-02-29 13:39:14','2024-02-29 13:40:05',NULL),(87,3,1,1,1709214600114,'2024-02-29 13:40:54','2024-02-29 13:41:10','2024-02-29 13:41:10'),(88,3,0,1,1709215500998,'2024-02-29 13:40:58','2024-02-29 13:41:09','2024-02-29 13:41:09'),(89,3,1,1,1709214120000,'2024-02-29 13:41:21','2024-02-29 13:41:40','2024-02-29 13:41:40'),(90,3,1,0,1709214125000,'2024-02-29 13:41:30','2024-02-29 13:42:05',NULL),(91,3,1,0,1709214300926,'2024-02-29 13:44:57','2024-02-29 13:45:02','2024-02-29 13:45:02');
/*!40000 ALTER TABLE `schedule_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `token` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_idx` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (17,'kien','$2b$10$7d1b4/rQzHw9PDgP8SieqeGDpXJlVpFHfWxXnzSUANupj1VfTNuRS','2023-08-27 09:21:19','2023-08-27 09:21:19','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImlhdCI6MTY5MzEyODA3OX0.G3HMJ7NPJCM4BtFJn318xjZbzO4hrigquA_yhR0Trbk'),(18,'test','$2b$10$bxXf4j2YicUKLNXc2/mS.e7j2gMQPxgEXt.HnXcDug/uq.Hu0rtFK','2023-12-04 15:03:07','2023-12-04 15:03:07','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImlhdCI6MTcwMTcwMjE4N30.8_wuYVRqaQeOG0Z33C0gsOuVaNzDRUKIeLVW5CuUTeQ'),(19,'2','$2b$10$nEFUq8SPewm/jjm0QbC0qev8tbOoOGTGFA4WErFmt.fce.ysTTu3m','2023-12-09 09:05:55','2023-12-09 09:05:55','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTcwMjExMjc1NX0.vxH-N_Vwe_g5d5-ADvHil45T7hj0z9ige43W5nAU4QA');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-06 22:21:45
