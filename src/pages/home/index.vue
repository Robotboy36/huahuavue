<style lang="scss" src="../../assets/css/home.scss"></style>

<template>
    <div class="page">
        <xSwiper
            className="banner-swiper"
            :list="bannerList"
            :options="sliderOptions"></xSwiper>

        <xSwiper
            className="ad-swiper"
            :list="adList"
            :options="adSliderOptions"></xSwiper>
    </div>
</template>

<script>
import xSwiper from '../../components/swiper.vue'

export default {
    data () {
        return {
            bannerList: [{
                title: '图片1',
                imgUrl: 'https://static.emeik.cn/FjZiPZ1ZvPMTpo4mLvlc5W9GGWVE'
            }, {
                title: '图片2',
                imgUrl: 'https://static.emeik.cn/Fh2_GTX5NSE6SC0_DmF74eGwYIAK'
            }, {
                imgUrl: 'https://static.emeik.cn/FiCYaej0zRkLVcwiScN6mGwohoe1'
            }],
            sliderOptions: {
                loop: true,
                autoplay: {
                    delay: 5000
                }
            },

            // 广告轮播
            adList: [{
                title: '这是一条很硬的广告'
            }, {
                title: '我第二硬'
            }],
            adSliderOptions: {
                direction: 'vertical',
                loop: true,
                autoplay: {
                    delay: 5000
                }
            }
        }
    },
    components: {
        xSwiper
    }
}
</script>
