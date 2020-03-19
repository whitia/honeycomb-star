<template>
  <div>
    <Header />
    <Jumbotron />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Jumbotron from '~/components/Jumbotron'

export default {
  components: {
    Header: Header,
    Jumbotron: Jumbotron
  }
}
</script>
