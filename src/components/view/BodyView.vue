<template>

    <div class="body-view">
    <header>
      <h1>Demo Webpage</h1>
    </header>

    <main>
      <p>Welcome to your webpage! Customize this area with your content.</p>
    </main>
    </div>
  
</template>

<script>
export default {
    name: 'BodyView'
}
</script>

<style>

.body-view {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh; /* 100% of the viewport height */
  background-image: linear-gradient(180deg, #f20e69a3, rgb(250, 15, 117));
  color: #333;
  display: flex;
  flex-direction: column;
}

  header {
    
    color: #000;
    padding: 10px;
    text-align: center;
  }

  main {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 1px solid #000;
  }

  p{
    color: #000;
    text-align: center;
  }
</style>