<template>
    <div class="tab">
        <ul class="tab-list">
            <li v-for="(item, index) in list" :key="index"
                :class="{
                    [item.name]: true,
                    active: curTabName === item.name
                }"
                @click="onSwitchTab(item)">
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            curTabName: 'xmk',
            list: [{
                title: '项目库',
                name: 'xmk',
                url: '/'
            }, {
                title: '产品库',
                name: 'cpk',
                url: '/products'
            }, {
                title: '美业圈',
                name: 'myq',
                url: '/meiye'
            }, {
                title: '咖大教育',
                name: 'kd',
                url: '/kada'
            }, {
                title: '我的',
                name: 'wd',
                url: '/me'
            }]
        }
    },

    // 过滤器，和方法功能相似
    filters: {
    },

    watch: {
        '$route' (route) {
            // console.log('watch', route)
            let curItem = this.list.filter(item => {
                return item.url === route.path
            })

            this.curTabName = curItem[0] ? curItem[0].name : 'xmk'
        }
    },

    mounted () {
        let path = this.$route.path
        let curItem = this.list.filter(item => {
            return item.url === path
        })

        this.curTabName = curItem[0] ? curItem[0].name : 'xmk'
    },

    methods: {
        onSwitchTab (item) {
            // console.log(item.url)
            this.curTabName = item.name
            this.$router.push(item.url)
            // this.$router.replace(item.url)
        }
    }
}
</script>
