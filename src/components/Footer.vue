<template>
    <footer class="flex w-full h-1/6 bg-teal-400">
        <div class="flex flex-col justify-end items-start pl-2 py-2 w-1/4 h-full">
            <p class="flex flex-row space-x-2 text-xs">
                <span class="font-bold">Current user:</span><span class="truncate">Breno Freitas Aguirres</span>
            </p>
            <p class="flex flex-row space-x-2 text-xs">
                <span class="font-bold">Username:</span><span class="truncate">RH034084</span>
            </p>
            <p class="flex flex-row space-x-2 text-xs">
                <span class="font-bold">Software version:</span><span>0.0.6 alpha</span>
            </p>
        </div>
        <div class="flex w-full h-full">
            <div class="flex space-x-4 justify-end items-end pb-2 w-full">
                <img src="../assets/dti-hej-logo.png" alt="logo-dti" class="w-30 h-12 items-center">
                <div class="flex flex-col space-y-2">
                    <div class="text-md w-60 font-bold">Developed by <a href="https://www.linkedin.com/in/brenoaguirres/" class="hover:text-slate-300">Breno Aguirres.</a></div>
                    <div class="text-xs max-w-80 text-ellipsis">
                            In association with HEJ's <span class="font-bold">Information Technology 
                            Department (DTI)</span>.
                            Jataí-GO, Brazil - 2024.
                    </div>
                </div>
            </div>
        </div>
    </footer>
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
