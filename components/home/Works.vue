<template>
  <div>
    <div class="wrap" id="works">
      <div class="content">
        <h2 class="effect up">WORKS</h2>
        <div class="line effect up"></div>
        <div class="row">
          <div class="col-12 col-lg-4" v-for="(work,key) in $store.state.works.works" :key="key">
            <div class="box effect up" :data-delay="100 * key + 100">
              <img :src="'https://storage.googleapis.com/honeycomb-star.appspot.com/images/' + work.image"
                   class="img-fluid effect up" :data-delay="200 * key + 100" />
              <h3 class="effect up" :data-delay="200 * key + 100">{{ work.title }}</h3>
              <p style="white-space: pre-wrap;" class="effect up" :data-delay="200 * key + 100">{{ work.content.replace(/\\n/g, '\n') }}</p>
            </div>
          </div>
        </div>
        <div class="text-right">
          <nuxt-link to="/works" class="button effect lr">過去の仕事一覧を見る</nuxt-link>
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
