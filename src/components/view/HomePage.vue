<template>
  <div>
    <NavBar />
    <BodyView />
    <FooterView />
  </div>
</template>

<script>
import NavBar from './components/view/Navbar.vue';
import FooterView from './components/view/FooterView.vue';
import BodyView from './components/view/BodyView.vue';

export default {
  name: 'HomePage',
  components: {
    NavBar,
    BodyView,
    FooterView,
  }
}
</script>

<style>

</style>