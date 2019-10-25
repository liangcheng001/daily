<template>
    <div class="nav">
        <input type="text" v-model="content">
        <button @click="submit">sumbit</button>
    </div>
</template>

<script>
    export default {
        name: "my-nav",
    data(){
      return{
          content:'',
      }
    },
    methods:{
      submit(){
          this.$emit('insert',this.content);
        }
    }
  }
</script>

<style scoped>
    @import url(https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css);
</style>