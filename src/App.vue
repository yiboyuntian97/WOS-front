<template>
    <div id="app">
        <router-view></router-view>
        <FooterGuide v-if="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from '../src/components/FooterGuide/FooterGuide'
export default {
    components: {
        FooterGuide
    },
    mounted() {
        this.getAddress()
    },
    methods: {
        ...mapActions(['getAddress'])
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .app
        width 100%
        height 100%
        background #f5f5f5
        
</style>
