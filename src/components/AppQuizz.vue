<template>
  <div class="col-lg-6">
    <div class="card mt-5 shadow shadow-lg rounded">
      <img :src="examQuestionImage" class="card-img-top img-fluid card-img-custom" alt="...">
      <div class="card-body">
        <input v-model="answer" @keyup.enter = "checkAnswer()" class="form-control form-control-sm mb-3" type="text" placeholder="put your answer and press Enter">
        <p class="card-text">{{exam.question}}</p>
        <div>
         <ShowAnswer />
         <PageNext>Next</PageNext>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

import { findById } from '@/helpers';
import ShowAnswer from './ShowAnswer.vue';
import PageNext from "@/components/PageNext";

export default {
    data() {
        return {
            answer: "",
        };
    },
    components: {PageNext, ShowAnswer },
    props:{
      sourceData:{
        type:Array,
        required:true
      }
    },
    computed: {
        exam() {
          return findById(this.sourceData, this.$route.params.id);
        },
        examAnswer() {
          return this.exam.answer;
        },
        examQuestionImage(){
          return this.exam.image.questionImage
        }
    },
    methods: {
        checkAnswer() {
            if (this.answer.trim() === this.examAnswer) {
                this.$swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Correct Answer",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else {
                this.$swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Wrong Answer",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },

    },
    
}
</script>

<style scoped>
.card-img-custom{
  width:auto;
  max-height:200px !important;
}
</style>