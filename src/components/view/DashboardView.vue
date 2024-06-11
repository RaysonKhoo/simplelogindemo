<!-- Dashboard.vue -->
<template>
  
  <div class="dashboard">
    <button class="logout" @click="logout">logout</button>
    <div class="dashboard-content">
        <h2>Welcome to the Dashboard!</h2>
    </div>
    <!-- Add your dashboard content here -->
    <FooterView />
  </div>
</template>

<script>
import FooterView from './FooterView.vue';
export default {
  name: 'DashboardPage',
  components:{
    FooterView,
  },
  methods:{
    logout(){
        this.$router.push('/');
        sessionStorage.setItem('isAuthenticated', 'false');
    }

  }
};
</script>

<style scoped>
/* Add some styling for your dashboard if needed */
.logout{
    float: right;
    border-radius: 10px;
    margin-right: 10px;

}

.dashboard-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh; /* Set the height to 100% of the viewport height */
}

.dashboard{
  font-size: 16px; /* Adjust the font size */
  color: #333; /* Adjust the text color */
}
</style>