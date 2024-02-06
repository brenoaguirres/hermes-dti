<template>
    <div class="flex flex-col w-full h-screen">
      <div class="flex flex-col h-screen">
              <Navbar />
              <div class="flex w-full h-4/6">
                  <div v-if="showSidebar" class="w-1/5 bg-emerald-300 border-y-2 border-s-2 rounded-md border-slate-200">
                      <ul class="flex flex-col items-center space-y-4 py-4">
                          <li class="bg-green-500 h-8 hover:bg-green-700 rounded-lg w-5/6 shadow-md"><button class="w-full h-full"><img src="" alt=""><p>Registros</p></button></li>
                          <li class="bg-green-500 h-8 hover:bg-green-700 rounded-lg w-5/6 shadow-md"><button class="w-full h-full"><img src="" alt=""><p>Fila</p></button></li>
                          <li class="bg-green-500 h-8 hover:bg-green-700 rounded-lg w-5/6 shadow-md"><button class="w-full h-full"><img src="" alt=""><p>Painel</p></button></li>
                          <li class="bg-green-500 h-8 hover:bg-green-700 rounded-lg w-5/6 shadow-md"><button class="w-full h-full"><img src="" alt=""><p>Lixeira</p></button></li>
                          <li class="bg-green-500 h-8 hover:bg-green-700 rounded-lg w-5/6 shadow-md"><button class="w-full h-full"><img src="" alt=""><p>Perfil</p></button></li>
                          <li class="bg-green-500 h-8 hover:bg-green-700 rounded-lg w-5/6 shadow-md"><button class="w-full h-full"><img src="" alt=""><p>Sair</p></button></li>
                      </ul>
                  </div>
                  <div class="flex flex-row justify-start w-full bg-teal-100">
                      <button @click="toggleSidebar" class="flex flex-row justify-center items-center w-10 h-10 bg-emerald-400 border-y-2 border-e-2 rounded-md border-emerald-100 shadow-md hover:bg-emerald-500">
                          <img src="../assets/list.png" alt="" class="justify-center items-center h-4 w-4">
                      </button>
                  </div>
              </div>
              <footer class="flex w-full h-1/6 bg-teal-400">
                  <div class="flex flex-col justify-end items-start pl-2 py-2 w-1/4 h-full">
                      <p class="flex flex-row space-x-2 text-xs">
                          <span class="font-bold">Current user:</span><span class="truncate">Breno Freitas Aguirres</span>
                      </p>
                      <p class="flex flex-row space-x-2 text-xs">
                          <span class="font-bold">Username:</span><span class="truncate">RH034084</span>
                      </p>
                      <p class="flex flex-row space-x-2 text-xs">
                          <span class="font-bold">Software version:</span><span>0.0.2 alpha</span>
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
          </div>
    </div>        
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    components: { Navbar },
    data() {
        return {
            showSidebar: true,
        }
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar
        }
    },
}
</script>