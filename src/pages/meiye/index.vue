<style>
table{width: 100%;padding-bottom: 40px;}
table tr{height: 60px;}
table th{width: 60px;}
table td{width: 60px;text-align: center;}
table a{text-decoration:none;color: black}
table span{font-size: 20px;margin: 10px 10px}
.checkPro{
    line-height: 40px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 53px;
    margin: auto;
    padding: 0 10px;
    background-color: #CFCFCF;
}
.leftConent {float: left;}
.rightConent{float: right;}
</style>
<template>
    <div class="page" style="background: #F2F2F2">
        <table id="mytable">
            <tr>
                <th><input type="checkBox" @click="selectProduct(isSelectAll)" v-bind:checked="isSelectAll" />全选</th>
                <th>商品</th>
                <th>数量</th>
                <th>单价(元)</th>
                <th>金额(元)</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item,index) in productList" :key="index">
                <td>
                    <input type="checkBox" v-bind:checked="item.isSelect" @click="item.isSelect=!item.isSelect"/>
                </td>
                <td>{{item.proName}}</td>
                <td>
                    <span><a href="#" @click="item.proNum > 1 ? item.proNum-- : ''">-</a></span><strong>{{item.proNum}}</strong><span><a href="#" @click="item.proNum >= 10 ? '' : item.proNum++">+</a></span>
                </td>
                <td>{{item.proPrice}}</td>
                <td>{{item.proPrice * item.proNum}}</td>
                <td>
                    <a href="#" @click="deletePro(index)">删除</a>
                </td>
            </tr>
        </table>
        <div class="checkPro">
            <div class="leftConent">
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
            productList: [
                {
                    'proName': '金',
                    'proNum': 2,
                    'proPrice': 1000
                },
                {
                    'proName': '银',
                    'proNum': 10,
                    'proPrice': 100
                },
                {
                    'proName': '珠',
                    'proNum': 5,
                    'proPrice': 100
                },
                {
                    'proName': '宝',
                    'proNum': 5,
                    'proPrice': 100
                },
                {
                    'proName': '玛',
                    'proNum': 5,
                    'proPrice': 100
                },
                {
                    'proName': '瑙',
                    'proNum': 5,
                    'proPrice': 100
                },
                {
                    'proName': '翡',
                    'proNum': 5,
                    'proPrice': 100
                },
                {
                    'proName': '翠',
                    'proNum': 5,
                    'proPrice': 100
                },
                {
                    'proName': '铜',
                    'proNum': 5,
                    'proPrice': 100
                },
                {
                    'proName': '锡',
                    'proNum': 5,
                    'proPrice': 100
                },
                {
                    'proName': '钨',
                    'proNum': 5,
                    'proPrice': 100
                },
                {
                    'proName': '米',
                    'proNum': 5,
                    'proPrice': 100
                },
                {
                    'proName': '油',
                    'proNum': 5,
                    'proPrice': 100
                }
            ]
        }
    },
    methods: {
        selectProduct: function (_isSelect) {
            // 遍历productList，全部取反
            for (var i = 0; i < this.productList.length; i++) {
                this.productList[i].isSelect = !_isSelect;
            }
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
            return this.productList.every(function (val) { return val.isSelect });
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
        this.productList.map(function (item) {
            _this.$set(item, 'isSelect', true);
        })
    }
}
</script>
