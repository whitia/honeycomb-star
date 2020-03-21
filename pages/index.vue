<template>
  <div>
    <Header />
    <Jumbotron />
    <About />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Jumbotron from '~/components/Jumbotron'
import About from '~/components/About'

export default {
  components: {
    Header: Header,
    Jumbotron: Jumbotron,
    About: About
  }
}
</script>
