<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'




export default {
  components: {
    AppHeader,
    AppFooter,
   

  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <div class="background-container">
    <AppHeader />
    <main>
      <router-view></router-view>
    </main>
  </div>
    <AppFooter />

</template>

<style lang="scss">
.background-container {
  min-height: 100vh;
  background-image: url('../src/assets/img/sfondo53.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>
