<template>
    <div>
        <router-view></router-view>
        <FooterGuide></FooterGuide>
    </div>
</template>

<script>
import FooterGuide from '../src/components/FooterGuide/FooterGuide'
export default {
    components: {
        FooterGuide
    }
}
</script>

<style>

</style>
