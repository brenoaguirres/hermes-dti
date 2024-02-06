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
                  <Sidebar @sbrBtnEvent="toggleSidebar"/>
              </div>
              <Footer />
          </div>
    </div>        
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Sidebar from './Sidebar.vue';

export default {
    components: { Navbar, Footer, Sidebar },
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