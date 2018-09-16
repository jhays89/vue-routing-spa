<template>
    <div>
        <h3>user edit</h3>
        <p>local: {{ local }}</p>
        <p>q: {{ q }}</p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                local: this.$route.query.local,
                q: this.$route.query.q
            }
        },
        methods: {

        }
    }
</script>