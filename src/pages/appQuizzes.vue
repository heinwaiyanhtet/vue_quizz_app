<template>
    <div class="container">
        <div class="row justify-content-center">
            <AppQuizz :sourceData="sourceData"/>
        </div>
    </div>
</template>

<script>
    import AppQuizz from "@/components/AppQuizz";
    import { localStorageGetCheck , localStorageSetCheck} from "@/helpers";
    export default {
      components: {AppQuizz},
      created() {
        if(localStorageGetCheck('quizzes'))
          return this.$store.commit('SET_QUIZZES',localStorageGetCheck('quizzes'))
        else
           return localStorageSetCheck('quizzes',this.$store.state.sourceData)
      },
      computed:{
        sourceData(){
          return this.$store.state.sourceData;
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>