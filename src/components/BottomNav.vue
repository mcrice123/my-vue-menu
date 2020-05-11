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