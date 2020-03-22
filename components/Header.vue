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
          <b-nav-item to="/">ABOUT</b-nav-item>
          <b-nav-item to="/">INFO</b-nav-item>
          <b-nav-item to="/">WORKS</b-nav-item>
          <b-nav-item to="/">BLOG</b-nav-item>
          <b-nav-item to="/">SHOP</b-nav-item>
          <b-nav-item to="/">CONTACT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
if (process.client) {
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