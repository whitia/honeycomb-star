<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" type="dark" id="header" class="hidden">
      <b-navbar-brand to="/" class="navbar-brand">
        <img src="/images/star.png" />
        HONEYCOMB-STAR
        <div class="small">吉田シゲロウ オフィシャルウェブサイト</div>
      </b-navbar-brand>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">HOME</b-nav-item>
          <b-nav-item to="#about">ABOUT</b-nav-item>
          <b-nav-item to="#works">WORKS</b-nav-item>
          <b-nav-item to="#blog">BLOG</b-nav-item>
          <b-nav-item to="#shop">SHOP</b-nav-item>
          <b-nav-item to="#contact">CONTACT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
if (process.client) {
  // スクロール時、ヘッダーのスタイル変更
  window.addEventListener( "scroll", function() {
    var headerElement = document.getElementById( "header" );
    var rect = headerElement.getBoundingClientRect() ;
    var y = rect.top + window.pageYOffset;

    if (y > 0) {
      headerElement.classList.remove('hidden');
    } else {
      headerElement.classList.add('hidden');
    }
  });
}
</script>