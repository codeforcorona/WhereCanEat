<template>
  <div class="container">
    <NavBar/>
    <h1>This is index.vue</h1>
    <Button type='primary'>iView Button</Button>
    <h2>{{todo}}</h2>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';

export default {
  data: function () {
    return {
      todo: ''
    }
  },
  components: {
    Logo,
    NavBar
  },
  async created() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      this.todo = res.data;
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  @apply flex-col min-w-full items-center justify-center
}
</style>
