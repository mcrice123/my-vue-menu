<template>
    <section id="menu" class="hero is-dark is-medium ocean-bg">
        <top-nav :title="title" :links="topLinks"></top-nav>

        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title is-size-1">
                    {{ title }}
                </h1>
                <p v-if="subtitle" class="subtitle">
                    {{ subtitle }}
                </p>
            </div>
        </div>

        <bottom-nav :links="bottomLinks"></bottom-nav>
    </section>
</template>

<script>
    import TopNav from './TopNav.vue';
    import BottomNav from './BottomNav.vue';

    export default {
        name: 'Menu',
        props: {
            title: String,
            subtitle: String,
            topLinks: Array,
            bottomLinks: Array
        }, 
        data() {
            return {
                //siteSubTitle: 'A Menu Created with VueJS'
            };
        },
        components: {
            TopNav, 
            BottomNav
        }
    }
</script>

<style>
    #menu {
        margin-bottom: 40px;
    }
</style>
