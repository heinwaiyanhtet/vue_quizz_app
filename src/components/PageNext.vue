<template>
  <button class="btn btn-outline-info  mt-1 text-decoration-none float-end"
          @click="next()"
  >
    <slot/>
    <font-awesome-icon icon="fa-solid fa-forward" class="ms-1"/>
  </button>
</template>

<script>
export default {
  name:"PageName",
  methods:{
    next() {
      console.log(this.$store.state.sourceData.length)
      let currentRouteId = Number(this.$route.params.id);
      const QuestionLength = Number(this.$store.state.sourceData.length);
      if(currentRouteId === QuestionLength)
        return this.$router.push({ name: "congratulation"});
      currentRouteId++;
      return this.$router.push({ name: "Quiz", params: { id: `${currentRouteId}` } });
    }
  }
}
</script>

<style scoped>

</style>