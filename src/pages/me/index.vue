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
            <span @click="upselectallornot()">头部全选/不选</span>
            <span @click="upfun()">移上</span>
            <span @click="downfun()">移下</span>
            <span>底部全选/不选</span>
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
        upselectallornot: function () {
            this.tempfun(this.itemsR, this.itemsL, 3)
        },
        upfun: function () {
            // 提取选中
            // 如果用filter的话， 还需要再循环一次，把原数组中的选中项移除， 建议直接用 while
            // 为什么不用for? 因为选中的元素要在原数组中移除， 循环中移除某个元素时候，后面的会顶上来
            // 这样循环下标会乱
            // 用while， 删除时下标不往后++, 这样后面元素顶上来还是会检测到那个元素
            // 所以： 确定循环次数的可以用for, 不确定的可以用while
            this.tempfun(this.itemsR, this.itemsL, 1)
        },
        downfun: function () {
            this.tempfun(this.itemsL, this.itemsR, 2)
        },
        tempfun: function (arr1, arr2, type) {
            let selected = [];
            let i = 0;

            while (i < arr1.length) {
                let item = arr1[i];
                if (item.checked) {
                    arr1.splice(i, 1);
                    item.checked = false;
                    selected.push(item);
                } else {
                    i++;
                }
            }
            if (type === 1) {
                this.itemsL = this.itemsL.concat(selected);
            } else if (type === 2) {
                this.itemsR = this.itemsR.concat(selected);
            }
        }
    }
}
</script>
