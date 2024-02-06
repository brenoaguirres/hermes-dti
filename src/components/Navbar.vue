<template>
    <nav class="flex flex-row w-full h-1/6 bg-teal-600">
        <div class="flex flex-row w-1/2 space-x-4 items-center pl-4">
            <img src="../assets/icon.png" alt="" class="w-16 h-16">
            <p class="text-2xl font-bold">Hermes - Painel de Chamadas</p>
        </div>
        <div class="flex flex-row w-full justify-end items-center pr-4">
            <div class="flex items-center justify-center bg-slate-200 w-12 h-12 rounded-l-full hover:bg-slate-400"><img src="../assets/magnifier.png" alt="" class="w-4 h-4"></div>
            <input type="search" placeholder="Busque alguma coisa..." class="w-96 h-12 text-black rounded-r-full placeholder:italic placeholder:text-slate-500 border-slate-300 shadow-sm pl-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {

        },
    }
</script>

<style>
</style>
