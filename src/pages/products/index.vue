<template>
    <div class="page">
        <p>{{message}}</p>
        <p>{{reserveMessage}}</p>
        <input v-model="message" type="text">
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: 'Hello'
        }
    },
    computed: {
        reserveMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
}
</script>
