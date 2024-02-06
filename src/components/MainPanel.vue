<template>
    <div class="flex flex-row justify-start w-full bg-teal-100">
        <button @click="sidebarButtonClick" class="flex flex-row justify-center items-center w-10 h-10 bg-emerald-400 border-y-2 border-e-2 rounded-md border-emerald-100 shadow-md hover:bg-emerald-500">
            <img src="../assets/list.png" alt="" class="justify-center items-center h-4 w-4">
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            sidebarButtonClick() {
                this.$emit('sbrBtnEvent')
            }
        },
    }
</script>

<style>
</style>
