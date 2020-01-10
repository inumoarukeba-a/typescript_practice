<?php
  require_once substr($_SERVER['SCRIPT_FILENAME'], 0, -strlen($_SERVER['SCRIPT_NAME'])).'/asset/include/init.php';

  $description = '';
  $keywords = '';
  $fbimage = '';
  $title = '';
  $pankuzu = array(
    'トップページ' => '/'
  );
?>
<?php include 'header.php'; ?>

<main class="main" role="main">
  <!-- Test
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
  <section class="test -inview">
    <header class="test__header">
      ありがとう
    </header>
    <p class="test__text">
      どういたしまして
    </p>
  </section>

  <!-- Test
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
  <section class="test">
    <section class="test__section">
      高さ150px固定<br>
      上下マージンが可変しています。<br>
      （気づきにくいかもですが😂）
    </section>
    <section class="test__section">
      高さ150px固定<br>
      上下マージンが可変しています。
    </section>
    <section class="test__section">
      高さ150px固定<br>
      上下マージンが可変しています。
    </section>
  </section>

  <!-- Test
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
  <section class="test">
    <header class="test__header">
      使い方
    </header>
    <h2 class="test__title">
      初期設定
    </h2>
    <code class="test__code">
      ▼ _variables.scss<br><br>
      // Canvas Size<br>
      $pc-basis: 1366px;<br>
      $sp-basis: 375px;<br><br>
      // PC Responsive Width<br>
      $max-basis: 1680px;<br>
      $min-basis: 1024px;
    </code>
    <p class="test__text">
      ここの数値変えてください。<br>
      $pc-basisが、PCデザインデータのカンバスサイズ<br>
      $sp-basisが、SPデザインデータのカンバスサイズ<br>
      $max-basisが、PCの最大コンテンツ幅です。<br>
      $min-basisが、SPの最小コンテンツ幅です。
      $min-basis〜$max-basisの間で可変設定を自動で設定します。<br>
      早い話が、$min-basisを768pxに設定するとフルレスポンシブ完成です！（ただし、12px以下の文字が発生する可能性高いです。）
    </p>
    <h2 class="test__title">
      CSSでの指定方法
    </h2>
    <code class="test__code">
      margin-top: rem(80);<br>
      font-size: rem(16);
    </code>
    <p class="test__text">
      上記のようにデザインデータの数値を入力するだけ🥳<br>
      Special Thanks : 宮崎さん
    </p>
  </section>
</main>

<?php // include 'modal.php'; ?>
<?php include 'footer.php'; ?>
