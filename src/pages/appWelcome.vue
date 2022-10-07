<template>
  <div>
    <div class="text-center aTagCenter">
      <h1 class="display-1">
          Welcome to Quizzes
      </h1>
        <router-link class="btn btn-outline-info btn-lg text-decoration-none"
                     :to="{ name: 'Quiz', params: { id: '1' }}"
        > Start quiz</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "appWelcome",
}
</script>

<style>
  .aTagCenter{
      margin-top: 180px;
  }
</style>