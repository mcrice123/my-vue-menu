<template>
    <div id="app">
        <Menu 
            title="My Vue Menu"
            subtitle="A menu project built with VueJS"
            :topLinks="topLinks"
            :bottomLinks="bottomLinks"
        />
        <div id="content" class="segment">
            <div class="container">
                <h1>Hello!</h1>
            </div>
        </div>
    </div>
</template>

<script>
    import Menu from './components/Menu.vue';
    import 'bulma';

    export default {
        name: 'App',
        components: {
          Menu
        },
        data() {
            return {
                topLinks: [
                    {
                        text: 'Home',
                        url: '',
                        isActive: true,
                        class: ''
                    },
                    {
                        text: 'Examples',
                        isActive: false,
                        class: ''
                    },
                    {
                        text: 'Documentation',
                        url: 'https://github.com/mcrice123/my-vue-menu',
                        isActive: false,
                        target: '_blank',
                        class: 'button is-info is-inverted'
                    }
                ],
                bottomLinks: [
                    {
                        text: 'Overview',
                        isActive: true,
                        url: '#'
                    },
                    {
                        text: 'Modifiers',
                        isActive: false
                    },
                    { 
                        text: 'Grid',
                        isActive: false
                    },
                    {
                        text: 'Elements',
                        isActive: false
                    },
                    {
                        text: 'Components',
                        isActive: false,
                    },
                    {
                        text: 'Layout',
                        isActive: false,
                    },
                ]
            };
        }
    }
</script>

<style>
    #app {
        margin-bottom: 40px;
    }
    #content {
        min-height: 200px;
    }
</style>
