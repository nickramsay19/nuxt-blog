<template>
  <div id="index">
    <h1>Posts</h1>

    <div class="card" v-for="(post, key) in posts" @click="openPost(key)">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ post.date }}</h6>
        <p class="card-text">{{ shortenText(post.content) }}</p>
        <a href="#" class="btn btn-primary">Open</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {

  data(){
    return {
    }
  },

  computed: {
    posts(){
      return this.$store.state.posts
    }
  },

  methods: {
    shortenText(text){
      return text.substring(0,100) + '...'
    },
    openPost(id){
      this.$router.replace({ path: '/' + id.toString()})
    }
  }
}
</script>


<style>

  .card{
    margin-bottom: 10px;
  }

  .card:hover{
    border-color: black;
  }

</style>
