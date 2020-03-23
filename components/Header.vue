<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" type="dark" id="header" class="hidden">
      <b-navbar-brand to="/" class="navbar-brand effect-fade">
        <img src="/images/star.png" />
        HONEYCOMB-STAR
        <div class="small">吉田シゲロウ オフィシャルウェブサイト</div>
      </b-navbar-brand>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="effect-fade" to="/">HOME</b-nav-item>
          <b-nav-item class="effect-fade" :to="$parent.to.about">ABOUT</b-nav-item>
          <b-nav-item class="effect-fade" :to="$parent.to.works">WORKS</b-nav-item>
          <b-nav-item class="effect-fade" to="/">BLOG</b-nav-item>
          <b-nav-item class="effect-fade" to="/">SHOP</b-nav-item>
          <b-nav-item class="effect-fade" :to="$parent.to.contact">CONTACT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
if (process.client) {
  window.onload = () => {
    scrollElementsAnimation();
  }

  window.addEventListener( "scroll", function() {
    scrollHeaderAnimation();
    scrollElementsAnimation();
  });
}

// スクロール時、ヘッダーのスタイルを変更
var scrollHeaderAnimation = () => {
  console.log('alsdfjlajslfdkj')
  var headerElement = document.getElementById( "header" );
  var rect = headerElement.getBoundingClientRect() ;
  var y = rect.top + window.pageYOffset;

  if (y > 0) {
    headerElement.classList.remove('hidden');
  } else {
    headerElement.classList.add('hidden');
  }
}

// スクロール時、要素をふわっと出現
var scrollElementsAnimation = () => {
  document.querySelectorAll('.effect-fade').forEach(element => {
    var elemPos = element.getBoundingClientRect().top + window.pageYOffset;
    var scroll = window.pageYOffset;
    var windowHeight = window.innerHeight;

    if (scroll > elemPos - windowHeight) {
      setTimeout(() => {
        element.classList.add('effect-scroll');
      }, 200);
    }
  });
}
</script>