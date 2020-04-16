<template>
    <div id="cinema">
        <Header>
            <h1 slot="text">超级影院</h1>
        </Header>
        <Movie/>
        <div class="kongge"></div>
        <div class="seach_box">
            <div class="city">
                赣州<i>▼</i>
            </div>
            <div class="seach" @click="handleChangePage()">
                <i class="iconfont">&#xe67d;</i>
                <span>搜影院</span>
            </div>
        </div>
        <List/>
        <Topbar/>
    </div>
</template>

<script>
import Header from '@/components/Header';

import List from './child/List'
import Movie from './child/Movie'

import Topbar from '@/components/Topbar'

export default {
    name: 'Ciname',
    components: {
        Topbar,
        Header,
        List,
        Movie
    },
    data() {
        return {
            
           
        }
    },
    methods: {
        handleChangePage() {
            //编程式导航简单的跳转到seach页面
            this.$router.push(`/seach`)
        }
    }
    
}
</script>

<style lang=scss scoped>
    #cinema {
        h1 {
            display: inline-block;
            margin-left: 33.33%;
            width: 33.333%;
            font-size: 1.125rem;
            text-align: center;
            font-weight: normal;
        }
        .kongge {
            width: 100%;
            height: .5rem;
            background-color: #fff;
            border-top: 0.5px solid #e0e0ee;
        }
        
        .seach_box {
            width: 100%;
            height: 2.1875rem;
            background: #ededf7;
            div {
                display: inline-block;
            }
            .city {
                width: 20%;
                height: 100%;
                line-height: 2.1875rem;
                text-align: right;
                font-size: .9375rem;
                i {
                    font-size: .6875rem;
                }
            }
            .seach {
                width: 60%;
                height: 1.5rem;
                background: #ffffff;
                margin-left: 2rem;
                margin-bottom: -0.5rem;
                border-radius: .3125rem;
                span {
                    display: inline-block;
                    height:1.5rem;
                    line-height: 1.5rem;
                }
                i {
                    display: inline-block;
                    width: 1.5rem;
                    height:1.5rem;
                    line-height: 1.5rem;
                    margin-left: 0.5rem;
                    text-align: center;
                    margin-left: 25%;
                }
            }
        }
        
    }
</style>