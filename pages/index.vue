<template>
  <div>
    <Header />
    <Cover />
    <About />
    <Works />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Cover from '~/components/home/Cover'
import About from '~/components/home/About'
import Works from '~/components/home/Works'
import Contact from '~/components/home/Contact'

export default {
  components: {
    Header: Header,
    Cover: Cover,
    About: About,
    Works: Works,
    Contact: Contact,
    Footer: Footer
  }
}
</script>
