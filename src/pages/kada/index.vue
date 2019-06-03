<template>
    <div class="page">
        <div ref="banner_swiper" class="swiper-container" style="height: 100px">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="https://static.emeik.cn/FjZiPZ1ZvPMTpo4mLvlc5W9GGWVE"></div>
                <div class="swiper-slide"><img src="https://static.emeik.cn/Fh2_GTX5NSE6SC0_DmF74eGwYIAK"></div>
                <div class="swiper-slide"><img src="https://static.emeik.cn/FiCYaej0zRkLVcwiScN6mGwohoe1"></div>
            </div>
            <div class="swiper-pagination"></div>
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
            let el = this.$refs.banner_swiper

            let bannerSwiper = new Swiper(el, {
                // direction: 'vertical', // 垂直切换选项
                // loop: true, // 循环模式选项
            })

            console.log(bannerSwiper)
        }
    }
}
</script>
