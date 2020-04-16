<template>
    <div id="seach">
        <Header>
            <i slot="left" class="iconfont back"
                @click="handleBack">&#xe641;</i>
            <h1 slot="text">搜影院</h1>
        </Header>
        <div class="box">
            <div>
                <i class="iconfont sea">&#xe67d;</i>
                <input type="text" placeholder="搜影院">
            </div>
            <span @click="handleBack">取消</span>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header';

import axios from 'axios'
export default {
    name: 'Seach',
    components: {
        Header
    },
    methods: {
        handleBack() {
            this.$router.go(-1)
        }
    },
    mounted() {
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
    }
</style>