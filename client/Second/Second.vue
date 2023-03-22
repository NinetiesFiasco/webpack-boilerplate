<template>
  <div>Second</div>
  <button @click='ask'>Ask</button>
  {{answer}}
</template>

<script>
export default {
  name: 'Second',
  data() {
    return {
      answer: ''
    }
  },
  methods: {
    async ask() {
      const answer = await fetch("/test")
      this.answer = await answer.text();
    }
  }
}
</script>

<style scoped>
div {
  color: red
}
</style>