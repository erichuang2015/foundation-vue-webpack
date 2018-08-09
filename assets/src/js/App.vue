<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                message: "Hello Vue!"
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>