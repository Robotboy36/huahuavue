<template>
    <div id="app">
        <router-view/>
        <Tab />
    </div>
</template>

<script>
import Tab from './components/tab'

export default {
    name: 'App',

    components: {
        Tab
    }
}
</script>
