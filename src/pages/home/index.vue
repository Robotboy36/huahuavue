<template>
    <div class="page">
        <slider :pages="pages" :sliderinit="sliderinit"></slider>
    </div>
</template>
<script>
import slider from 'vue-concise-slider'// 引入slider组件
export default {
    data () {
        return {
            pages: [
                {
                    title: '图片1',
                    style: {
                        background: 'url(https://static.emeik.cn/FjZiPZ1ZvPMTpo4mLvlc5W9GGWVE)'
                    }
                },
                {
                    title: '图片2',
                    style: {
                        background: 'url(http://static.emeik.cn/ljmLvVbitOmeUZ1E1d19VRkwI59E)'
                    }
                },
                {
                    title: 'slide3',
                    style: {
                        background: '#4bbfc3'
                    }
                }
            ],
            sliderinit: {
                currentPage: 0,
                thresholdDistance: 500,
                thresholdTime: 100,
                autoplay: 1000,
                loop: true,
                direction: 'vertical',
                infinite: 1,
                slidesToScroll: 1
            }
        }
    },
    components: {
        slider
    }
}
</script>
