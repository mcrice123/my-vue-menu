<template>
    <div class="slideshow">
    <VueSlickCarousel :arrows="true" :dots="true">
        <img v-for="(image, index) in images" :key="index" :src="image.url" :alt="image.alt">
    </VueSlickCarousel>
  </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: 'SlideShow',
        props: {
            images: Array
        },
        components: {
            VueSlickCarousel
        }
    };
</script>

<style scoped>
    .slideshow {
        width: 300px;
        height: 200px;
        padding-top: 20px;
        display: inline-block;
        float: left;
        background-color: rgba(0, 0, 0, .2);
        padding-left: 50px;
        padding-right: 50px;
        margin: 20px 30px 20px 0;
    }
    img {
        height: 140px;
        width: 100%;
        object-fit: contain;
    }
</style>