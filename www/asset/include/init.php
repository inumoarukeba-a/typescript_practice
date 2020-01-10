<?php

$cache_version = '1'; // CSS or JSのキャッシュ対策用バージョン番号

// インクルードパス追加
set_include_path(get_include_path().PATH_SEPARATOR.dirname(__FILE__));

function e($value, $default = '', $add_flag = false) {
  if (!empty($value)) {
    if ($add_flag && !empty($default)) {
      echo $value.' | '.$default;
    } else {
      echo $value;
    }
  } else {
    echo $default;
  }
}

// パンくずリスト出力
global $pankuzu;
function pankuzu($pankuzu=null) {
  if (empty($pankuzu)){
    global $pankuzu;
  }

  if (!empty($pankuzu)){
    $pos = 1;
    echo '<ol class="topicpath" itemscope itemtype="http://schema.org/BreadcrumbList">'. "\n";
      foreach ($pankuzu as $title => $url){
        echo '<li class="topicpath__item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">'."\n";

        if (is_int($title)) { // タイトルのみの指定
          $title = $url;
          $url = null;
        }
        if (empty($url) && $pos==count($pankuzu)){ // 最下層かつURLの指定がない
          $url = $_SERVER['REQUEST_URI']; // 現在地のURLを取得
        }

        $title = htmlspecialchars($title,ENT_QUOTES);
        $url = htmlspecialchars($url,ENT_QUOTES);

        echo '<a class="topicpath__link" itemprop="item" href="'.$url.'"><span itemprop="name">'.$title.'</span></a>'."\n";
        echo '<meta itemprop="position" content="'.$pos.'">'."\n";
        echo '</li>'."\n";

        $pos++;
      }
    echo '</ol>'."\n";
  }
}

function protocol(){
  return isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']==='on' ? 'https' : 'http';
}

//端末判定
$ua = mb_strtolower($_SERVER['HTTP_USER_AGENT']);
$device = '';
if (
    (strpos($ua, 'windows') !== false && strpos($ua, 'touch') !== false && strpos($ua, 'tablet pc') === false) ||
    (strpos($ua, 'ipad') !== false) ||
    (strpos($ua, 'android') !== false && strpos($ua, 'mobile') === false) ||
    (strpos($ua, 'firefox') !== false && strpos($ua, 'tablet') !== false) ||
    (strpos($ua, 'kindle') !== false) ||
    (strpos($ua, 'silk') !== false) ||
    (strpos($ua, 'playbook') !== false)

) {
    $device = 'tablet';
} elseif (
    (strpos($ua, 'windows') !== false && strpos($ua, 'phone') !== false ) ||
    (strpos($ua, 'iphone') !== false) ||
    (strpos($ua, 'ipod') !== false) ||
    (strpos($ua, 'android') !== false && strpos($ua, 'mobile') !== false) ||
    (strpos($ua, 'firefox') !== false && strpos($ua, 'mobile') !== false) ||
    (strpos($ua, 'blackberry') !== false)
) {
    $device = 'mobile';
}

// imgタグ
function img($s,$w,$h,$a,$sp,$c){
  $s = explode('.', $s);
  $wh = ' width="'.$w.'"'.' height="'.$h.'"';
  $src = '/asset/image/dummyimage.php?width='.$w.'&height='.$h;

  if(empty($w)) $wh = '';

  echo '<picture><source media="(min-width: 768px)" data-srcset="'.$s[0].'.'.$s[1].' 1x,'.$s[0].'@2x.'.$s[1].' 2x">';
  if(!empty($sp)){
    if($sp==='dummy') {
      echo '<source media="(max-width: 767.9px)" data-srcset="/asset/image/dummyimage.php?width=1&height=1">';
    } elseif($sp==='2x') {
      echo '<source media="(max-width: 767.9px)" data-srcset="'.$s[0].'.'.$s[1].' 1x,'.$s[0].'@2x.'.$s[1].' 2x">';
    } elseif($sp==='sp') {
      echo '<source media="(max-width: 767.9px)" data-srcset="'.$s[0].'@sp.'.$s[1].'">';
    }
  } else{
    echo '<source media="(max-width: 767.9px)" data-srcset="'.$s[0].'.'.$s[1].'">';
  }
  echo '<img class="lazyload '.$c.'" src="'.$src.'" data-src="'.$s[0].'.'.$s[1].'" alt="'.$a.'"'.$wh.'></picture>';
}

function imgSingle($s,$w,$h,$a,$c){
  $wh = ' width="'.$w.'"'.' height="'.$h.'"';
  $src = '/asset/image/dummyimage.php?width='.$w.'&height='.$h;
  if(empty($w)) $wh = '';

  echo '<picture>
  <img class="lazyload '.$c.'" src="'.$src.'" data-src="'.$s.'" alt="'.$a.'"'.$wh.'></picture>';
}
