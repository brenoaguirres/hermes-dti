<template>
    <div class="flex flex-col w-full h-screen">
        <div class="flex flex-col h-screen">
            <Navbar />
            <div class="flex w-full h-4/6">
                <Sidebar  v-if="showSidebar" />
                <MainPanel @sbrBtnEvent="toggleSidebar"/>
            </div>
            <Footer />
        </div>
    </div>        
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import MainPanel from './MainPanel.vue';
import Sidebar from './Sidebar.vue';

export default {
    components: { Navbar, Footer, MainPanel, Sidebar },
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