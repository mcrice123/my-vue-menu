<template>
    <div id="back-to-top" v-scroll="handleScroll">
        <a v-if="show" aria-label="Back to Top" @click="scrollToTop()">
            <img id="vue-logo" :src="image" :alt="alt">
        </a>
    </div>
</template>

<script>
    export default {
        name: 'BackToTop',
        props: {
            image: String, 
            alt: String
        },
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
        width: 60px;
        position: fixed; 
        bottom: 10px;
        right: 20px;
    }
    #back-to-top a img {
        opacity: .5;
    }
    #back-to-top a:hover img {
        opacity: 1;
    }
    #vue-logo {
        transform: rotate(180deg);
    }
</style>

