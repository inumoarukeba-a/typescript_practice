<?php
//色の指定
$red = 255;
$green = 255;
$blue = 255;
// $red = 0;
// $green = 0;
// $blue = 0;

//縦横の指定
if(!empty($_GET['width'])){$width = $_GET['width'];}else{$width = '100';}
if(!empty($_GET['height'])){$height = $_GET['height'];}else{$height = '100';}

$im = imagecreatetruecolor($width, $height);

$color = imagecolorallocate($im, $red, $green, $blue);
imagefill($im, 0, 0, $color);

header('Content-type: image/png');
imagepng($im);
imagedestroy($im);
