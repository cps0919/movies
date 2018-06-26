<template>
  <div class="soon">
    <wellreceived :theaters="soon"></wellreceived>
  </div>
</template>

<script>
  import wellreceived from "./well-received.vue"
  export default {
    props: ["soon"],
    data(){
      return {}
    },
    components: {
      wellreceived
    }/*,
     created() {
     this.$axios.get("api/v2/movie/in_theaters").then((res) => {
     res = res.data
     this.soon = res
     }).catch((error) => {
     console.log(error)
     })
     }*/
  }
</script>

<style scoped>

</style>
