<template>
    <div id="seach">
        <Header>
            <i slot="left" class="iconfont back"
                @click="handleBack">&#xe641;</i>
            <h1 slot="text">搜影院</h1>
        </Header>
        <div class="box">
            <div>
                <i class="iconfont sea" @click="handleSearch">&#xe67d;</i>
                <input type="text" v-model="searcher" placeholder="搜电影、搜影院">
            </div>
            <span @click="handleBack">取消</span>
        </div>
        <!-- 被搜索的数据 -->
        <div style="display: none" class="txt" >
            <p class="text" v-for="(item,index) in textArr" :key="index">{{ item.movies }}</p>
        </div>
        <!-- 数据结果展示 -->
        <div v-if="textArrElse.length>0" class="txt" >
            <p class="text" v-for="(item,index) in textArrElse" :key="index">{{ item.movies }}</p>
        </div>
        <!-- 结果为空的提示 -->
        <div v-else style="position: fixed; top: 300px; left: 100px;">
            <img src="../../assets/imgs/logo.jpg" alt="" 
                style="width: 100px; height: 150px; margin-left: 50px;"
                v-show="isShow">
            <p style="font-weight: 600; color: #888;"
                v-show="isShow">抱歉，您搜索的内容不存在</p>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header';

import axios from 'axios'
export default {
    name: 'Seach',
    data() {
        return {
            searcher: '',
            textArr: [
                {
                    id: 1,
                    movies: '爱情公寓5'
                },
                {
                    id: 2,
                    movies: '爱情公寓4'
                },
                {
                    id: 3,
                    movies: '爱情公寓3'
                },
                {
                    id: 4,
                    movies: '爱情公寓2'
                },
                {
                    id: 5,
                    movies: '爱情公寓'
                },
                {
                    id: 6,
                    movies: '老九门'
                }
            ],
            textArrElse: [],
            isShow: false
        }
    },
    components: {
        Header
    },
    computed: {
            
    },
    methods: {
        handleBack() {
            this.$router.go(-1)
        },

        handleSearch() {
            // 清空上次搜索的内容
            this.textArrElse.length = 0
            this.textArr.filter(( item,index) => {
                if(item.movies.indexOf(this.searcher) !== -1){
                    this.textArrElse.push(item)
                    this.isShow = true
                }
            })
            //清空数据
            this.searcher = ''
        }
    },
    mounted() {
        this.isShow = false
        // axios.get("https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=1030110").then(res => {

        // })
        // axios({
        //     url: "https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=4271989",
        //     headers: {
        //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5…1090921693471","bc":"310100"}',
        //         'X-Host':'mall.film-ticket.film.list'	
        //     }
        // }).then(res => {
        //     console.log(res.data);
            
        // })
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/fonts.css';
    * {
        margin: 0;
        padding: 0;
    }
    #seach {
        .back {
            display: inline-block;
            width: 2.5rem;
            height: 2.5rem;
            line-height: 2.5rem;
            text-align: center;
            font-size: 1.375rem;
            margin-left: 1.25rem;
            margin-top: .3125rem;        
        }
        h1 {
            display: inline-block;
            width: 20%;
            height: 3.125rem;
            line-height: 3.125rem;
            font-size: 1.25rem;
            margin-left: 5rem;
            text-align: center;
            margin-bottom: -0.625rem;
        }
        .box {
            position: relative;
            margin-top: 3.125rem;
            background-color: #f2f2f2;
            height: 2.5rem;
            div {
                position: absolute;
                top: .3125rem;
                left: .9375rem;
                height: 1.875rem;
                width: 75%;
                background-color: white;
                border-radius: .625rem;
                .sea {
                display: inline-block;
                width: 1.875rem;
                height: 1.875rem;
                line-height: 1.875rem;
                text-align: right;
                font-size: 1.25rem;
                vertical-align: 0;
                }
                input {
                    outline: none;//让Input标签失去边框
                    border: none;
                    width: 50%;
                    height: 100%;
                }
            }
            span {
                position: absolute;
                top: 0;
                right: 1.25rem;
                height: 2.5rem;
                width: 3.125rem;
                line-height: 2.5rem;
                font-size: 1.125rem;
                text-align: right;
                color: red;
            }
        }
        .txt {
            width: 100%;
            height: 2rem;
            p {
                display: inline-block;
                line-height: 2rem;
                color: #b0b0bb;
                margin-left: 10%;
                border-bottom: 1px solid #e0e0ee;
                padding-left: -10%;
            } 
            .text {
                width: 90%;
                font-weight: 600;
            }
        }  
        
    }
</style>