<template>
  <div id="contact">
    <div v-if="error == false">
      <h1>{{ title }}</h1>
      <small class="text-muted">{{ date }}</small>
      <p>
        {{ content }}
      </p>
    </div>
    <h1 v-else>The post you requested could not be found.</h1>
  </div>
</template>

<script>

export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data(){
    return {
      error: false,
      title: '',
      date: '',
      content: ''
    }
  },
  created(){
    let id = this.$route.params.id

    let posts = this.$store.state.posts

    console.log('id: ' + id.toString() + ', posts.length: ' + posts.length.toString())

    if(id <= posts.length){
      this.title = posts[id].title
      this.date = posts[id].date
      this.content = posts[id].content
    }
    else{
      console.log('err')
      this.error = true
    }
  }
}
</script>

<style>

</style>
