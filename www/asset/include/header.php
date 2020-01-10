<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <?php
  if( !empty($device) && $device === 'mobile' ){
    echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
  }else{
    echo '<meta name="viewport" content="width=1280">';
  }
  ?>
  <meta name="format-detection" content="telephone=no,address=no,email=no">
  <meta name="description" content="<?php e(@$description, 'デスクリプションが入ります。') ?>">
  <?php if (!empty($keywords)):?>
  <meta name="keywords" content="<?php e(@$keywords, 'キーワードが入ります。') ?>">
  <?php endif?>

  <!-- Facebook start -->
  <?php if ($_SERVER['REQUEST_URI'] == '/'): ?>
  <meta property="og:type" content="website">
  <?php else: ?>
  <meta property="og:type" content="article">
  <?php endif; ?>
  <meta property="og:title" content="<?php e(@$title, 'タイトルが入ります。', true) ?>">
  <meta property="og:url" content="<?php echo protocol().'://'.$_SERVER['HTTP_HOST'].htmlspecialchars($_SERVER['REQUEST_URI'],ENT_QUOTES); ?>">
  <meta property="og:image" content="<?php echo protocol().'://'.$_SERVER['HTTP_HOST'].(!empty($fbimage) ? $fbimage : '/asset/image/thumb_fb.png'); ?>">
  <meta property="og:description" content="<?php e(@$description, 'デスクリプションが入ります。') ?>">
  <meta property="og:site_name" content="タイトルが入ります。">

  <!-- Include -->
  <!-- <link rel="icon" href="/asset/image/favicon.ico">
  <link rel="apple-touch-icon" href="/asset/image/icon.png"> -->
  <link rel="stylesheet" href="/asset/css/style.css?v=<?php echo $cache_version;?>">
  <title><?php e(@$title, 'タイトルが入ります。', true) ?></title>
</head>

<body ontouchstart="" <?php if (!empty($bodyID)) echo 'id="'.$bodyID.'"'; ?>>

  <!-- Application
  ───────────────────────────────── -->
  <div id="application" class="application" v-cloak>

    <!-- Header
    ───────────────────────────────── -->
    <header class="header">
      <nav class="header__inner" role="navigation">
      </nav>
    </header>
