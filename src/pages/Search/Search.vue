<!--搜索-->
<template>
    <div class="search">
        <header-top title="搜索"></header-top>
        <form class="search-form" action="#">
            <input type="search" name="search" class="search_input" placeholder="请输入您需要的鱼类名称">
            <input type="submit" name="submit" class="search_submit">
        </form>
    </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    components: {HeaderTop}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
    .search
        width 100%
        .header
            background-color #02a774
            position fixed
            z-index 100
            left 0
            top 0
            width 100%
            height 45px
            .header_search
                // position absolute
                left 15px
                top 50%
                transform translateY(-50%)
                width 10%
                height 50%
                .iconsousuo
                    font-size 25px
                    color #fff
            .header_title
                position absolute
                top 50%
                left 50%
                transform translate(-50%, -50%)
                width 50%
                color #fff
                text-align center
                .header_title_text
                    font-size 20px
                    color #fff
                    display block
                    .ellipsis
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
            .header_login
                font-size 14px
                color #fff
                position absolute
                right 15px
                top 50%
                transform translateY(-50%)
                .header_login_text
                    color #fff
        .search-form
            clearFix()
            margin-top 45px
            background-color #fff
            padding 12px 8px
            input
                height 35px
                padding 0 4px
                border-radius 2px
                font-weight bold
                outline none
                &.search_input
                    float left
                    width 79%
                    border 4px solid #f2f2f2
                    font-size 14px
                    color #333
                    background-color #f2f2f2
                &.search_submit
                    float right
                    width 18%
                    border 4px solid #02a774
                    font-size 16px
                    color #fff
                    background-color #02a774
</style>
