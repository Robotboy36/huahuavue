<template>
    <div class="page">
        <div class="swiper-container">
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
    }
}
</script>
