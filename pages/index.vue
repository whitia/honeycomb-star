<template>
  <div>
    <Header :to="to" />
    <Cover />
    <About />
    <Works />
    <Contact />
    <Footer :to="to" />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Cover from '~/components/home/Cover'
import About from '~/components/home/About'
import Works from '~/components/home/Works'
import Contact from '~/components/home/Contact'
import Footer from '~/components/Footer'

export default {
  components: {
    Header: Header,
    Cover: Cover,
    About: About,
    Works: Works,
    Contact: Contact,
    Footer: Footer
  },
  data() {
    return {
      to: {
        about: '#about',
        works: '#works',
        contact: '#contact'
      }
    }
  }
}
</script>
