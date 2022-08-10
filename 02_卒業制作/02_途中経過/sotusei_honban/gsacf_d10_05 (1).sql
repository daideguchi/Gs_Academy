-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- ホスト: localhost
-- 生成日時: 2022 年 3 月 16 日 02:43
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
(77, 'josei.png', 'images/20220314161817josei.png', '女性', '2022-03-15 00:18:17', '2022-03-15 17:08:34', 'testuser01', 'aaa', NULL, NULL, 1),
(78, 'otoko.jpeg', 'images/20220314161831otoko.jpeg', '男性', '2022-03-15 00:18:31', '2022-03-15 00:18:32', 'testuser01', NULL, NULL, NULL, NULL),
(79, 'mv_chara03.png', 'images/20220314161848mv_chara03.png', 'ドラえもん', '2022-03-15 00:18:48', '2022-03-15 00:18:49', 'testuser01', NULL, NULL, NULL, 1),
(81, 'UcEz5GoU9mvbW0rWqaeIzuNH2PEzRYib.jpeg', 'images/20220315054710UcEz5GoU9mvbW0rWqaeIzuNH2PEzRYib.jpeg', 'いかにも幸せ', '2022-03-15 13:47:10', '2022-03-15 13:47:14', 'testuser02', NULL, NULL, NULL, 1),
(82, 'wysiwyg_ba6052aae60208a9d879.jpeg', 'images/20220315054747wysiwyg_ba6052aae60208a9d879.jpeg', 'パリぴ', '2022-03-15 13:47:47', '2022-03-15 13:47:49', 'testuser02', NULL, NULL, NULL, NULL),
(83, 'otoko.jpeg', 'images/20220315072501otoko.jpeg', '男性', '2022-03-15 15:25:01', '2022-03-15 19:58:10', 'testuser02', '素敵', NULL, NULL, 1),
(86, 'UcEz5GoU9mvbW0rWqaeIzuNH2PEzRYib.jpeg', 'images/20220315115734UcEz5GoU9mvbW0rWqaeIzuNH2PEzRYib.jpeg', '楽しそう', '2022-03-15 19:57:34', '2022-03-16 01:24:02', 'testuser01', '@@@@@', NULL, NULL, 1),
(87, 'wysiwyg_ba6052aae60208a9d879.jpeg', 'images/20220315120014wysiwyg_ba6052aae60208a9d879.jpeg', '6ninn', '2022-03-15 20:00:14', '2022-03-15 20:00:24', 'testuser01', NULL, NULL, NULL, 1),
(88, 'IMG_1193.jpeg', 'images/20220315153003IMG_1193.jpeg', 'いい雰囲気', '2022-03-15 23:30:03', '2022-03-15 23:30:09', 'testuser02', NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- テーブルの構造 `images`
--

CREATE TABLE `images` (
  `image_id` int(11) NOT NULL,
  `image_name` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  `image_type` varchar(64) COLLATE utf8mb4_bin NOT NULL,
  `image_content` mediumblob NOT NULL,
  `image_size` int(11) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- テーブルの構造 `like_table`
--

CREATE TABLE `like_table` (
  `id` int(12) NOT NULL,
  `username` varchar(128) COLLATE utf8mb4_bin NOT NULL,
  `kanjou` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- テーブルのデータのダンプ `like_table`
--

INSERT INTO `like_table` (`id`, `username`, `kanjou`, `created_at`) VALUES
(43, '0', '0', '2022-03-16 01:33:45'),
(44, 'testuser02', 'verybad', '2022-03-16 01:36:55'),
(45, 'testuser02', 'verybad', '2022-03-16 01:37:36'),
(46, 'testuser02', 'verybad', '2022-03-16 01:38:31'),
(47, 'testuser02', 'verybad', '2022-03-16 01:40:20'),
(48, 'testuser02', 'verybad', '2022-03-16 01:40:21'),
(49, 'testuser02', 'verybad', '2022-03-16 01:40:59'),
(50, 'testuser02', 'verybad', '2022-03-16 01:41:28'),
(51, 'testuser02', 'verybad', '2022-03-16 01:42:17'),
(52, 'testuser02', 'verybad', '2022-03-16 01:42:19'),
(53, 'testuser02', 'verybad', '2022-03-16 01:44:57'),
(54, 'testuser02', 'medium', '2022-03-16 01:45:28');

-- --------------------------------------------------------

--
-- テーブルの構造 `todo_table`
--

CREATE TABLE `todo_table` (
  `id` int(12) NOT NULL,
  `todo` varchar(128) COLLATE utf8mb4_bin NOT NULL,
  `deadline` date NOT NULL,
  `image` varchar(128) COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `is_deleted` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- テーブルのデータのダンプ `todo_table`
--

INSERT INTO `todo_table` (`id`, `todo`, `deadline`, `image`, `created_at`, `updated_at`, `is_deleted`) VALUES
(2, '海', '2022-02-20', NULL, '2022-02-05 15:34:25', '2022-02-05 15:34:25', 0),
(3, '休日', '2022-02-20', NULL, '2022-02-05 15:34:25', '2022-02-05 15:34:25', 0),
(5, '運動', '2022-02-20', NULL, '2022-02-05 15:34:25', '2022-02-12 17:21:52', 1),
(6, 'ジャンクフード', '2022-02-20', NULL, '2022-02-05 15:34:25', '2022-02-05 15:34:25', 0),
(7, '筋トレ', '2022-02-20', NULL, '2022-02-05 15:34:25', '2022-02-12 17:21:48', 1),
(8, 'サウナ', '2022-02-20', NULL, '2022-02-05 15:34:25', '2022-02-05 15:34:25', 0),
(9, '温泉', '2022-02-20', NULL, '2022-02-05 15:34:25', '2022-02-05 15:34:25', 0),
(24, 'aaa', '2022-02-01', NULL, '2022-02-05 16:52:50', '2022-03-04 17:05:55', 1),
(25, 'aaa', '2022-02-07', NULL, '2022-02-05 16:53:53', '2022-02-05 16:53:53', 0),
(27, 'aaa', '2022-02-14', NULL, '2022-02-05 16:57:18', '2022-02-05 16:57:18', 0),
(28, 'aaaa', '2022-02-14', NULL, '2022-02-12 14:35:04', '2022-02-12 17:21:50', 1),
(29, 'aaaa', '2022-02-22', NULL, '2022-02-23 23:23:51', '2022-02-23 23:23:51', 0),
(30, '画像アップロード', '2022-03-12', 'upload/20220305073218087311569c81a4669f532baa0c39e560.png', '2022-03-05 15:32:18', '2022-03-05 15:32:18', 0),
(31, '画像アップロード', '2022-03-05', 'upload/202203050732377a7b46c0fd0e424a3ad8ed8b4fc3f1a6.png', '2022-03-05 15:32:37', '2022-03-05 15:32:37', 0),
(32, 'aaa', '2022-03-03', 'upload/20220305073323bc1faf270796466028e86c52f3f4f1e0.png', '2022-03-05 15:33:23', '2022-03-05 15:33:23', 0),
(33, 'aaa', '2022-03-08', 'upload/20220305073722f5f4f72cdbe745ac92737cf75a0aea4c.png', '2022-03-05 15:37:22', '2022-03-05 15:37:22', 0);

-- --------------------------------------------------------

--
-- テーブルの構造 `users_table`
--

CREATE TABLE `users_table` (
  `id` int(12) NOT NULL,
  `username` varchar(128) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(128) COLLATE utf8mb4_bin NOT NULL,
  `is_admin` int(1) NOT NULL,
  `is_deleted` int(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `score` int(11) DEFAULT NULL,
  `profile` blob NOT NULL,
  `img` blob NOT NULL,
  `naritai` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `mokuhyou` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `sex` int(11) DEFAULT NULL,
  `old` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- テーブルのデータのダンプ `users_table`
--

INSERT INTO `users_table` (`id`, `username`, `password`, `is_admin`, `is_deleted`, `created_at`, `updated_at`, `score`, `profile`, `img`, `naritai`, `mokuhyou`, `sex`, `old`) VALUES
(1, 'testuser01', '111111', 1, 0, '2022-02-19 15:17:26', '2022-02-19 15:17:26', NULL, '', '', 'ああ', 'yyy', NULL, NULL),
(2, 'testuser02', '222222', 0, 0, '2022-02-19 15:17:26', '2022-02-19 15:17:26', NULL, '', '', 'お金持ち', 'まずは投資で100万円稼ぐ', NULL, NULL),
(3, 'testuser03', '333333', 0, 0, '2022-02-19 15:17:26', '2022-02-19 15:17:26', NULL, '', '', NULL, NULL, NULL, NULL),
(4, 'testuser04', '444444', 0, 0, '2022-02-19 15:17:26', '2022-02-19 15:17:26', NULL, '', '', NULL, NULL, NULL, NULL),
(5, 'aaa', 'aaaa', 0, 0, '2022-02-24 22:50:08', '2022-02-24 22:50:08', NULL, '', '', NULL, NULL, NULL, NULL),
(6, 'kkk', 'kkk', 0, 0, '2022-02-24 22:58:22', '2022-02-24 22:58:22', NULL, '', '', NULL, NULL, NULL, NULL),
(7, 'anpanman', 'an', 0, 0, '2022-03-04 23:18:26', '2022-03-04 23:18:26', NULL, '', '', NULL, NULL, NULL, NULL),
(8, 'doraemon', 'dora', 0, 0, '2022-03-04 23:18:48', '2022-03-04 23:18:48', NULL, '', '', NULL, NULL, NULL, NULL),
(9, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '', '', 'aa', 'iii', NULL, NULL),
(10, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '', '', 'aa', 'iii', NULL, NULL),
(11, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '', '', 'aa', 'iii', NULL, NULL),
(12, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '', '', 'aa', 'iii', NULL, NULL),
(13, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '', '', 'aa', 'iii', NULL, NULL),
(14, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '', '', 'aa', 'iii', NULL, NULL),
(15, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '', '', 'aa', 'iii', NULL, NULL),
(16, '', '', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, '', '', 'aa', 'iii', NULL, NULL);

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `file_table`
--
ALTER TABLE `file_table`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`image_id`);

--
-- テーブルのインデックス `like_table`
--
ALTER TABLE `like_table`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `todo_table`
--
ALTER TABLE `todo_table`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `users_table`
--
ALTER TABLE `users_table`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `file_table`
--
ALTER TABLE `file_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- テーブルの AUTO_INCREMENT `images`
--
ALTER TABLE `images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- テーブルの AUTO_INCREMENT `like_table`
--
ALTER TABLE `like_table`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- テーブルの AUTO_INCREMENT `todo_table`
--
ALTER TABLE `todo_table`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- テーブルの AUTO_INCREMENT `users_table`
--
ALTER TABLE `users_table`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
