<template>
    <a-result status="403" title="403" sub-title="Sorry, you don't have access to this page.">
        <template #extra>
        <a-button type="primary" @click="toHome">
            Back Home
        </a-button>
        </template>
    </a-result>
</template>

<script>
export default {
    name: 'Exception403',
    setup() {
        const toHome = () => {
            this.$router.push({path:'/'})
        }
        return {
            toHome
        }
    }
}
</script>

<style>

</style>