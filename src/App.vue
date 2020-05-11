<template>
    <div id="app">
        <Menu 
            title="My Vue Menu"
            subtitle="A menu project built with VueJS"
        />
    </div>
</template>

<script>
    import Menu from './components/Menu.vue';
    import 'bulma';

    export default {
        name: 'App',
        components: {
          Menu
        }
    }
</script>


