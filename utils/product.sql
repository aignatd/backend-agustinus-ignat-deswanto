/*
 Navicat Premium Data Transfer

 Source Server         : Local Mysql
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : ecommerce

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 17/07/2024 14:24:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_price` decimal(10, 0) NOT NULL DEFAULT 0,
  `product_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `product_category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `product_description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `created_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updated_at` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`product_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, 10000, 'Kaos', 'Busana', 'Kaos warna putih', '2024-07-16 20:52:37', '2024-07-16 23:09:53');
INSERT INTO `product` VALUES (4, 11000, 'Celana', 'Busana', 'Celana pendek bahan jeans', '2024-07-16 22:10:07', '2024-07-16 23:10:19');
INSERT INTO `product` VALUES (5, 12000, 'Topi', 'Atasan', 'Topi bahan dasar', '2024-07-16 22:46:42', '2024-07-16 23:10:21');
INSERT INTO `product` VALUES (10, 13000, 'Kaos Kaki', 'Busana', 'Bahan dasar katun', '2024-07-16 23:20:37', '2024-07-16 23:20:37');
INSERT INTO `product` VALUES (11, 19000, 'Jeans', 'Busana', 'Celana panjang bahan jeans', '2024-07-16 23:21:27', '2024-07-16 23:21:27');

SET FOREIGN_KEY_CHECKS = 1;
