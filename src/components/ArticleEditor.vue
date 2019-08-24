<template>
    <div id="body">
        <mark-down/>

    </div>
</template>

<script>
    import MarkDown from 'vue-meditor'

    export default {
        name: "ArticleEditor",
        components: {
            MarkDown
        },
        data() {
            return {

            }
        },
        methods: {

        }

    }
</script>

<style scoped>
    #body {
    }

</style>
