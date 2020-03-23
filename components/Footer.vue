<template>
  <div>
    <div class="footer">
      <div class="mb-2">
        <nuxt-link to="#">HOME</nuxt-link>
        <nuxt-link :to="$parent.to.about">ABOUT</nuxt-link>
        <nuxt-link :to="$parent.to.works">WORKS</nuxt-link>
        <nuxt-link to="/">BLOG</nuxt-link>
        <nuxt-link to="/">SHOP</nuxt-link>
        <nuxt-link :to="$parent.to.contact">CONTACT</nuxt-link>
      </div>
      <div>Copyright &copy; 2020 SIGERO YOSHIDA All Rights Reserved.</div>
    </div>
  </div>
</template>
