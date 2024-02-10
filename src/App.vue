<template>
  <div v-if="isAuthenticated">
      <Connected />
  </div>
  <div v-else>
      <LoginScreen />
  </div>
</template>

<script>
import Connected from './components/Connected.vue'
import LoginScreen from './components/LoginScreen.vue'

export default {
  components: { Connected, LoginScreen},
  data() {
    return {
      isAuthenticated: true
    }
  },
  methods: {
    toggleConnection() {
      this.isAuthenticated = !this.isAuthenticated
    }
  },
}
</script>

<style>
  body {
      color: white;
  }
</style>
