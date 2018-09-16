<template>
    <div>
        <h2>user details</h2>
        <router-link tag="button" v-bind:to="'/user/' + id + '/edit'">Edit user: {{ id }}</router-link>
        <!-- OR -->
        <router-link tag="button" v-bind:to="{ name: 'userEdit', params: id, query: { local: 'en', q: 100 } }">Edit user: {{ id }} (Code alternataive)</router-link>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                id: this.$route.params.id
            }
        },
        methods: {

        }
    }
</script>