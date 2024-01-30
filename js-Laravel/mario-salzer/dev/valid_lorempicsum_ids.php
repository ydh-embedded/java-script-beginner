<?php

/**
 * api: php
 * title: lorem picsum
 * description: verify avail IDs
 * version: 0.1
 * category: generate
 *
 * für zuverlässige factory und vermeidung von img-placeholdern
 */

$ids = [];

for ($p = 1; $p < 50; $p++) {
    $r = json_decode(
        file_get_contents("https://picsum.photos/v2/list?page=$p&limit=100"),
        TRUE
    );
    $add = array_column($r, "id");
    $ids = array_merge($ids, $add);
}
$ids = array_map("intval", $ids);
$src = json_encode($ids);
file_put_contents(__DIR__ . "/lpids.php", $src);
print($src);
