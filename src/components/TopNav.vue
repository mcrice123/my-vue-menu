<template>
    <div class="hero-head">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item is-uppercase has-text-weight-bold">
                        {{ title }}
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroB" @click="onBurgerClick()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroB" :class="'navbar-menu ' + (menuOpen && 'is-active')">
                    <div class="navbar-end">
                        <NavLink 
                            v-for="link in links" 
                            :url="link.url" 
                            :text="link.text"
                            :key="link.text" 
                            :linkClass="link.class" 
                            :aria-label="link.text"
                            :target="link.target"
                        >
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import NavLink from './NavLink.vue';

    export default {

        name: 'TopNav',
        props: [
            'title',
            'links'
        ], 
        data() {
            return {
                menuOpen: false
            };
        },
        components: {
            NavLink
        },
        methods: {
            onBurgerClick() {
                let menuOpen = this.menuOpen;
                this.menuOpen = !menuOpen;
            }
        }
}
</script>