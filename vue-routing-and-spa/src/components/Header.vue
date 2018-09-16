<template>
    <div>
    <h1>Routing examples</h1>
      <!-- router link will get converted to anchor tags upon render. router link prevents the page reload that 
      we desire to achieve in the SPA -->
      <router-link to="/">Home</router-link>
      <router-link to="/user">user</router-link>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        display: inline-block;
        margin-right: 20px;
        padding: 8px;
        background-color: aquamarine;
    }
</style>
