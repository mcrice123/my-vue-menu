<template>
    <section class="hero is-info is-large">
        <top-nav :title="title"></top-nav>

        <div class="hero-body">
            <div class="container has-text-centered">
                <p class="title">
                    {{ title }}
                </p>
                <p v-if="subtitle" class="subtitle">
                    {{ subtitle }}
                </p>
            </div>
        </div>

        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <li class="is-active">
                            <a>Overview</a>
                        </li>
                        <li>
                            <a>Modifiers</a>
                        </li>
                        <li>
                            <a>Grid</a>
                        </li>
                        <li>
                            <a>Elements</a>
                        </li>
                        <li>
                            <a>Components</a>
                        </li>
                        <li>
                            <a>Layout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
    import TopNav from './TopNav.vue';

    export default {
        name: 'Menu',
        props: {
            title: String,
            subtitle: String
        }, 
        data() {
            return {
                //siteSubTitle: 'A Menu Created with VueJS'
            };
        },
        components: {
            TopNav
        }
    }
</script>


