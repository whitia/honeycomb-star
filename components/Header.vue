<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" type="dark">
      <b-navbar-brand to="/" class="navbar-brand">
        <img src="/images/shooting-star.png" />
        HONEYCOM-START
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
