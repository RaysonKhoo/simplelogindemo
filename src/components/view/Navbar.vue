<template>
  <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid d-flex justify-content-end">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="text-white text-decoration-none" :to="{name: 'Login'}">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class ="text-white text-decoration-none" to="/Register">Register</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
/* Add your global styles here if needed */
.navbar{
  padding:10px 0 10px 0;
}
.navbar-toggler{
  margin: 0 0 0 0;
}
.navbar-nav {
  list-style: none;
  margin: 0;
  padding: 10px;
  display: flex;
}

.nav-item {
  margin-right: 15px; /* Adjust the spacing between items */
  text-decoration: none;
  color: white;
}
.nav-item:hover {
 border-bottom: 2px solid #5411ee; 
}

</style>

