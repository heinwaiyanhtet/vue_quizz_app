<template>
    <div class="bg-dark d-flex justify-content-center vh-100">
        <div class="text-center">
            <h1 class="text-white aTagCenter">Congratulation! you have reached your daily goals.</h1>
            <router-link class="mt-3 btn btn-outline-info btn-lg text-decoration-none"
                         :to="{ name: 'welcome'}"
            > Go home </router-link>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>