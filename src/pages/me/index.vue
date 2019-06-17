<style lang="scss" src="../../assets/css/me.scss"></style>
<template>
    <div class="page">
        <div class="box">
            <div>头部数量<span>{{itemsL.length}}</span></div>
            <ul>
                <li v-for="(item, index) in itemsL" :key="index">
                    <label>
                        <input type="checkbox" v-model="item.checked">{{item.name}}
                    </label>
                </li>
            </ul>
        </div>
        <div class="box-btn">
            <span @click="upfun()">移上去的按钮</span>
            <span @click="downfun()">移下去的按钮</span>
        </div>
        <div class="box">
            <div>底部数量<span>{{itemsR.length}}</span></div>
            <ul>
                <li v-for="(item, index) in itemsR" :key="index">
                    <label>
                        <input type="checkbox" v-model="item.checked">{{item.name}}
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            itemsL: [
                {name: '北京1'},
                {name: '北京2'},
                {name: '北京3'},
                {name: '北京4'},
                {name: '北京5'},
                {name: '北京6'},
                {name: '北京7'},
                {name: '北京8'},
                {name: '北京9'},
                {name: '北京10'},
                {name: '北京11'}
            ],
            itemsR: [
                {name: '深圳1'},
                {name: '深圳2'},
                {name: '深圳3'}
            ]
        }
    },
    methods: {
        upfun: function () {
            // this.arrR = this.itemsR.filter(function (item) {
            //     return item.checked === true;
            // })
            // this.arrL = this.itemsR.filter(function (item) {
            //     return item.checked === false;
            // })
            // this.itemsL = this.itemsL.concat(this.arrR);
            // this.itemsR = this.arrL;

            // 提取选中
            // 如果用filter的话， 还需要再循环一次，把原数组中的选中项移除， 建议直接用 while
            // 为什么不用for? 因为选中的元素要在原数组中移除， 循环中移除某个元素时候，后面的会顶上来
            // 这样循环下标会乱
            // 用while， 删除时下标不往后++, 这样后面元素顶上来还是会检测到那个元素
            // 所以： 确定循环次数的可以用for, 不确定的可以用while
            let selected = [];
            let i = 0;

            while (i < this.itemsR.length) {
                let item = this.itemsR[i]

                // 选中的元素
                if (item.checked) {
                    // 从本数组里面移除
                    this.itemsR.splice(i, 1);

                    // 设置为false，这样移动过去之后就不会是选中状态
                    item.checked = false;

                    selected.push(item)
                } else {
                    i++
                }
            }

            // 拼接
            this.itemsL = this.itemsL.concat(selected)
        },
        downfun: function () {
            // this.arrL = this.itemsL.filter(function (item) {
            //     return item.checked === true;
            // })
            // this.arrR = this.itemsL.filter(function (item) {
            //     return item.checked === false;
            // })
            // this.itemsR = this.itemsR.concat(this.arrL);
            // this.itemsL = this.arrR;
        }
    }
}
</script>
