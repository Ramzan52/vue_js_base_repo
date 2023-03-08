<template>
  <div>
    <h1>My Vue.js App</h1>
    <div id="my-react-app"></div>
  </div>
</template>

<script>
import { registerApplication, start } from 'single-spa';

export default {
  name: 'App',
  mounted() {
  System.import('my-react-app').then(() => {
  console.log('React.js application loaded');
});
  },
};
</script>
