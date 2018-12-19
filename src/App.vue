<template>
  <div id="app">
    <h1>Netlify Playground</h1>
    <div class="main">
      <p>This is to test some of the functions available on Netlify.</p>
      <p>Testing Netlify deploy previews.</p>
      <p>Split test: Master</p>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
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
