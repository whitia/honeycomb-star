<template>
  <div>
    <div class="wrap" id="works">
      <div class="content">
        <h2>WORKS</h2>
        <div class="line"></div>
        <div class="box">
          <div v-for="(work,key) in $store.state.works.works" :key="key">
            <img :src="'https://storage.googleapis.com/honeycomb-star.appspot.com/images/' + work.image" class="img-fluid" />
            <h3>{{ work.title }}</h3>
            <p style="white-space: pre-wrap;">{{ work.content.replace(/\\n/g, '\n') }}</p>
          </div>
        </div>
        <div class="text-right">
          <nuxt-link to="/works" class="button">すべての実績を見る</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('works/fetchWorks', { limit: 3 })
  }
}
</script>
