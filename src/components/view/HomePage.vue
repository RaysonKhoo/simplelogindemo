<template>
  <div>
    <NavBar />
    <BodyView />
    <FooterView />
  </div>
</template>

<script>
import NavBar from './Navbar.vue';
import FooterView from './FooterView.vue';
import BodyView from './BodyView.vue';

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