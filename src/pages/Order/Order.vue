<!--订单 -->
<template>
    <section class="order">
        <!-- <header class="header">
            <a class="header_title">
                <span class="header_title_text">订单列表</span>
            </a>
        </header> -->
        <header-top title="订单列表"></header-top>
        <section class="order_no_login">
            <img src="./images/person.png">
            <h3>登陆后查看当前订单</h3>
            <button>立即登录</button>
        </section>
    </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    components: {HeaderTop}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
    .order
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
                position absolute
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
        .order_no_login
            padding-top 140px
            width 60%
            margin 0 auto
            text-align center
            >img 
                display block
                width 100%
                height 30%
            >h3
                padding 10px 0
                font-size 17px
                color #6a6a6a
            >button 
                display inline-block
                background #02a774
                font-size 14px
                color #fff
                border 0
                outline none
                border-radius 5px
                padding 10px 20px

</style>
