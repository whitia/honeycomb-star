<template>
  <div>
    <Header />
    <Cover />
    <About />
    <Works />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Cover from '~/components/Cover'
import About from '~/components/About'
import Works from '~/components/Works'

export default {
  components: {
    Header: Header,
    Cover: Cover,
    About: About,
    Works: Works
  }
}
</script>
