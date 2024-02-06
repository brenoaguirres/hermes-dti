<template>
  <div v-if="isConnected">
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
      isConnected: true
    }
  },
  methods: {
    toggleConnection() {
      this.isConnected = !this.isConnected
    }
  },
}
</script>

<style>
  body {
      color: white;
  }
</style>
