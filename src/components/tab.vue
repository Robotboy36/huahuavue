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
                name: 'xmk'
            }, {
                title: '产品库',
                name: 'cpk'
            }, {
                title: '美业圈',
                name: 'myq',
                icon: 'myq.gif',
                activeIcon: 'myq.gif'
            }, {
                title: '咖大教育',
                name: 'kd'
            }, {
                title: '我的',
                name: 'wd'
            }]
        }
    },

    // 过滤器，和方法功能相似
    filters: {
    },

    methods: {
        onSwitchTab (item) {
            this.curTabName = item.name
        }
    }
}
</script>
