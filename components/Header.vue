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
          <b-nav-item to="#">HOME</b-nav-item>
          <b-nav-item :to="$parent.to.about">ABOUT</b-nav-item>
          <b-nav-item :to="$parent.to.works">WORKS</b-nav-item>
          <b-nav-item to="/">BLOG</b-nav-item>
          <b-nav-item to="/">SHOP</b-nav-item>
          <b-nav-item :to="$parent.to.contact">CONTACT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
