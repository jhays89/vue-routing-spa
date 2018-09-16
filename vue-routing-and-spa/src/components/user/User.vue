<template>
    <div>
        <h2>User page</h2>
        <button v-on:click="backToHome">Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            backToHome: function () {
                this.$router.push('/');
            }
        }
    }
</script>