<template>
    <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
                <ul>
                    <li v-for="link in links" :key="link.text" :class="link.isActive ? 'is-active' : ''">
                        <a :href="link.url">{{ link.text }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'BottomNav',
        props: {
            links: Array
        }
    }
</script>

<style scoped>
    .hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle {
        background-color: rgba(10, 10, 10, 0.5);
    }
</style>