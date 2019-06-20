<style>
.mytableitem{
    display: flex;
    background: #fff;
    margin-bottom: 10px;
}
.procheck{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
}
.proimg{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
}
.proinfo{
    flex: 1;
    padding-left: 5px;
}
.proaction{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
}
.proinfo a{text-decoration:none;color: black}
.proinfo span{font-size: 20px;margin: 10px 10px}
.propn{
    display: flex;
    align-items: flex-end;
}
.propn > div:nth-child(2){
    flex: 1;
    text-align: right;
}
.checkPro{
    display: flex;
    line-height: 40px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 53px;
    margin: auto;
    padding: 0 10px;
    background-color: #CFCFCF;
}
.leftConent {width: 50px;}
.middleConent{width: 100px;text-align: center;}
.rightConent{flex: 1;text-align: right}
</style>
<template>
    <div class="page" style="background: #F2F2F2">
        <div id="mytable">
            <div class="mytableitem" v-for="(item,index) in productList" :key="index">
                <div class="procheck">
                    <input type="checkBox" :checked="item.isSelect" @click="item.isSelect=!item.isSelect"/>
                </div>
                <div class="proimg">
                    <img :src="item.srcurl" :alt="item.proName">
                </div>
                <div class="proinfo">
                    <div>{{item.proName}}</div>
                    <div class="propn">
                        <div>{{item.proPrice}}</div>
                        <!-- <div>{{item.proPrice * item.proNum}}</div> -->
                        <div>
                            <span><a href="#" @click="item.proNum > 1 ? item.proNum-- : ''">-</a></span><strong>{{item.proNum}}</strong><span><a href="#" @click="item.proNum >= 10 ? '' : item.proNum++">+</a></span>
                        </div>
                    </div>
                </div>
                <div class="proaction">
                    <a href="#" @click="deletePro(index)">删除</a>
                </div>
            </div>
        </div>
        <div class="checkPro">
            <div class="leftConent">
                <input type="checkBox" @click="selectProduct(isSelectAll)" :checked="isSelectAll" />全选</div>
            <div class="middleConent">
                <span>
                    <a href="#" @click="deleteProduct">删除所选产品</a>
                </span>
            </div>
            <div class="rightConent">
                <span>{{getTotal.totalNum}}件商品总计：￥{{getTotal.totalPrice}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            productList: []
            // isSelectAll: false
        }
    },
    created () {
        let arr = []
        for (let i = 1; i < 11; i++) {
            let item = {}
            item.proName = '神仙水' + i
            item.proNum = this.roundfun(1, 10)
            item.proPrice = this.roundfun(50, 100)
            item.srcurl = '../../assets/imgs/tabs/xmk_sel.png'
            arr.push(item)
        }
        this.productList = arr
    },
    methods: {
        roundfun (a, b) {
            return Math.round(Math.random() * (b - a) + a)
        },
        selectProduct (_isSelect) {
            // 遍历productList，全部取反
            for (var i = 0; i < this.productList.length; i++) {
                this.productList[i].isSelect = !_isSelect;
            }

            // this.isSelectAll = !this.isSelectAll;
            // this.productList.forEach((item) => {
            //     item.isSelect = this.isSelectAll;
            // })
        },
        deletePro: function (index) {
            // 删除当前产品
            this.productList.splice(index, 1);
        },
        // 删除已经选中(isSelect=true)的产品
        deleteProduct: function () {
            this.productList = this.productList.filter(function (item) { return !item.isSelect })
        }
    },
    computed: {
        // 检测是否全选
        isSelectAll: function () {
            // 如果productList中每一条数据的isSelect都为true，返回true，否则返回false;
            return this.productList.every(function (val) {
                return val.isSelect
            });
        },
        getTotal: function () {
            var prolist = this.productList.filter(function (val) { return val.isSelect });
            var totalPri = 0;
            for (var i = 0; i < prolist.length; i++) {
                totalPri += prolist[i].proPrice * prolist[i].proNum;
            }
            return {totalNum: prolist.length, totalPrice: totalPri}
        }
    },
    mounted: function () {
        var _this = this;
        // 为productList添加select（是否选中）字段，初始值为true
        // this.productList.map((item) => {
        // item.isSelect = false;
        this.productList.map(function (item) {
            _this.$set(item, 'isSelect', false);
        })
    }
}
</script>
