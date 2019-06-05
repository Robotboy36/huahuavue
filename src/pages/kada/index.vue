<style>
.swiper-slide img{
    display: block;
    width: 100%;
    height: auto;
}
</style>

<template>
    <div class="page">
        <div ref="banner_swiper" class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="https://static.emeik.cn/FjZiPZ1ZvPMTpo4mLvlc5W9GGWVE"></div>
                <div class="swiper-slide"><img src="https://static.emeik.cn/Fh2_GTX5NSE6SC0_DmF74eGwYIAK"></div>
                <div class="swiper-slide"><img src="https://static.emeik.cn/FiCYaej0zRkLVcwiScN6mGwohoe1"></div>
            </div>
            <div ref="swiper_pagination" class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default{
    data () {
        return {
            imgList: [
                {
                    title: '1',
                    src: 'https://static.emeik.cn/FjZiPZ1ZvPMTpo4mLvlc5W9GGWVE'
                },
                {
                    title: '2',
                    src: 'https://static.emeik.cn/Fh2_GTX5NSE6SC0_DmF74eGwYIAK'
                },
                {
                    title: '3',
                    src: 'https://static.emeik.cn/FiCYaej0zRkLVcwiScN6mGwohoe1'
                }
            ]
        }
    },

    mounted () {
        this.init()
    },

    methods: {
        init () {
            let bannerEl = this.$refs.banner_swiper
            let paginationEl = this.$refs.swiper_pagination

            let bannerSwiper = new Swiper(bannerEl, {
                loop: true, // 循环模式选项
                autoplay: true,
                autoHeight: true,
                pagination: {
                    el: paginationEl
                }
            })

            console.log(bannerSwiper)
        }
    }
}
</script>
