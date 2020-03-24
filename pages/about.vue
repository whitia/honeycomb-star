<template>
  <div>
    <Header :to="to" />
    <About />
    <Footer :to="to" />
  </div>
</template>

<script>
import Header from '~/components/Header'
import About from '~/components/About'
import Footer from '~/components/Footer'

export default {
  components: {
    Header: Header,
    About: About,
    Footer: Footer
  },
  data() {
    return {
      to: {
        about: '/about',
        works: '/works',
        contact: '/contact'
      }
    }
  }
}
</script>
