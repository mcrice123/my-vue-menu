<template>
    <div id="back-to-top" v-scroll="handleScroll">
        <a v-if="show" aria-label="Back to Top" @click="scrollToTop()">
            <img id="vue-logo" src="http://localhost:8080/logo.png" alt="Vue Logo">
        </a>
    </div>
</template>

<script>
    export default {
        name: 'BackToTop',
        methods: {
            scrollToTop() {
                window.scrollTo({ top: 0, behavior: "smooth" });
            },
            handleScroll: function () {
                if (window.scrollY > 50) {
                    this.show = true;
                }
                else this.show = false;
            }
        },
        data() {
            return {
                show: false
            };
        }
    }
</script>

<style scoped>
    #back-to-top {
        width: 100px;
        position: fixed; 
        bottom: 10px;
        right: 20px;
    }

    #back-to-top a:hover img {
        background-color: rgba(0, 0, 0, 0.1);

    }
    #vue-logo {
        transform: rotate(180deg);
    }
</style>

