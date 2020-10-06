<template>
  <div class="weather">
    The weather goes here
  </div>
</template>

<script>
export default {
  name: 'Weather',
  props: {
    apiKey: String,
    zipCode: String,
    refreshRate: Number, // In Minutes
  },
  methods: {
    getCurrentConditions: () => {
        
    }
  }
}
</script>

<style lang="sass" scoped>
    
</style>