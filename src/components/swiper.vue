<template>
    <!-- 可传入className 用来控制整体样式 -->
    <div class="swiper" :class="className">
        <div ref="swiper_el" class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in list" :key="index">
                    <img v-if="item.imgUrl" :src="item.imgUrl">
                    <div v-if="item.title" class="swiper-title">
                        {{item.title}}
                    </div>
                </div>
            </div>
            <div v-if="defaultOpt.pagination" class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    // props: 用来接收 调用组件时传入的参数
    // 例如： <xSwiper className="banner-swiper" />
    // 在props中 className接收到的值就是 'banner-swiper'
    props: {
        className: {
            // 数据类型，使用对应类型的构造器， String, Number, Boolean, Array, Object;
            // 支持多个类型, 使用方式 [String, Number]
            type: String,
            // 默认值， 如果是对象或者数组，必须要用函数形式return， 类似 data
            default: ''
        },

        options: {
            type: Object,
            default () {
                return {}
            }
        },

        list: {
            type: Array,
            // 声明该参数必传， 不传则抛出错误
            required: true,
            default () {
                return []
            }
        }
    },

    data () {
        return {
            swiperHandler: null,

            // 这个参数是生成的随机数，用来标识作为当前swiper
            // 防止 pagination 和 navigation等元素样式冲突
            // swiperNo: '',

            // 默认参数
            defaultOpt: {
                // 水平(horizontal)或垂直(vertical)
                direction: 'horizontal',

                autoHeight: true,

                loop: false,

                // 默认展示下标
                initialSlide: 0,

                // 切换速度
                speed: 300,

                // 自动播放
                autoPlay: {
                    delay: 500
                },

                pagination: {
                    el: `.${this.className} .swiper-pagination`
                },

                // 只有一个slider时，是否设置swiper无效，在loop模式下失效
                watchOverflow: true,

                // 是否一次加载所有图片，默认为true
                preloadImages: true,

                // 是否自由滑动模式，默认一屏滑动
                freeMode: false,

                // 是否禁止默认行为，当slider为链接时，防止跳转链接
                preventClicks: true,

                // 是否阻止事件冒泡
                preventClicksPropagation: true,

                // 事件相关
                on: {
                    // 切换一张完毕
                    slideChangeTransitionEnd () {
                        // 切换结束时，告诉我现在是第几个slide
                        // console.log(this.activeIndex);
                    },

                    // 切换到最后一张时
                    reachEnd () {},

                    // 点击, 会延迟300ms后执行
                    click () {},

                    // 触碰，立即执行
                    tap () {}
                }
            }
        }
    },

    mounted () {
        this.initSwiper()
    },

    methods: {
        initSwiper () {
            // this.swiperNo = +new Date() + (Math.random() + '').slice(2, 10)
            // console.log(`swiper_${this.swiperNo} 初始化`)

            let el = this.$refs.swiper_el
            // 合并参数
            let options = Object.assign(this.defaultOpt, this.options)
            console.log('合并后的参数', options)

            // 调用props中的值和data一样， 直接使用this.
            // 注意props中接收的参数名称不要和data里面的定义成一样，
            // 这样会导致重复定义
            this.swiperHandler = new Swiper(el, options)
        }
    },

    beforeDestroy () {
        this.swiperHandler && this.swiperHandler.destroy()
    }
}
</script>
