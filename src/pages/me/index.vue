<style lang="scss" src="../../assets/css/me.scss"></style>
<template>
    <div class="page">
        <div class="box">
            <div>头部数量<span>{{itemsL.length}}</span></div>
            <ul>
                <li v-for="(item, index) in itemsL" :key="index">
                    <input type="checkbox" v-model="item.checked">{{item.name}}
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
                    <input type="checkbox" v-model="item.checked">{{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            itemsL: [{name: '北京1', checked: false},
                {name: '北京2', checked: false},
                {name: '北京3', checked: true},
                {name: '北京4', checked: true},
                {name: '北京5', checked: false},
                {name: '北京6', checked: false},
                {name: '北京7', checked: false},
                {name: '北京8', checked: false},
                {name: '北京9', checked: false},
                {name: '北京10', checked: false},
                {name: '北京11', checked: false}],
            itemsR: [{name: '深圳1', checked: false},
                {name: '深圳2', checked: true},
                {name: '深圳3', checked: false}],
            arrL: [],
            arrR: []
        }
    },
    methods: {
        upselectallornot: function () {
            if (this.itemsL.length > 0) {
                let ss = this.itemsL.filter(function (item) {
                    return item.checked === true;
                })
                console.log(ss.length)
            }
        },
        upfun: function () {
            this.arrR = this.itemsR.filter(function (item) {
                return item.checked === true;
            })
            this.arrL = this.itemsR.filter(function (item) {
                return item.checked === false;
            })
            this.itemsL = this.itemsL.concat(this.arrR);
            this.itemsR = this.arrL;
        },
        downfun: function () {
            this.arrL = this.itemsL.filter(function (item) {
                return item.checked === true;
            })
            this.arrR = this.itemsL.filter(function (item) {
                return item.checked === false;
            })
            this.itemsR = this.itemsR.concat(this.arrL);
            this.itemsL = this.arrR;
        }
    }
}
</script>
