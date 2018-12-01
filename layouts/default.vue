<template>
  <div>
    <nav-bar></nav-bar>
    <br>
    <section class="container">
      <nuxt/>
    </section>
  </div>
</template>

<script>

import navBar from '@/components/navbar'

export default {
  components: {
    navBar
  }
}
</script>

<style>
.container{
  width: 50%;
}
</style>
