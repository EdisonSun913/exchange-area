<template>
    <div class="user-name-input">
        <input ref="userName" type="text" v-model="name" @blur="sendName" />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
            name: ''
        }
    },
    mounted () {

    },
    methods: {
        sendName () {
            console.log(this.name)
            this.$store.dispatch('sendName',this.name)
        }
    }
}
</script>

<style scoped>

</style>


