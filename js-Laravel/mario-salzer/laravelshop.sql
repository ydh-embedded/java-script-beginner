-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 19. Jan 2024 um 13:59
-- Server-Version: 10.4.28-MariaDB
-- PHP-Version: 8.2.4

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `laravelshop`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `articles`
--
-- Erstellt am: 19. Jan 2024 um 11:32
-- Zuletzt aktualisiert: 19. Jan 2024 um 12:57
--

CREATE TABLE `articles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `desc` text NOT NULL,
  `img` varchar(160) NOT NULL,
  `img_thumb` varchar(160) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `catid` bigint(20) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `articles`
--

INSERT INTO `articles` (`id`, `title`, `desc`, `img`, `img_thumb`, `created_at`, `updated_at`, `catid`) VALUES
(1, 'Unbeliebte Pipette', 'Est rerum ut quibusdam aut quo qui. Incidunt accusantium atque sapiente officiis. Ad eaque expedita ut pariatur enim. Omnis consequuntur perspiciatis est aut commodi illum. Facere quo saepe quas.</p><p>Explicabo asperiores in libero corporis vel. Dolor eum corporis eveniet magni qui harum. Voluptate vero alias autem et. Eos ut dolor sapiente.</p><p>Eos voluptatum repellendus minus et sunt ratione id. Occaecati accusantium qui vel sunt autem. Sit sit aut omnis rem. Aliquid voluptates ut suscipit provident quia sed. Mollitia libero adipisci molestiae totam.</p><p>Voluptas quisquam quia aut laudantium aspernatur qui. Commodi illum facere iure. Ut tempore animi pariatur et.</p><p>Exercitationem facere deleniti iste sapiente reiciendis ea. Exercitationem ut dolorum modi accusamus error hic rerum.', 'https://picsum.photos/id/490/780/500', 'https://picsum.photos/id/490/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 5),
(2, 'Teuflische Mitternachtshappen', 'Eos repellendus id et voluptatem dolores quia mollitia quis. Qui harum quam nulla at fuga error in. Odio incidunt nemo dolorem. Porro autem laboriosam impedit sed totam voluptas laborum.</p><p>Voluptas dolorum aut voluptatem officiis dolores maiores amet nesciunt. Quasi reiciendis est qui. Architecto qui libero odio. Officiis repudiandae velit accusamus atque.</p><p>Laudantium id quisquam et quis harum. Harum velit quam et quasi reprehenderit accusamus repellat deserunt. Temporibus voluptas sunt dolor repellendus recusandae. Repellat magnam accusantium blanditiis ea.</p><p>Error voluptatibus eligendi quisquam harum repellat. Maxime accusantium autem nam facilis. Incidunt ut sed corrupti eum iure. Vel explicabo officiis et sint molestiae laborum.</p><p>Cumque voluptatem sit aut aut pariatur itaque. Sed consequatur repellendus ut voluptas tempora. Enim aut commodi nam sint.</p><p>Ea vero sit tenetur ratione error error. Molestiae est fugiat ea architecto. Natus iusto voluptas ut consectetur.</p><p>Et quos ut placeat. Autem velit sequi nam. Et possimus sit ut dolor pariatur maxime. Alias quia atque deleniti sed vitae.</p><p>Praesentium et velit dolore. Harum consequatur id quis ex ab officia qui aut. Sunt quis beatae cum voluptatem. Eos voluptatem molestiae quam nisi officia et. Vel sunt eveniet esse sit.</p><p>Non cumque hic possimus qui hic ut placeat praesentium. Consequuntur facilis enim molestias et. Perferendis dolorem quis unde possimus voluptatem. Voluptatum aut qui consequatur aut ea aut est.', 'https://picsum.photos/id/905/780/500', 'https://picsum.photos/id/905/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 6),
(3, 'Ungünstige Downloads', 'Amet itaque vitae similique omnis. Officiis aut voluptatem quia tempore quia vero. Dolores aspernatur explicabo quas saepe.</p><p>Consequuntur dignissimos voluptatem voluptatem et. Occaecati eveniet quis aliquam sit est aut iste optio. Impedit autem quo odio voluptate officia.</p><p>Nam est laudantium dolores incidunt officia ullam tenetur. Et eum sint ut fugiat.</p><p>Sint officiis esse maxime laborum ut laborum quas. Sit ullam voluptatum eos vitae. Ratione totam aut sunt quia qui modi et. Quibusdam sint sint odit et rerum eum laboriosam eveniet. Delectus amet hic voluptate molestiae dolor a.</p><p>Quis repudiandae commodi a. Dolorum ratione deleniti molestiae ducimus quia molestiae quia aspernatur. Ipsam occaecati animi temporibus tempora pariatur. Assumenda quaerat rem sint quidem aperiam nobis. Fugit sit fugit voluptatibus aliquam.</p><p>Sunt quaerat incidunt voluptatem ducimus tempora. Est ullam minima id soluta minus vero. Enim sapiente velit omnis architecto atque.</p><p>Repudiandae dolores maxime doloribus suscipit ducimus delectus laborum. Cumque laborum consequatur vitae esse optio velit. Iusto autem dignissimos quos numquam qui quis incidunt. Laboriosam aut est tenetur id laboriosam perspiciatis.', 'https://picsum.photos/id/1021/780/500', 'https://picsum.photos/id/1021/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 4),
(4, 'Verflixte Maske', 'Quis provident maxime atque explicabo et et quo. Blanditiis accusantium odit quos eum. Voluptatem rerum ipsa cupiditate rem voluptatem.</p><p>Libero libero autem provident exercitationem officiis est quos. Beatae odio dolor et omnis error. Facere neque nemo blanditiis dolores.</p><p>Quis magni sit enim quo quo eum soluta qui. Dolor deserunt cumque quisquam provident. Explicabo dicta et est ea ut eveniet reiciendis.</p><p>Dicta et necessitatibus tempora excepturi rem. Tempora quis adipisci ipsa error ut qui et.</p><p>Cumque corporis soluta aspernatur debitis. Dicta quis adipisci sunt quia repellat numquam omnis. Officia sit sunt voluptatem voluptas nemo facere et.</p><p>Quia dignissimos harum architecto ut. Optio voluptatem rem enim ea est. Inventore sit quia voluptatem consequatur sed id consequatur.</p><p>Aliquid non qui ipsa velit rerum autem corrupti. Sint aut nesciunt nesciunt sunt. Laudantium consequatur tempore aperiam accusantium reprehenderit officiis natus.', 'https://picsum.photos/id/200/780/500', 'https://picsum.photos/id/200/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 6),
(5, 'Prekäre Bluetooth-Maus', 'Nihil id aperiam laborum aut. Placeat sint est alias ipsam. Ea voluptas sit autem voluptas qui fugiat.</p><p>Sint quia similique est delectus. Maiores architecto tenetur omnis est repudiandae. Alias sunt quia odio consequuntur. Pariatur et molestias esse et.</p><p>Blanditiis mollitia doloribus excepturi provident. Sed adipisci maiores deleniti pariatur.</p><p>Sed veritatis et asperiores exercitationem impedit facilis hic. Mollitia distinctio blanditiis sit et voluptatem excepturi laudantium. Qui maxime alias rerum quis id tenetur doloribus quis.</p><p>Repellendus repellat sunt facere commodi neque error quibusdam. Ullam officiis optio officia vero neque a illo. Ipsam architecto non et voluptas et nam. Magnam earum amet repellendus molestiae sunt.', 'https://picsum.photos/id/1048/780/500', 'https://picsum.photos/id/1048/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 2),
(6, 'Verfluchte Abwaschbürste', 'Quisquam id eos temporibus eaque enim fugiat. Eligendi rem sed qui aliquam unde. Consequatur pariatur dolorem culpa exercitationem ullam. Molestiae voluptas pariatur modi corporis quia aliquam in quis.</p><p>Quidem porro praesentium sed nemo blanditiis. Voluptas nesciunt quis consequatur. Minima sunt id ut nostrum possimus quia sapiente. Odio vitae illo eligendi id consequatur. Sed fugiat id et aut ut illum.</p><p>Aut quae voluptatem voluptatem rerum unde. Incidunt et provident doloribus. Corporis voluptates voluptates quia natus nobis rerum explicabo. Et aut est suscipit et sed.</p><p>Ducimus et sed quidem quo. Necessitatibus vel sed aperiam minima impedit soluta qui. Beatae natus quia vel accusamus. Rerum non molestiae quia cum quod vitae repellat quae.</p><p>Corporis qui ratione tenetur qui nesciunt occaecati. Sed quis et accusantium error. Sint facere cumque accusamus veritatis qui. Quibusdam minima et mollitia ad adipisci ab.</p><p>Non sequi et neque illo expedita omnis. Voluptates soluta rerum aut veritatis omnis molestiae. Consectetur est mollitia repellat accusamus aut. Nobis et consequatur corrupti cum optio.', 'https://picsum.photos/id/976/780/500', 'https://picsum.photos/id/976/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 4),
(7, 'Grauenhafte Vogelscheuche', 'Qui sunt voluptatem minima est quos et. Molestiae a dolorem quia accusamus animi quasi harum. Illum eaque magni esse laboriosam.</p><p>Unde sed qui nostrum quod nesciunt quas iusto. Adipisci nesciunt eos nemo consectetur velit. Fugit dolor perferendis sed dignissimos voluptates aliquam dolore.</p><p>Vel delectus corrupti explicabo ullam aut rerum amet maxime. Amet molestias sunt qui dolor. Beatae saepe voluptatum suscipit veritatis sint vel voluptas. Illo eius nemo sequi rerum et.</p><p>Perspiciatis magnam quo omnis quia. Non quo qui voluptas ratione vero laborum dolor. Quo est temporibus dolorem inventore. Qui corporis neque dicta ipsum.</p><p>Eaque nihil doloribus illo sapiente. Et similique quia possimus unde velit. Doloremque iste omnis sapiente sint qui sunt dolore. Dolores quo et aspernatur voluptas.</p><p>Eveniet rerum vel sunt vel. Iusto nesciunt quos voluptate natus eos et porro. Dolor quo perferendis eveniet necessitatibus commodi excepturi. Culpa magni ad placeat quasi consequatur.', 'https://picsum.photos/id/868/780/500', 'https://picsum.photos/id/868/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 1),
(8, 'Verfluchte Bluetooth-Maus', 'Commodi non et quia similique sequi aut. Impedit dignissimos vel incidunt error. Asperiores sit enim dignissimos et. Quia quia consequatur quae et quasi et et.</p><p>Asperiores nobis veniam necessitatibus porro odit. Nostrum cumque debitis autem sunt voluptas corporis sed. Ex sed placeat aut. Sed quia expedita rerum. Dicta porro earum sed dolor accusamus quidem.</p><p>Et ipsa qui in qui sit iusto. Id et quia provident molestias odio id. Voluptas quia impedit nobis corporis consequatur reiciendis deleniti.</p><p>Odio ex a pariatur consequatur. Laudantium est dolores est tempore. Laboriosam voluptas enim dolorem voluptatem.</p><p>Sed corrupti aut dolores ut aut illum. Enim eos debitis sed magnam.</p><p>Ipsam repellendus et ea eum harum incidunt. Dolor aut voluptas et minima enim.</p><p>Qui cumque blanditiis repudiandae ut quos illum qui. Quisquam quos est repellendus ullam aut. Ut quaerat est excepturi animi hic consequatur temporibus fugit. Aut blanditiis error perferendis rerum provident mollitia.</p><p>Debitis voluptatem sint consequatur animi repudiandae. Debitis consequatur cupiditate vero ullam deleniti numquam. Iste nisi ea minima quasi est magni. A aliquid non facilis. Fuga et adipisci fugiat voluptatum occaecati corporis accusamus nisi.</p><p>Tenetur et error quia. Sequi reiciendis explicabo et est esse. Nihil ea laudantium ea excepturi minus incidunt dolorem eos.</p><p>Est excepturi tenetur recusandae repellendus quia ipsum rem. Magnam voluptas omnis illum aut. Doloribus natus qui dolore assumenda eum et.</p><p>Consequatur qui hic accusamus voluptatibus quam. Quia mollitia voluptates odit atque. Dicta nulla ad nulla commodi.', 'https://picsum.photos/id/91/780/500', 'https://picsum.photos/id/91/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 6),
(9, 'Verflixte Fußmatte', 'Sunt quibusdam quas dolore similique quia recusandae. Temporibus laboriosam est voluptatum sed.</p><p>Minus incidunt sint expedita deserunt. Nemo aut voluptatum ad libero optio. Officia illo molestiae sunt est consequatur.</p><p>Laudantium velit occaecati minus vero nihil architecto. Corrupti ab iusto commodi et eligendi. In laudantium cum animi aliquid et autem eos. Sit magni libero molestiae id accusantium dolorum.', 'https://picsum.photos/id/783/780/500', 'https://picsum.photos/id/783/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 6),
(10, 'Gräuliche Katze', 'Sint nihil aperiam ex sapiente dicta ipsa in. Voluptatibus et ipsam omnis ipsam assumenda. Et aut doloribus saepe et quisquam voluptate.</p><p>Voluptatem voluptas eligendi et voluptatem aut consequatur mollitia delectus. Ad quis molestias et hic. Rem voluptatibus repellat qui culpa. Autem aut voluptatem officia sequi est ab consequatur.</p><p>Et est labore et molestiae dolores et. Ea aperiam id possimus animi atque. Suscipit exercitationem assumenda unde animi quidem deleniti accusamus facilis.</p><p>Sit illum officia est repudiandae dolorem aut perspiciatis. Porro neque non odit id. Non fuga qui impedit ullam distinctio laudantium.</p><p>Exercitationem dicta aut ipsa doloribus qui vero. Consectetur similique nihil tempora quisquam est. Dolor sunt est molestiae doloribus et quo blanditiis pariatur. Ex repudiandae necessitatibus quia ullam deserunt.</p><p>Qui dolores sit qui ullam veritatis omnis nobis. Et debitis consequatur quia. Et repellendus animi voluptas ducimus sunt dolorem et. Ratione earum optio consequuntur mollitia cum.', 'https://picsum.photos/id/100/780/500', 'https://picsum.photos/id/100/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 2),
(11, 'Verwunschene Vase', 'Eligendi et aut tempore ab vel fugiat nam. Eius earum qui quia facilis quis voluptatem. Qui doloremque ut at sapiente non.</p><p>Quod excepturi accusantium magni architecto culpa error. Minima cupiditate sed quod et. Quo eos quisquam totam dolores excepturi deserunt maiores. Voluptate ab eos aut ex.</p><p>Distinctio omnis earum et officia repellendus temporibus laborum. Cum provident sint et odit laborum.</p><p>Facilis similique dolore qui error sed. Aut pariatur tempore assumenda libero consequatur.</p><p>Incidunt autem eligendi quod quis. Occaecati et reiciendis qui dolores. Aut sit similique sint accusantium voluptatum. Iste magnam debitis atque velit sequi voluptatem consequatur laudantium.</p><p>Totam quam veritatis dolorem odit autem consequatur inventore. Placeat modi eveniet molestiae veniam reiciendis. Impedit et asperiores et nulla tempora. Quia rerum quae praesentium maxime illum nam sed assumenda.</p><p>Eos reiciendis exercitationem mollitia repellat et et optio dolor. Maxime ut cumque quia aut numquam et. Laboriosam molestiae provident et voluptatem eaque saepe laboriosam. Nihil eos aut asperiores dolores.', 'https://picsum.photos/id/222/780/500', 'https://picsum.photos/id/222/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 2),
(13, 'Irre Tasse', 'Repellat pariatur ea quis architecto. Doloremque perferendis hic aliquid numquam quidem. Fuga voluptatem voluptas natus consequuntur.</p><p>Ab occaecati dignissimos fugit. Omnis ut reprehenderit non quos qui. Laborum beatae accusantium atque quidem hic.</p><p>Commodi id qui ut quis ratione deleniti eos. Et eius optio reprehenderit voluptates quo. Sequi autem omnis ut nisi enim soluta sequi. Nihil praesentium harum consequatur illo id quisquam.</p><p>Corporis iure laudantium error dolores laudantium blanditiis voluptas. Nobis perferendis voluptas quis culpa pariatur iusto iste est.</p><p>Atque eos officia natus dicta ut velit voluptatibus. Rerum omnis placeat sit dolorem quaerat voluptas perferendis non. Voluptatem suscipit dicta veniam sint amet eum velit nisi.</p><p>Est aut nostrum maiores nostrum. Accusamus velit qui et totam tempora debitis adipisci. Omnis commodi dolor consequuntur quo aut illo amet.</p><p>Quia aut non rerum nulla facilis velit. Voluptatem maiores suscipit voluptatem odio veritatis accusantium. Neque omnis omnis libero molestiae rerum dignissimos harum. Delectus debitis quam deleniti quae qui. Praesentium qui qui a maxime consectetur.</p><p>Sit voluptas officia vero delectus iste quam dolorem. Debitis laboriosam fugit maiores autem iure fugit quibusdam.</p><p>Ut beatae quis voluptas et sit velit. Officia fugit omnis ab. Asperiores et eveniet cum consequatur beatae culpa. Minus reiciendis totam quam quo cum porro.</p><p>Eum dolor distinctio velit fugit consequuntur. Repellendus impedit corporis et voluptatem. Omnis et aspernatur et harum blanditiis voluptatibus asperiores. Voluptatem quia fuga assumenda in. Beatae dolorem rem similique expedita fugit.', 'https://picsum.photos/id/993/780/500', 'https://picsum.photos/id/993/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 5),
(14, 'Gräuliche Vogelscheuche', 'Aspernatur illo rerum facere autem ullam. Possimus ut tempora qui ea perferendis corrupti. Et illo et facere et. Aspernatur possimus praesentium cum quia.</p><p>Fugit omnis ipsam sunt et quod. Animi dolorem eligendi quos quia. Voluptate officia magni at eos sunt rerum. Labore harum similique magnam consequatur quam dignissimos.</p><p>Ipsa cupiditate nulla perferendis accusamus. Est atque blanditiis vel quaerat. Doloribus ea modi doloribus qui qui. Qui molestiae provident expedita repellendus quae exercitationem.</p><p>A ut animi culpa rerum dolore asperiores quas. Enim pariatur omnis amet dolores nobis vitae consequatur. Rerum autem asperiores officiis nisi. Doloremque possimus non consequatur quia earum doloremque. Molestiae hic perferendis nobis et dolores est accusamus.</p><p>Sint repellat et et assumenda et et esse. Qui esse aliquid aut. Sapiente iste explicabo provident nisi ut accusamus ipsum. Quos voluptate aut provident.</p><p>Dolores quis autem et soluta odit ut voluptas voluptatem. Praesentium iste sed est dolores ut laboriosam sit. Consequuntur aperiam nihil distinctio odit velit molestiae sit. Voluptate laudantium mollitia quia accusamus autem reiciendis. Dolor omnis ut corporis nihil alias ut qui magni.</p><p>Vel cum impedit praesentium rerum necessitatibus. Expedita saepe praesentium voluptates qui aut illum natus molestiae. Voluptatem qui eos et ut veniam assumenda odit voluptas. Rerum modi voluptatem in quia.</p><p>Sed harum sequi possimus harum et amet. Praesentium ipsa deleniti rerum sit nobis fugit. Pariatur ducimus nihil quo optio. Sed ut quasi et vitae temporibus.</p><p>Et repellendus in natus aut quas et. Fugiat ab voluptatibus ut debitis accusantium excepturi non. Nulla reprehenderit debitis numquam quo.</p><p>Eum perspiciatis id velit natus aut. Odit dolores fugiat dolores deleniti. Voluptatem sunt aut a eum nostrum. Nihil eaque velit sed mollitia.</p><p>Quis maiores quod perferendis eos dicta autem rem. Aliquid et placeat autem eos in molestiae velit. Dolores veritatis inventore quia ut.', 'https://picsum.photos/id/276/780/500', 'https://picsum.photos/id/276/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 5),
(15, 'Verdammte Flasche', 'Natus qui corrupti repellendus. Voluptatem ipsam totam maiores ut necessitatibus. Laborum natus sit quis ipsam.</p><p>Praesentium eligendi dolore voluptatem quae blanditiis tempora saepe. Cum modi qui ut neque in ex maxime sint. In corporis est itaque doloribus non ducimus. Sit repudiandae officia non ad.</p><p>Maiores laborum praesentium facere vero. Nulla pariatur soluta in dicta repellat laboriosam pariatur. Error adipisci voluptate aspernatur alias veniam eveniet eos et.</p><p>Quasi veniam distinctio cupiditate qui dolore est consequuntur. Nihil incidunt qui natus soluta. Repudiandae qui quis ducimus.</p><p>Quam molestias natus et est est dolorum necessitatibus. Quia qui atque et ea natus nam hic. Reiciendis modi natus voluptatem dolores.</p><p>Eligendi pariatur voluptatem ut sit ut et ducimus. Cumque rerum perspiciatis reiciendis consequatur. Et soluta totam sint dolorem.</p><p>Quisquam aut totam voluptas velit. Voluptas praesentium autem et dolores. Et necessitatibus aperiam nihil quas enim occaecati accusamus. Optio eum dolores ut et reprehenderit.</p><p>Accusantium ea fugiat aut et commodi voluptatum sequi. Veniam quis libero iusto reprehenderit dolorem et. Ex ut id consequatur beatae. Quisquam consequatur molestias est qui impedit labore.</p><p>Impedit rerum et quibusdam qui voluptate. Dolor qui numquam veniam. Soluta occaecati voluptatem et ut.', 'https://picsum.photos/id/859/780/500', 'https://picsum.photos/id/859/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 4),
(16, 'Ungeheuerliche Bluetooth-Maus', 'Officia quibusdam cumque ut vel doloribus ea. Atque quia dolorem sit enim. Sunt inventore doloremque repellat et vel sunt.</p><p>Minima laborum molestias placeat non voluptas. Sapiente voluptates distinctio mollitia sunt. Tempore voluptas voluptas voluptatum et deserunt. Voluptatem non earum officiis sapiente enim non quia voluptatem.</p><p>Laboriosam esse dolorem rerum illum dignissimos. Quos fugiat cum qui atque iste tempore. Rerum quo alias nihil.</p><p>Reiciendis ipsam est voluptas est. Eum aperiam dolorem ea vitae adipisci. Dolores commodi iure quisquam doloremque dolorem.</p><p>Qui aliquid labore exercitationem et odio debitis. Deleniti aut ad voluptas perspiciatis similique soluta. Nesciunt est mollitia autem dolorem incidunt doloribus voluptate. Pariatur dolore doloremque repellendus non delectus corrupti eligendi.</p><p>Aut ducimus sit quasi praesentium sed. Nesciunt incidunt et expedita et tempore iure.</p><p>Unde est necessitatibus reiciendis nisi voluptates voluptas magni. Est ut praesentium quo est molestiae voluptatum. Deleniti commodi consequatur quidem.</p><p>Impedit ex illo autem natus et velit. Aut aut similique quasi impedit. Ducimus autem perferendis quidem repellendus minima hic.</p><p>Deleniti ex tempore corrupti ut. Atque rerum quam et qui perspiciatis deleniti quam.', 'https://picsum.photos/id/233/780/500', 'https://picsum.photos/id/233/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 7),
(17, 'Ungünstige Prophezeiung', 'Fugit dolor consectetur ea aperiam aut aliquid. Voluptas omnis nulla numquam sint blanditiis quisquam nesciunt. Eligendi rerum commodi a dignissimos enim. Eum perferendis qui explicabo tenetur tempore nostrum velit aut.</p><p>Illo sunt voluptas sed. Assumenda error asperiores qui ipsa voluptatibus repellat consequatur. Eum sed dolor libero deleniti fuga. Repudiandae et cumque voluptatibus.</p><p>Reiciendis est cumque expedita iusto ut nostrum suscipit. Officiis aperiam a consectetur aut expedita quasi. Molestiae ea maxime similique et. Aut maxime quisquam molestiae molestiae.</p><p>Et qui et amet nostrum molestias ut. Voluptas et omnis autem dolor nulla omnis sed. Accusantium recusandae itaque aut harum numquam.</p><p>Soluta voluptates in non provident dolores quia quia. Asperiores velit doloribus ipsum. Dolorem unde exercitationem porro est similique.</p><p>Et unde beatae sit quam. Aut doloribus dolorem perspiciatis unde impedit in dolor et. Inventore voluptate voluptate quisquam sequi. Inventore reiciendis animi ea doloribus nostrum. Minus nisi accusantium consequatur officiis assumenda distinctio vitae.</p><p>Dicta qui voluptatem cumque ut aperiam magni id officiis. Et dolorum doloribus quaerat sapiente ullam. Laboriosam dolorem sint quia nulla saepe vel.</p><p>Mollitia ullam quisquam voluptatem ad deserunt. Aut tenetur voluptate rerum porro. Laudantium maiores non aspernatur ipsum.</p><p>Accusantium saepe consequuntur nostrum nemo qui voluptates. Unde veritatis ut ullam et sint sit at.</p><p>Ea animi occaecati dolorem dolor voluptate eum ducimus. Dicta at perspiciatis ipsam quos tempore provident. Beatae excepturi molestiae quos exercitationem sed soluta officia. Inventore dolore ex dolor optio voluptatem consectetur numquam.</p><p>Adipisci unde ullam dolores id totam est iste quia. Aliquam voluptatem omnis cum pariatur. Ea nulla et quia hic et dolorem.', 'https://picsum.photos/id/682/780/500', 'https://picsum.photos/id/682/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 4),
(18, 'Verhexte Brotrinde', 'Voluptatem ut quo inventore voluptatibus consequuntur aut mollitia quaerat. Et ex consequatur accusantium perspiciatis consectetur ad. Magnam saepe quasi sit maiores accusantium corrupti fuga. Quia quis delectus id.</p><p>Fugiat enim reprehenderit occaecati. Molestiae consequatur est ipsam voluptatem et. Quo qui veritatis repellat dolorum voluptatem eum ut.</p><p>Officia omnis labore quia quae aut facilis. Ea architecto nihil id aut.</p><p>Id quo culpa sit nisi officiis iure quia. Deleniti nam pariatur nam qui nihil sed. Dolores tempora ut fugiat voluptas qui dolor accusantium. Voluptas voluptatem fuga nobis tempora.</p><p>Mollitia aperiam iure fugit excepturi dicta rem accusamus. Dolorum laudantium sit est alias recusandae sed animi. Beatae sit expedita non ea.</p><p>Totam labore est sed rem cupiditate aut qui. Ratione beatae laboriosam quisquam et voluptatum omnis. Aliquid sed et sit vel ut est nostrum eveniet. Asperiores est enim repellat dolorem eius. Earum illum repellat provident earum molestiae atque qui.</p><p>Aut quibusdam amet libero natus incidunt asperiores voluptas. Voluptas alias nihil et eum.</p><p>Laborum perspiciatis beatae quis accusamus praesentium. Sequi ipsam quis eum enim voluptate iste dicta. Sint laudantium mollitia vel ut odit distinctio dolores voluptas. Dignissimos voluptatem omnis voluptatibus et expedita velit similique omnis.</p><p>Unde asperiores dolor officia voluptatem est id incidunt. Iure fugit libero dignissimos quis. Dolorem minus quidem maxime necessitatibus id sed pariatur temporibus. Suscipit ea aut enim similique amet. Saepe architecto ullam perferendis occaecati.</p><p>Dolor fuga ipsum magni sit facere libero facere et. Nihil in provident omnis. Consequatur aut hic ea sit et saepe ut. Maiores blanditiis quibusdam fugit incidunt debitis molestias.', 'https://picsum.photos/id/158/780/500', 'https://picsum.photos/id/158/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 2),
(19, 'Verstrahlte Aufklebersammlung', 'Distinctio nihil dolore blanditiis unde voluptatum. Adipisci nemo veniam libero alias ducimus. Et sequi animi mollitia.</p><p>Quis illum veniam nesciunt placeat vitae est provident. Natus et nihil aut dolor repudiandae nihil. Architecto sit sed culpa veritatis aliquam consequatur vitae.</p><p>Quis facilis eveniet veniam sequi consequatur. Necessitatibus doloribus sapiente quos molestiae. Eaque qui aliquam omnis repellendus tenetur qui enim.</p><p>Architecto natus provident aut doloribus rerum omnis. Accusamus occaecati voluptatum totam ut. Et eos dolor rem et.', 'https://picsum.photos/id/855/780/500', 'https://picsum.photos/id/855/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 6),
(20, 'Unerwünschte Vase', 'Delectus ea perspiciatis dicta corporis. Ea explicabo eligendi possimus et nihil voluptatem maiores. Pariatur fuga repellat illo neque omnis quidem est sit.</p><p>Corporis expedita qui esse qui et porro quia. Ea itaque dolores rerum autem. Sunt est vel praesentium et sunt.</p><p>Est neque quis consequatur officiis aliquam distinctio hic. Totam rem consequatur eum enim. Nobis enim est soluta totam placeat mollitia at.</p><p>Doloribus facere et qui consectetur. Occaecati perferendis facere perspiciatis amet placeat cum voluptas. Est perferendis sapiente cupiditate est odit eveniet dolorem in. Tempora neque beatae repudiandae cum voluptas quia voluptas. Ut quis magnam quia sunt ipsum.</p><p>Esse ut qui nobis soluta laudantium corrupti est. Iusto debitis doloremque libero vel. Est quis porro consequatur et beatae.</p><p>Praesentium est facere est numquam velit. Nobis a nihil molestias similique quasi accusantium.', 'https://picsum.photos/id/990/780/500', 'https://picsum.photos/id/990/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 7),
(21, 'Verfluchte LaravelDatei', 'Amet voluptatibus ut nostrum nihil. Velit sed sapiente illo sunt error magnam temporibus sint. Odio dolorum totam nulla fuga et qui aspernatur.</p><p>Sed magnam nemo saepe in aspernatur atque. Blanditiis aliquid blanditiis vel ipsa aut. Hic corporis sunt placeat fugit nulla modi quidem nostrum.</p><p>Alias illum assumenda tenetur. Dicta aperiam nesciunt impedit inventore nihil. Explicabo reprehenderit consequatur maiores quaerat quis. Quibusdam reiciendis sed nulla assumenda non.</p><p>Expedita cupiditate nesciunt quidem perspiciatis aut quisquam. Sed quia est et delectus. Voluptas voluptas cupiditate omnis sunt eos et. Soluta incidunt aliquam quo non et.</p><p>Odit dignissimos quibusdam doloribus illo quas beatae. Ut quidem molestiae nesciunt impedit. Et minima quisquam alias est eligendi.</p><p>Est dolores asperiores enim perferendis et. Quia delectus iure natus et. Doloribus sequi modi non architecto.', 'https://picsum.photos/id/49/780/500', 'https://picsum.photos/id/49/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 7),
(22, 'Ungünstige Downloads', 'Delectus ipsum est aut nesciunt veniam rerum aut. Nostrum rem ducimus sapiente enim qui dolorum. Pariatur quis quos quam earum. Placeat quae mollitia adipisci mollitia qui nobis natus.</p><p>Ut quos aut dolorem et error a. Et perspiciatis dicta delectus accusamus. Optio ad velit et iusto unde distinctio repudiandae voluptatem.</p><p>Sed quis ipsa cumque nihil. Temporibus dolorem autem deleniti quia error. Id ratione voluptas odit aliquid. Qui commodi culpa quia et doloribus. Odio eos ut placeat assumenda aut repellendus.</p><p>Alias aperiam labore optio et aut ducimus. Consequatur excepturi ut quia est itaque quia ex in. Necessitatibus quisquam neque tempore.</p><p>Nulla aspernatur commodi dolores impedit atque dolor dolorem et. Numquam tempore aspernatur id dolores. A exercitationem deserunt veniam corrupti. Corporis at ea tenetur animi excepturi. Eligendi est esse pariatur magnam dolorem eos.</p><p>Vel libero dicta neque ipsum recusandae. Magni maiores illum at. Natus esse culpa libero et expedita aut veritatis.', 'https://picsum.photos/id/733/780/500', 'https://picsum.photos/id/733/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 3),
(23, 'Ungünstige Vogelscheuche', 'Et doloremque odit quibusdam quae. Ab voluptas voluptatem sit accusantium.</p><p>Nostrum accusamus rerum ut perferendis ut cumque. Qui magni sit consectetur laboriosam. Voluptates id dolores mollitia dolore qui nihil laboriosam.</p><p>Beatae temporibus qui voluptatum praesentium. Est temporibus non voluptatem sunt. Autem ipsum maxime laboriosam dolore est quis.</p><p>Et quo et architecto velit aut et nesciunt. Neque vitae sit et officia sit similique. Autem molestiae sit rerum eligendi enim.</p><p>Illo et commodi exercitationem laborum. Sunt ipsum doloremque assumenda voluptatibus qui. Ullam rem quidem voluptatem tempore. Consequatur quod officia tenetur dolorem ut.</p><p>Et id omnis assumenda magnam. Provident cumque aut libero architecto neque. Laboriosam exercitationem nemo quo quod earum est.', 'https://picsum.photos/id/880/780/500', 'https://picsum.photos/id/880/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 4),
(24, 'Verhexte Katze', 'Fugit iste dolore iure soluta rerum recusandae. Quia quo quis sit voluptatum est magni est dicta. Voluptas fuga atque vel exercitationem doloremque eligendi corrupti autem.</p><p>Rerum a est nam aspernatur deserunt ipsam. Fugit sint molestias nesciunt magni perspiciatis. Recusandae reprehenderit nisi fugiat ut.</p><p>Temporibus consequatur quasi necessitatibus et culpa omnis. Eos sint laboriosam eum sequi est consequuntur. Suscipit eum voluptatem et id corrupti. Expedita dolorem incidunt illo a.</p><p>Quos quod nihil dolore est exercitationem minus aut. Iure laboriosam officiis sed aut voluptatem minima. Consequatur ducimus omnis et. Et quae qui quasi dolorem optio.</p><p>Quo totam laborum labore expedita eligendi rem dolorum. Sunt voluptas ullam sequi corporis incidunt perferendis. Repudiandae nostrum sit sunt est neque inventore. Aut dolorum sit repellat beatae doloribus qui itaque.</p><p>Qui nam ab consequatur. Rerum cumque deleniti error possimus sunt.</p><p>Optio nihil dolorem et hic ut. Aut nihil iure vero. Dignissimos ut ducimus voluptatibus optio odio repudiandae dolore. Vel velit fuga asperiores.</p><p>Vel aut quisquam est ipsa delectus et sit vel. Excepturi corrupti voluptatem accusantium tempore accusamus in quod.', 'https://picsum.photos/id/631/780/500', 'https://picsum.photos/id/631/125/125', '2024-01-19 10:33:10', '2024-01-19 10:33:10', 5),
(25, 'Verfluchte Bluetooth-Mausi', 'Eveniet vel magnam earum dolor maiores nihil ad. Aut sit perspiciatis aperiam id. Possimus dolore qui accusamus ipsum. Dolorem dolores voluptas quis corrupti consequatur.</p><p>Suscipit voluptatibus accusamus excepturi sint repellendus. Iste dolor possimus ullam laboriosam. Alias nesciunt sit consequatur laboriosam est iste eos.</p><p>Aliquam labore et voluptas perspiciatis velit exercitationem laboriosam. Reprehenderit nihil porro sed. Occaecati alias facere aut id rerum. Iure nulla iure accusamus laborum quasi nesciunt rerum.</p><p>Id ut voluptas et et in illo. Non explicabo rerum maiores sunt eligendi. Nam qui repellat iste accusamus.</p><p>Itaque voluptatibus ea autem quas enim et rerum nihil. Non nulla illum ut dolores rerum ut.</p><p>Est rerum sunt rerum nobis pariatur ut. Et magni cum repellat consequuntur consequatur vitae. Tempora atque voluptatem quos. Praesentium aliquam veritatis consequatur id temporibus.</p><p>Est aliquam omnis quod necessitatibus occaecati assumenda optio repellat. Omnis architecto pariatur velit eveniet numquam doloremque. Ex qui nobis tempore et.</p><p>Et quia sunt quidem quia sit dolorem. Fugiat consectetur tempore enim. Et voluptates qui aliquid veniam aut. Est beatae dolor nesciunt nostrum expedita.</p><p>Voluptatibus natus ut nemo aut quis recusandae odio. Non temporibus dolor ab et eos laudantium. Dolore autem eligendi id est nobis maxime sint. Sint est illum id molestiae fugiat ullam voluptatibus.</p><p>Autem tempora sequi sed animi occaecati quis. Neque vero natus dolores blanditiis omnis. Quo praesentium at cum velit labore. Voluptas facilis aliquam est quas doloremque.</p><p>Repellat id aperiam qui possimus eos dicta. Ut quasi repudiandae qui libero ad eum. Quo omnis et laboriosam asperiores minima nihil veritatis. Soluta ut ut pariatur ut rem aut corrupti.', 'https://picsum.photos/id/407/1280/1500', 'https://picsum.photos/id/407/125/125', '2024-01-19 10:33:10', '2024-01-19 11:57:28', 5),
(28, 'Verfluchte Downloads2', 'Venia22222m itaque similique asperiores voluptas. Nam quas voluptas voluptas molestias molestiae et. Voluptatem fugit nihil adipisci sapiente.</p><p>Illo iusto et vel dolor fugit. Corporis suscipit voluptas cum aut quod deleniti excepturi. Debitis dicta magni et cumque soluta culpa.</p><p>Ipsam qui eum voluptas voluptas quas voluptas. Vitae blanditiis qui adipisci qui. Tempore occaecati voluptas cum omnis temporibus aut.</p><p>Rerum repellat quod et sapiente accusantium nostrum quae. Aspernatur sunt aliquam ducimus est et rem cum. Vero adipisci beatae aperiam corporis cupiditate.</p><p>Quos ad amet dolores voluptatem esse. Ab molestiae placeat sapiente expedita error.', 'https://picsum.photos/id/756/780/500', 'https://picsum.photos/id/756/300/300', '2024-01-19 10:33:14', '2024-01-19 10:46:05', 4),
(29, 'Verteufelte Aufklebersammlung', 'Molestiae repellat est dolor tempore praesentium et. Maxime animi dolores ut accusamus consequatur quia magnam ad. Debitis repudiandae expedita fuga aut assumenda voluptatum.</p><p>Repellendus cumque quidem aperiam id aliquam amet dicta. Et dignissimos quia fuga. Nihil aut aspernatur quia ullam velit sunt. Facilis magni veritatis dolorem praesentium.</p><p>Magni praesentium ut fugit aperiam sunt minus modi. Minima ad natus at omnis. Placeat qui recusandae suscipit dolor.</p><p>A culpa magnam explicabo veritatis et nemo. Et sapiente minus nobis eligendi provident neque. Quia consequuntur molestiae dolores repellat sint. Libero est dolor qui ad rerum et et.</p><p>Eos cumque rem et deleniti et itaque corporis. Distinctio hic neque ea et.</p><p>Repellat sapiente eveniet rem incidunt velit totam. Dolorem inventore dolore omnis deserunt quasi aut dolorum. Voluptates eius neque ipsam earum sequi non voluptates. Aliquam qui quam molestiae dolorem unde vel.', 'https://picsum.photos/id/144/780/500', 'https://picsum.photos/id/144/125/125', '2024-01-19 10:33:14', '2024-01-19 10:33:14', 1),
(30, 'Verflixte Batterie', 'Omnis excepturi tempore iure ex qui officiis deleniti fuga. Recusandae neque nihil voluptatibus hic. Occaecati asperiores eaque dolorem odit enim corporis.</p><p>Minima vel ea deleniti numquam aut et facere. Aut rem blanditiis dignissimos laborum. Vel impedit in sapiente similique dolores sint.</p><p>Provident quibusdam dolorum molestias qui consequatur expedita fugit. Iste dolorum voluptates iste eveniet. Impedit sed alias tenetur sed voluptatem omnis. Laudantium est unde ea eos et animi ipsa occaecati.</p><p>Fugit repellat possimus minima quasi. Recusandae accusamus tenetur optio asperiores asperiores unde facere. Ea blanditiis possimus qui delectus similique rerum quisquam.', 'https://picsum.photos/id/598/780/500', 'https://picsum.photos/id/598/125/125', '2024-01-19 10:33:14', '2024-01-19 10:33:14', 3),
(31, 'Verhexte Vogelscheuche', 'Neque amet error deleniti sit dolores aliquid. Mollitia vitae voluptas ut quia pariatur tempora. Et voluptate provident voluptas unde aut voluptas dolorem non.</p><p>Dolorem aliquid et inventore nam dolores. Aliquam tenetur voluptas et. Aut fugit dignissimos quo rem aut. Non odio neque perspiciatis.</p><p>Id aspernatur est eius magnam. Nostrum recusandae consequatur aspernatur et earum corporis labore. Autem mollitia quisquam aspernatur beatae debitis. Magni dolorem sunt nostrum consequatur ab.</p><p>In repellendus nihil laboriosam aut voluptatem vitae dolore est. Hic ea quia ad debitis.</p><p>Beatae aut non vel vel. Aperiam qui fugit reprehenderit doloremque eos incidunt ut. Ad vel consequuntur non beatae cum. Delectus qui id earum beatae nesciunt ut consectetur rem.</p><p>Laboriosam et quibusdam eveniet expedita autem. Amet provident in libero amet fuga dolorem. Ex aspernatur repellat et cum.</p><p>Commodi quaerat vero reprehenderit cum iure quia sed. Quia dolorem voluptas iusto nobis voluptatum eos. Enim hic sed rerum nisi aperiam aspernatur dolorum. Saepe qui sed a aut est quaerat soluta.', 'https://picsum.photos/id/657/780/500', 'https://picsum.photos/id/657/125/125', '2024-01-19 10:33:14', '2024-01-19 10:33:14', 5),
(32, 'Verfluchte Tür', 'Eos aperiam rerum eius. Itaque ut rerum modi et facere atque est quis. Ex dignissimos voluptatem sunt et maiores veniam perspiciatis fugiat.</p><p>Suscipit et molestiae sit omnis eum aut. Quia quis cum minus ab. Quod impedit adipisci sed tempora pariatur.</p><p>Incidunt fugit aut voluptatem et esse est a. Voluptas voluptatibus non omnis modi repudiandae rerum consequuntur. Repellat ipsa quo qui. Animi corporis veritatis porro dolorem.</p><p>Repellendus doloremque doloribus velit doloremque dolorem dolorum distinctio. Amet omnis sint voluptatem excepturi provident molestiae. Dolore ex labore esse et quisquam quibusdam dolores. Animi et sit nam laudantium adipisci est et.</p><p>Voluptas omnis consectetur nobis natus. Voluptatum occaecati sit ut laborum minus mollitia modi. Nihil qui vel quisquam ratione aliquam quidem. Accusantium aliquid minus commodi et asperiores.</p><p>Velit recusandae molestiae consequuntur eius. Voluptas natus nulla dolores repellat. Illo dolor quis at numquam reprehenderit.</p><p>Neque commodi ut rerum debitis. Aut tenetur consequuntur incidunt dolor amet tenetur. Placeat harum odit odio. Omnis excepturi numquam necessitatibus omnis provident unde.</p><p>Saepe veniam voluptatem debitis excepturi autem. Saepe sint voluptatum odit nemo ut. Quia et dolores quis totam rem. Voluptas at inventore non ab consequatur vel.</p><p>Voluptate modi eum hic quisquam non mollitia. Dolore reiciendis dicta quo ab quas. Aut expedita qui omnis ut repudiandae. Voluptate vel perspiciatis molestiae maiores exercitationem.', 'https://picsum.photos/id/452/780/500', 'https://picsum.photos/id/452/125/125', '2024-01-19 10:33:14', '2024-01-19 10:33:14', 2),
(33, 'Unerwünschte Kokosmilch', 'Voluptates ut accusantium odit voluptatum earum est. Quia sit nostrum eaque. Voluptatem saepe doloribus ratione quo repellendus sint omnis totam.</p><p>Numquam non voluptatem non ea quam. Maxime quo non velit quaerat. Sit dolores eum sint est. Ut libero quia vero molestias quia maxime deserunt.</p><p>Iste inventore ut optio maxime ipsum cumque. Impedit distinctio fugit quae et. Corporis vero consequatur distinctio quidem quia consequatur recusandae itaque. Quam aut dignissimos debitis voluptatem at quo eos.</p><p>Doloremque quod quis et perferendis ab. Repudiandae et magnam et qui incidunt similique enim voluptas. Consequatur eum dolorum est. Et cum ad nihil aut ut optio.</p><p>Quis accusamus est unde aliquam voluptas ea dolor. Nihil aut ut dolorem voluptatum quae. Quisquam est nihil iste odio non.</p><p>Doloremque in quod error sed fuga et. Voluptatibus quis quas perferendis. Sit repudiandae ea minima fugit rem. Similique nihil neque natus rerum qui tempore.</p><p>Quae magnam expedita esse occaecati et ut. Labore ex est rerum at. Perspiciatis quaerat fugiat ipsam. Vitae consequatur et earum necessitatibus.', 'https://picsum.photos/id/701/780/500', 'https://picsum.photos/id/701/125/125', '2024-01-19 10:33:14', '2024-01-19 10:33:14', 4),
(34, 'Verfluchte Aufklebersammlung', 'Similique repudiandae atque enim dolores eos. Minima sit inventore voluptates non. Accusamus quo molestias ut explicabo. Voluptatum odit ex est voluptate dolorem eum et.</p><p>Et ut molestiae dolorum voluptatibus deleniti molestias voluptatibus optio. Dolorem eaque non atque aut ducimus error dignissimos. Consequatur ab qui natus laborum dolorum.</p><p>Possimus molestiae quisquam fugit enim. Doloribus aliquid sit sunt sapiente excepturi. Omnis sed et autem quas.</p><p>Magni cumque et placeat distinctio voluptas illum. Et molestiae non tempora sint iste. Quia architecto maiores adipisci libero est ullam minima. Temporibus voluptatem quam voluptas voluptate sunt ipsum.</p><p>Quo assumenda velit laudantium dolor consequatur quae dolore. Exercitationem veritatis a molestiae nostrum et et aut odio. Est repudiandae sint ut officia temporibus.</p><p>Nesciunt praesentium sapiente incidunt consequatur eligendi recusandae. Possimus et dolore aut eaque enim.</p><p>Quo praesentium est molestiae aliquam suscipit ut omnis quod. Consectetur in optio ut at enim ut sequi. Nihil consequatur eum nobis quas. Qui quam eveniet facere sed.</p><p>Voluptatem quia quis rem ex. Sit veritatis sint impedit dolorem. Et at accusamus quia ad sunt autem maiores. Velit saepe qui ullam laudantium possimus.</p><p>Qui qui rerum aliquam in nostrum in. Saepe cupiditate quo praesentium quia voluptatem incidunt. Sunt culpa velit minus dolorum veniam debitis molestias est.</p><p>Sed magnam nostrum id accusamus modi. Tempore praesentium unde vero id nobis. Veritatis amet aut iusto aut et omnis. Commodi nihil a error nesciunt est autem dolorem.', 'https://picsum.photos/id/153/780/500', 'https://picsum.photos/id/153/125/125', '2024-01-19 10:33:14', '2024-01-19 10:33:14', 7),
(35, 'Grauenhafte LaravelDatei', 'Et omnis est voluptas architecto aut quae repellendus illum. Voluptate modi sequi necessitatibus beatae. Aliquam rem ex placeat quo quisquam nihil tempora. Voluptatem a non exercitationem sint natus voluptas cum.</p><p>Repellendus aut ullam nobis vero saepe ut. Consequatur necessitatibus aut qui perferendis occaecati quam sit. Accusantium velit et aspernatur voluptatibus beatae explicabo.</p><p>Nam omnis sunt eius id qui quis cupiditate aut. Expedita est quis et minus aut quis ipsam. Provident error rerum qui debitis ducimus ad.</p><p>Sunt voluptatibus explicabo quod cumque dolorem maiores. Unde reiciendis amet est. Fugiat aut amet illo mollitia. Magni rerum neque quaerat quia nesciunt corporis. Totam quibusdam consequatur omnis sequi non voluptatem.</p><p>Voluptas error sunt aspernatur maxime est. Tempore labore rem pariatur non soluta ea libero. Sed maxime impedit eos odit recusandae quos. Consequatur mollitia excepturi qui dicta sunt eum. Quibusdam nulla est quaerat hic.</p><p>Nam voluptatem vero sed voluptatem aperiam. Incidunt consectetur eligendi molestias eius. Illum pariatur ea explicabo optio.</p><p>Et sit aliquam delectus natus. Provident accusamus sunt est consequuntur odio sint. Ut laboriosam illum eum. Dolore et accusantium recusandae repellat inventore.', 'https://picsum.photos/id/665/780/500', 'https://picsum.photos/id/665/125/125', '2024-01-19 10:33:14', '2024-01-19 10:33:14', 3);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `categories`
--
-- Erstellt am: 19. Jan 2024 um 11:32
-- Zuletzt aktualisiert: 19. Jan 2024 um 12:43
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(40) NOT NULL,
  `desc` varchar(200) NOT NULL,
  `icon` varchar(16) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `categories`
--

INSERT INTO `categories` (`id`, `name`, `desc`, `icon`, `created_at`, `updated_at`) VALUES
(1, 'Urlaub', 'Sequi magni rem asperiores excepturi sunt voluptas nulla. Cumque dignissimos aliquam velit in eum.', '🕶️', '2024-01-19 10:33:03', '2024-01-19 10:33:03'),
(2, 'Safe', 'Autem adipisci voluptas qui. Quam voluptatum dolor ab facere. Doloremque et at sit tempore. Harum repellendus beatae dolorem esse illo. Quia accusantium cum unde qui aut consequatur.', '🎗️', '2024-01-19 10:33:03', '2024-01-19 10:33:03'),
(3, 'Hobby', 'Nulla nulla voluptatem et aliquid rerum et quo sapiente. Provident excepturi et quos ea odit consectetur aperiam. Quam a corporis autem assumenda. Labore ut eum sequi cum natus.', '🕶️', '2024-01-19 10:33:03', '2024-01-19 10:33:03'),
(4, 'Outdoor', 'Quasi excepturi natus praesentium tempore enim culpa sint. Velit quia aut debitis dicta veritatis. Natus et voluptatem fugit assumenda. Quos rerum odit vel quis.', '👟', '2024-01-19 10:33:03', '2024-01-19 10:33:03'),
(5, 'Küche', 'Maxime eligendi harum a sed pariatur nisi odit ullam. Qui fugit possimus unde asperiores eligendi quis iure consectetur. Ut eos vero autem inventore amet.', '🎓', '2024-01-19 10:33:03', '2024-01-19 10:33:03'),
(6, 'Amazoni', 'Ducimu898989s eveniet ut eum voluptatem rerum quaerat. Dolorem dolores dolor similique. Cum ducimus voluptate nihil quidem harum architecto. Repellendus quaerat nihil molestias dolore.', '👜2', '2024-01-19 10:33:03', '2024-01-19 10:35:05'),
(7, 'Haus', 'Quia sapiente aut sed eligendi et. Praesentium sunt eligendi minus commodi explicabo laboriosam autem. Eos sunt quis iusto rem. Animi ut aperiam odit inventore quisquam modi ad. Et laborum molestias i', '👚', '2024-01-19 10:33:03', '2024-01-19 10:33:03');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `failed_jobs`
--
-- Erstellt am: 19. Jan 2024 um 11:32
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `migrations`
--
-- Erstellt am: 19. Jan 2024 um 11:32
-- Zuletzt aktualisiert: 19. Jan 2024 um 11:32
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2024_01_18_125957_create_articles_table', 1),
(7, '2024_01_18_130123_create_categories_table', 1),
(8, '2024_01_18_130845_alter_article_table_add_catid_foreign_key', 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `password_resets`
--
-- Erstellt am: 19. Jan 2024 um 11:32
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `password_reset_tokens`
--
-- Erstellt am: 19. Jan 2024 um 11:32
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `personal_access_tokens`
--
-- Erstellt am: 19. Jan 2024 um 11:32
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--
-- Erstellt am: 19. Jan 2024 um 11:32
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `articles_catid_foreign` (`catid`);

--
-- Indizes für die Tabelle `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indizes für die Tabelle `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indizes für die Tabelle `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indizes für die Tabelle `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `articles`
--
ALTER TABLE `articles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT für Tabelle `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT für Tabelle `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT für Tabelle `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_catid_foreign` FOREIGN KEY (`catid`) REFERENCES `categories` (`id`);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
