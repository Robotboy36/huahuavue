<template>
    <div id="app" :class="{
        notab: !showTab
    }">
        <router-view/>
        <Tab v-if="showTab" />

    </div>
</template>

<script>
import Tab from './components/tab'

export default {
    name: 'App',
    data () {
        return {
            path: '/'
        }
    },

    created () {
        this.path = this.$route.path
        // console.log('this.$router.path', this.$route)
    },

    components: {
        Tab
    },

    computed: {
        showTab () {
            // console.log('this.path', this.path)
            return ['/', '/products', '/meiye', '/kada', '/me'].includes(this.path)
        }
    },

    watch: {
        '$route' (route) {
            this.path = route.path
            // console.log('路由变化', route)
        }
    }
}
</script>
