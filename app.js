const app = Vue.createApp({
    data() {
        // variables
        return {
            showSidebar: true,
            showPatientQueue: true
        }
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar
            console.log(this.showSidebar)
        }
    },
    computed: {
        //filtered and computed variables
    }
})

app.mount("#app")