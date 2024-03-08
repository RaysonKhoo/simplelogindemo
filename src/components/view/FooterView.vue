<template>
  <footer>
    <div class="container">
      <p>&copy; {{ currentYear }} Your Company. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterView', // Use a multi-word name
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
}
</script>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
