<template>
    <div class="hero-head">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item is-uppercase has-text-weight-bold">
                        {{ title }}
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroB" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item is-active">
                            Home
                        </a>
                        <a class="navbar-item">
                            Examples
                        </a>
                        <a class="navbar-item">
                            Documentation
                        </a>
                        <span class="navbar-item">
                        <a class="button is-info is-inverted">
                            <span>Download</span>
                        </a>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'TopNav',
    props: [
        'title',
    ], 
    created() {
        console.log(this.title);
    }
}
</script>