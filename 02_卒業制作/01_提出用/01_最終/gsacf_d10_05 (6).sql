-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- ホスト: localhost
-- 生成日時: 2022 年 4 月 30 日 16:41
-- サーバのバージョン： 10.4.21-MariaDB
-- PHP のバージョン: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `gsacf_d10_05`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `answer_table`
--

CREATE TABLE `answer_table` (
  `id` int(11) NOT NULL,
  `user_id` int(50) DEFAULT NULL,
  `ques_id` int(50) DEFAULT NULL,
  `username` varchar(128) COLLATE utf8mb4_bin DEFAULT NULL,
  `answer` blob DEFAULT NULL,
  `deleted_at` int(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- テーブルのデータのダンプ `answer_table`
--

INSERT INTO `answer_table` (`id`, `user_id`, `ques_id`, `username`, `answer`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 22, 1, '出口', 0x6161, 0, '2022-04-26 20:02:04', '2022-04-26 20:02:04'),
(2, 22, 1, '出口', 0x616161, 0, '2022-04-26 20:20:34', '2022-04-26 20:20:34'),
(3, 22, 1, '出口', 0x616161, 0, '2022-04-26 20:21:08', '2022-04-26 20:21:08'),
(4, 22, 1, '出口', 0x616161, 0, '2022-04-26 20:21:24', '2022-04-26 20:21:24'),
(5, 22, 1, '出口', 0x616161, 0, '2022-04-26 20:23:04', '2022-04-26 20:23:04'),
(6, 22, 1, '出口', 0x616161, 0, '2022-04-26 20:23:21', '2022-04-26 20:23:21'),
(7, 22, 1, '出口', 0x616161, 0, '2022-04-26 20:23:22', '2022-04-26 20:23:22'),
(8, 22, 1, '出口', 0x616161, 0, '2022-04-26 20:23:44', '2022-04-26 20:23:44'),
(9, 22, 1, '出口', 0x616161, 0, '2022-04-26 20:24:13', '2022-04-26 20:24:13'),
(10, 22, 1, '出口', 0x6161, 0, '2022-04-26 20:26:52', '2022-04-26 20:26:52'),
(11, 22, 1, '出口', 0x6161, 0, '2022-04-26 20:27:00', '2022-04-26 20:27:00');

-- --------------------------------------------------------

--
-- テーブルの構造 `comment_table`
--

CREATE TABLE `comment_table` (
  `user_id` int(50) DEFAULT NULL,
  `post_id` int(50) DEFAULT NULL,
  `username` varchar(128) COLLATE utf8mb4_bin DEFAULT NULL,
  `comment` blob DEFAULT NULL,
  `deleted_at` int(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- テーブルのデータのダンプ `comment_table`
--

INSERT INTO `comment_table` (`user_id`, `post_id`, `username`, `comment`, `deleted_at`, `created_at`, `updated_at`) VALUES
(22, 3, NULL, 0x6161, 0, '2022-04-02 22:27:34', '2022-04-02 22:27:34'),
(22, 3, NULL, 0xe381a8e381a6e38282e7b4a0e699b4e38289e38197e38184e381a7e38199e381ad, 0, '2022-04-02 22:28:19', '2022-04-02 22:28:19'),
(22, 3, NULL, 0x747474, 0, '2022-04-02 22:42:44', '2022-04-02 22:42:44'),
(22, 3, '出口', 0x7375626172617369690d0a, 0, '2022-04-02 23:25:28', '2022-04-02 23:25:28'),
(22, 4, '出口', 0xe7b4a0e699b4e38289e38197e38184, 0, '2022-04-03 10:11:04', '2022-04-03 10:11:04'),
(27, 3, 'testuser', 0x7171, 0, '2022-04-24 18:37:19', '2022-04-24 18:37:19'),
(27, 3, 'testuser', 0x7272, 0, '2022-04-24 18:38:07', '2022-04-24 18:38:07'),
(27, 3, 'testuser', 0x6a6a, 0, '2022-04-24 18:39:01', '2022-04-24 18:39:01'),
(27, 3, 'testuser', 0x6a6a, 0, '2022-04-24 18:39:42', '2022-04-24 18:39:42'),
(22, 1, '出口', 0xe59b9ee7ad94e38197e381bee38199, 0, '2022-04-26 12:29:19', '2022-04-26 12:29:19'),
(22, 1, '出口', 0xe59b9ee7ad94e38197e381bee38199, 0, '2022-04-26 19:34:42', '2022-04-26 19:34:42'),
(22, 3, '出口', 0x6161, 0, '2022-04-26 20:25:31', '2022-04-26 20:25:31');

-- --------------------------------------------------------

--
-- テーブルの構造 `file_table`
--

CREATE TABLE `file_table` (
  `id` int(11) NOT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `file_path` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(140) COLLATE utf8mb4_bin DEFAULT NULL,
  `insert_time` datetime NOT NULL DEFAULT current_timestamp(),
  `update_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `username` varchar(20) COLLATE utf8mb4_bin DEFAULT NULL,
  `feedback` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `category` varchar(20) COLLATE utf8mb4_bin DEFAULT NULL,
  `thanks` varchar(20) COLLATE utf8mb4_bin DEFAULT NULL,
  `koukai` int(1) DEFAULT 0 COMMENT '1は公開'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- テーブルのデータのダンプ `file_table`
--

INSERT INTO `file_table` (`id`, `file_name`, `file_path`, `description`, `insert_time`, `update_time`, `username`, `feedback`, `category`, `thanks`, `koukai`) VALUES
(81, 'UcEz5GoU9mvbW0rWqaeIzuNH2PEzRYib.jpeg', 'images/20220315054710UcEz5GoU9mvbW0rWqaeIzuNH2PEzRYib.jpeg', 'いかにも幸せ', '2022-03-15 13:47:10', '2022-03-28 20:03:07', 'testuser02', 'っh', NULL, NULL, 1),
(82, 'wysiwyg_ba6052aae60208a9d879.jpeg', 'images/20220315054747wysiwyg_ba6052aae60208a9d879.jpeg', 'パリぴ', '2022-03-15 13:47:47', '2022-03-15 13:47:49', 'testuser02', NULL, NULL, NULL, NULL),
(83, 'otoko.jpeg', 'images/20220315072501otoko.jpeg', '男性', '2022-03-15 15:25:01', '2022-03-15 19:58:10', 'testuser02', '素敵', NULL, NULL, 1),
(88, 'IMG_1193.jpeg', 'images/20220315153003IMG_1193.jpeg', 'いい雰囲気', '2022-03-15 23:30:03', '2022-03-15 23:30:09', 'testuser02', NULL, NULL, NULL, 1),
(89, 'mori.png', 'images/20220328130300mori.png', 'ああ', '2022-03-28 20:03:00', '2022-03-28 20:03:01', 'testuser01', NULL, NULL, NULL, 1),
(90, 'appimg.png', 'images/20220331115855appimg.png', '', '2022-03-31 18:58:55', '2022-03-31 18:58:55', 'testuser01', NULL, NULL, NULL, 0),
(91, '15a826bc62d3102f8934efea8e070fe9_t.jpeg', 'images/2022033114420015a826bc62d3102f8934efea8e070fe9_t.jpeg', NULL, '2022-03-31 21:42:00', '2022-03-31 21:42:00', 'testuser01', NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- テーブルの構造 `follow`
--

CREATE TABLE `follow` (
  `id` int(11) NOT NULL,
  `user_id_to` int(12) DEFAULT NULL,
  `user_id_from` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- テーブルのデータのダンプ `follow`
--

INSERT INTO `follow` (`id`, `user_id_to`, `user_id_from`) VALUES
(23, 22, 3),
(37, 23, 22);

-- --------------------------------------------------------

--
-- テーブルの構造 `good`
--

CREATE TABLE `good` (
  `id` int(255) NOT NULL,
  `g_user_id` int(50) DEFAULT NULL,
  `g_post_id` int(50) DEFAULT NULL,
  `session_user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- テーブルのデータのダンプ `good`
--

INSERT INTO `good` (`id`, `g_user_id`, `g_post_id`, `session_user_id`) VALUES
(1, 23, 8, 0),
(22, 24, 7, 0),
(36, 22, 3, 0),
(38, 26, 9, 0),
(39, NULL, 9, 0),
(41, 22, 3, 2),
(42, 22, 4, 2),
(43, 24, 7, 2),
(44, 23, 8, 22),
(45, 24, 7, 22);

-- --------------------------------------------------------

--
-- テーブルの構造 `posts_table`
--

CREATE TABLE `posts_table` (
  `user_id` int(50) DEFAULT NULL,
  `post_id` int(50) NOT NULL,
  `title` varchar(128) COLLATE utf8mb4_bin DEFAULT NULL,
  `text` blob DEFAULT NULL,
  `thumbnail` blob DEFAULT NULL,
  `deleted_at` int(1) DEFAULT NULL,
  `p_created_at` datetime DEFAULT NULL,
  `p_updated_at` datetime DEFAULT NULL,
  `good` int(50) DEFAULT 0,
  `comment` int(50) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- テーブルのデータのダンプ `posts_table`
--

INSERT INTO `posts_table` (`user_id`, `post_id`, `title`, `text`, `thumbnail`, `deleted_at`, `p_created_at`, `p_updated_at`, `good`, `comment`) VALUES
(22, 3, '固定資産税の計算の簡略化（エクセルVBA）', 0xe58583e38085e38081e6898be8a888e7ae97e3818ce4b8bbe381a0e381a3e3819fe6a5ade58b99e381a7e38081e38392e383a5e383bce3839ee383b3e382a8e383a9e383bce3818ce799bae7949fe38197e3819fe38193e381a8e38292e58f97e38191e381a6e380813c6469763ee382a8e382afe382bbe383abe381a7e381aee6a5ade58b99e58ab9e78e87e58c96e38292e5ae9fe78fbee380823c2f6469763e3c6469763ee6a5ade58b99e69982e99693e381afefbc91e4bbb6e38182e3819fe3828aefbc91efbc90e58886e7a88be5baa6e3818be3818be381a3e381a6e38184e3819fe381a8e38193e3828de38081efbc93e58886e7a88be5baa6e381abe79fade7b8aee38082e59088e8a888e4bbb6e695b0e381af31303030e4bbb6e381abe38282e381aee381bce3828be3819fe38281e38081e7b48437303030e58886e381aee79fade7b8aee381a8e381aae381a3e3819fe380823c2f6469763e, 0x696d616765732f323032323033333131383034333931356138323662633632643331303266383933346566656138653037306665395f742e6a706567, 0, '2022-04-01 01:05:21', '2022-04-01 01:05:21', 2, 8),
(22, 4, 'test', 0xe38386e382b9e38388efbc91, 0x696d616765732f3230323230343032313330303433474d55506a656c69783856686b4a4e626248364172734c647a49437a5472796d2e6a706567, 0, '2022-04-02 20:00:45', '2022-04-02 20:00:45', 1, 0),
(22, 6, 'テスト２', 0xe38386e382b9e38388efbc92, 0x696d616765732f3230323230343032313330323239494d475f313139332e6a706567, 0, '2022-04-02 20:02:31', '2022-04-02 20:02:31', 0, 0),
(24, 7, '初めての投稿', 0xe5889de38281e381a6e68a95e7a8bfe38197e381bee38199e38082e38288e3828de38197e3818fe3818ae9a198e38184e38197e381bee38199e38082, 0x696d616765732f32303232303430333134333432326d765f636861726130332e706e67, 0, '2022-04-03 21:34:25', '2022-04-03 21:34:25', 3, 0),
(23, 8, '東京について', 0xe38386e382b9e38388e381a7e68a95e7a8bfe38197e381bee38199, 0x696d616765732f32303232303430333136313831314b565f325f446f72615f53502e706e67, 0, '2022-04-03 23:18:13', '2022-04-03 23:18:13', 2, 0),
(26, 9, 'demo2', 0xe38182e38182e38182e38182e38182e38182, 0x696d616765732f3230323230343033313735363235777973697779675f62613630353261616536303230386139643837392e6a706567, 0, '2022-04-04 00:56:27', '2022-04-04 00:56:27', 3, 0);

-- --------------------------------------------------------

--
-- テーブルの構造 `question_table`
--

CREATE TABLE `question_table` (
  `user_id` int(12) DEFAULT NULL,
  `ques_id` mediumint(9) NOT NULL,
  `ques_title` varchar(128) COLLATE utf8mb4_bin DEFAULT NULL,
  `question` varchar(128) COLLATE utf8mb4_bin DEFAULT NULL,
  `answer_user_id` int(12) DEFAULT NULL,
  `ques_created` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `ok` int(11) NOT NULL DEFAULT 0,
  `answer` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- テーブルのデータのダンプ `question_table`
--

INSERT INTO `question_table` (`user_id`, `ques_id`, `ques_title`, `question`, `answer_user_id`, `ques_created`, `updated_at`, `ok`, `answer`) VALUES
(22, 1, '質問します', '質問します', NULL, '2022-04-26 12:26:16', NULL, 0, 1);

-- --------------------------------------------------------

--
-- テーブルの構造 `users_table`
--

CREATE TABLE `users_table` (
  `id` int(12) NOT NULL,
  `username` varchar(128) COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(128) COLLATE utf8mb4_bin DEFAULT NULL,
  `password` varchar(128) COLLATE utf8mb4_bin NOT NULL,
  `is_admin` int(1) NOT NULL,
  `pref` varchar(30) COLLATE utf8mb4_bin DEFAULT NULL,
  `city` varchar(30) COLLATE utf8mb4_bin DEFAULT NULL,
  `department` varchar(30) COLLATE utf8mb4_bin DEFAULT NULL,
  `introduction` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `good_point` int(255) DEFAULT NULL,
  `prof_img` blob DEFAULT NULL,
  `screen_img` blob DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `follow_to` int(255) DEFAULT NULL,
  `follow_from` int(255) DEFAULT NULL,
  `is_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- テーブルのデータのダンプ `users_table`
--

INSERT INTO `users_table` (`id`, `username`, `email`, `password`, `is_admin`, `pref`, `city`, `department`, `introduction`, `good_point`, `prof_img`, `screen_img`, `created_at`, `updated_at`, `follow_to`, `follow_from`, `is_deleted`) VALUES
(1, 'testuser01', NULL, '111111', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-02-19 15:17:26', '2022-02-19 15:17:26', NULL, NULL, 0),
(2, 'testuser02', NULL, '222222', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-02-19 15:17:26', '2022-02-19 15:17:26', NULL, NULL, 0),
(3, 'testuser03', NULL, '333333', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-02-19 15:17:26', '2022-02-19 15:17:26', 1, NULL, 0),
(4, 'testuser04', NULL, '444444', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-02-19 15:17:26', '2022-02-19 15:17:26', NULL, NULL, 0),
(5, 'aaa', NULL, 'aaaa', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-02-24 22:50:08', '2022-02-24 22:50:08', NULL, NULL, 0),
(6, 'kkk', NULL, 'kkk', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-02-24 22:58:22', '2022-02-24 22:58:22', NULL, NULL, 0),
(7, 'anpanman', NULL, 'an', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-03-04 23:18:26', '2022-03-04 23:18:26', NULL, NULL, 0),
(8, 'doraemon', NULL, 'dora', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-03-04 23:18:48', '2022-03-04 23:18:48', NULL, NULL, 0),
(9, '', NULL, '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, 0),
(10, '', NULL, '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, 0),
(11, '', NULL, '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, 0),
(12, '', NULL, '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, 0),
(13, '', NULL, '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, 0),
(14, '', NULL, '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, 0),
(15, '', NULL, '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, 0),
(16, '', NULL, '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, NULL, 0),
(17, 'testuser01', NULL, '111111', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-03-30 23:36:36', '2022-03-30 23:36:36', NULL, NULL, 0),
(18, 'testuser01', 'dd.1107.11107@gmail.com', '111111', 0, NULL, NULL, NULL, 'よろしくお願いします', NULL, 0x696d616765732f32303232303430333130303034326f746f6b6f2e6a706567, 0x696d616765732f32303232303430333130303034326d6f72692e706e67, '2022-03-30 23:40:54', '2022-03-30 23:40:54', NULL, NULL, 0),
(19, 'deguti', 'dd@dd', 'GHc6Waxw', 0, '福岡県', '南区', '税務部', NULL, NULL, NULL, NULL, '2022-03-31 00:23:27', '2022-03-31 00:23:27', NULL, NULL, 0),
(20, 'deguti', 'dd@dd', 'GHc6Waxw', 0, '福岡県', '南区', '税務部', NULL, NULL, NULL, NULL, '2022-03-31 00:25:05', '2022-03-31 00:25:05', NULL, NULL, 0),
(21, 'deguti', 'dd@dd', 'GHc6Waxw', 0, '福岡県', '南区', '税務部', NULL, NULL, NULL, NULL, '2022-03-31 14:28:47', '2022-03-31 14:28:47', NULL, NULL, 0),
(22, '出口', 'degutidai@gmail.com', 'GHc6Waxw', 0, '福岡県', '福岡市南区', '課税課', '初めまして。よろしくお願いします', NULL, 0x696d616765732f3230323230343038313135363031797562692e6a706567, 0x696d616765732f32303232303430383131353630316d6f72692e706e67, '2022-04-01 00:39:00', '2022-04-01 00:39:00', 1, 1, 0),
(23, 'testuser02', 'test@02', '222222', 0, '東京都', '渋谷区', '保健福祉', '初めまして', NULL, 0x696d616765732f32303232303430383132333632346d765f636861726130332e706e67, 0x696d616765732f3230323230343038313233363234474d55506a656c69783856686b4a4e626248364172734c647a49437a5472796d2e6a706567, '2022-04-03 10:31:05', '2022-04-03 10:31:05', NULL, 1, 0),
(24, 'testuser03', 'test@03', '333333', 0, '北海道', '札幌', '観光企画', 'はじめまして', NULL, 0x696d616765732f323032323034303330393339313831356138323662633632643331303266383933346566656138653037306665395f742e6a706567, 0x696d616765732f3230323230343033303933393138474d55506a656c69783856686b4a4e626248364172734c647a49437a5472796d2e6a706567, '2022-04-03 10:37:00', '2022-04-03 10:37:00', NULL, 0, 0),
(25, 'testuser03', 'test@03', '333333', 0, '北海道', '札幌', '観光企画', NULL, NULL, NULL, NULL, '2022-04-03 10:37:58', '2022-04-03 10:37:58', NULL, NULL, 0),
(26, 'demo2', 'demo2@demo2', 'demo2', 0, '東京都', '新宿区', '都庁', 'デモ版', NULL, 0x696d616765732f3230323230343033313735343338, 0x696d616765732f3230323230343033313735343338, '2022-04-04 00:33:20', '2022-04-04 00:33:20', NULL, NULL, 0),
(27, 'testuser', 'test@test', 'test', 0, '東京都', '千代田区', '厚生労働省', NULL, NULL, NULL, NULL, '2022-04-24 13:13:22', '2022-04-24 13:13:22', 0, NULL, 0),
(28, 'demo', 'demo@demo', 'demo', 0, '沖縄県', '那覇市', '街づくり部', NULL, NULL, NULL, NULL, '2022-04-29 01:23:53', '2022-04-29 01:23:53', NULL, NULL, 0);

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `answer_table`
--
ALTER TABLE `answer_table`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- テーブルのインデックス `comment_table`
--
ALTER TABLE `comment_table`
  ADD KEY `user_id` (`user_id`);

--
-- テーブルのインデックス `file_table`
--
ALTER TABLE `file_table`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `good`
--
ALTER TABLE `good`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `posts_table`
--
ALTER TABLE `posts_table`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- テーブルのインデックス `question_table`
--
ALTER TABLE `question_table`
  ADD PRIMARY KEY (`ques_id`),
  ADD KEY `user_id` (`user_id`);

--
-- テーブルのインデックス `users_table`
--
ALTER TABLE `users_table`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `answer_table`
--
ALTER TABLE `answer_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- テーブルの AUTO_INCREMENT `file_table`
--
ALTER TABLE `file_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- テーブルの AUTO_INCREMENT `follow`
--
ALTER TABLE `follow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- テーブルの AUTO_INCREMENT `good`
--
ALTER TABLE `good`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- テーブルの AUTO_INCREMENT `posts_table`
--
ALTER TABLE `posts_table`
  MODIFY `post_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- テーブルの AUTO_INCREMENT `question_table`
--
ALTER TABLE `question_table`
  MODIFY `ques_id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- テーブルの AUTO_INCREMENT `users_table`
--
ALTER TABLE `users_table`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- ダンプしたテーブルの制約
--

--
-- テーブルの制約 `answer_table`
--
ALTER TABLE `answer_table`
  ADD CONSTRAINT `answer_table_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users_table` (`id`);

--
-- テーブルの制約 `comment_table`
--
ALTER TABLE `comment_table`
  ADD CONSTRAINT `comment_table_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users_table` (`id`);

--
-- テーブルの制約 `posts_table`
--
ALTER TABLE `posts_table`
  ADD CONSTRAINT `posts_table_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users_table` (`id`);

--
-- テーブルの制約 `question_table`
--
ALTER TABLE `question_table`
  ADD CONSTRAINT `question_table_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users_table` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
