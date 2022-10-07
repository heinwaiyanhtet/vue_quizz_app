<template>
    <div class="text-center vh-100 bg-secondary d-flex justify-content-center align-items-center">
        <div>
            <h1 class="text-white">Oops!</h1>
            <h1 class="text-white">404 Not found</h1>
            <router-link class="h3"
                     :to="{ name: 'Quiz', params: { id: '1' }}"
            > Start quiz </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:"NotFound"
    }
</script>

<style lang="scss" scoped>

</style>