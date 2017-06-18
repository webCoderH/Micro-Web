<template>
  <div id="home">
    <h1>Hello {{name}}!</h1>
    <h2>You have fucked bitch for {{count}} times.</h2>
    <div class="buttons">
      <button @click="addCount">Fuck Bitch once</button>
      <button @click="addCountAsync">Fuck Bitch once for 1 second</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import * as types from 'src/store/mutation-types'

  export default {
    computed: {
      ...mapState('home', [
        'name',
        'count'
      ])
    },
    methods: {
      ...mapActions('home', [
        types.ADD_COUNT_ASYNC
      ]),
      ...mapMutations('home', [
        types.ADD_COUNT
      ])
    }
  }
</script>

<style scoped lang="sass">
  @import './style.scss';
</style>
