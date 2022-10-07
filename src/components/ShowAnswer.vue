<template>
     <button class="btn btn-outline-primary mt-1 text-decoration-none"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
          >
            <font-awesome-icon icon="fa-solid fa-eye" />
            Show Answer </button>
      <div class="modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body text-center">
              <img :src="AnswerImg" class="answerImg" alt="">
            </div>
          </div>
        </div>
</div>
</template>

<script>
import { findById } from '@/helpers';
export default {
    computed: {
      AnswerImg() {
        return findById(this.$store.state.sourceData, this.$route.params.id).image.answerImage;
      },
    },
}
</script>

<style scoped>
  .answerImg{
    width:99%;
    height:99%;
  }
  .modal-body{
    padding:5px 1px;
  }
</style>