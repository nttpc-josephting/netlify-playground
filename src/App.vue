<template>
  <div id="app">
    <h1>Netlify Playground</h1>
    <p class="main">This is to test some of the functions available on Netlify.</p>
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
  flex-direction: column;
  align-items: center;
}

.main {
  flex: 1;
}
</style>
