<template>
  <div id="app">
    <p class="powered">Powered by Netlify</p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
body {
  margin: 0;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}
</style>
