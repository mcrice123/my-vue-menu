<template>
        <a 
            :href="url" 
            :key="text" 
            :class="returnClass()" 
            :aria-label="text"
            :target="target"
            v-if="toggleButtonClass()"
        >
            {{ text }}
        </a>
        <span
            v-else
            class="navbar-item"
        >
            <a 
                :href="url" 
                :key="text" 
                :class="returnClass()" 
                :aria-label="text"
                :target="target"
            >
            <span>
                {{ text }}
            </span>
        </a>
        </span>
</template>
<script>
    export default {
        name: 'NavLink',
        props: [
            'url',
            'text',
            'isActive',
            'linkClass',
            'target'
        ],
        methods: {
            returnClass() {
                if (this.linkClass.includes('button')) {
                    return this.linkClass; 
                }
                return 'navbar-item' + (this.isActive ? ' is-active' : '') + ' ' + this.linkClass;
            },
            toggleButtonClass() {
                if (!this.linkClass.includes('button')) {
                    return true;
                }
                else return false;
            }
        }
    }
</script>