<template>
    <div id="filepro">
        <Header>
            <h1 slot="text">我的</h1>
        </Header>
        <div class="container">
            <Loading v-if="isshow"/>
            <div v-else>
                <div class="user">
                    <div class="box">
                        <div class="kongge"></div>
                        <img src="../../assets/imgs/user.png" alt="">
                    </div>
                    <div class="user_name">super_cinema_15489765564</div>
                </div>
                <div class="indent">
                    <div class="page">我的订单</div>
                    <span class="logo-one">
                        <a href="javascript:;"></a>
                        <p>电影</p>
                    </span>
                    <span class="logo-tow">
                        <a href="javascript:;"></a>
                        <p>商城</p>
                    </span>
                </div>
                <div class="zaiwei"></div>
                <div class="list">
                    <div class="one">优惠券<i class="iconfont">&#xe641;</i></div>
                    <div class="tow">折扣卡<i class="iconfont">&#xe641;</i></div>
                </div>
                <div class="bk"></div>
            </div>
        </div>
        
        <Topbar/>
    </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Header from '@/components/Header'

import Loading from '@/components/Loading'
export default {
    name: 'Filepro',
    data() {
        return {
            isshow: true
        }
    },
    mounted() {
        setTimeout( () => {
            this.isshow = false
        },3000)
    },
    components: {
        Topbar,
        Header,
        Loading
    }
}
</script>

<style lang="scss" scoped>
    #filepro {
        width: 100%;
        background: #f2f2f2;
        h1 {
            display: inline-block;
            margin-left: 33.33%;
            width: 33.333%;
            font-size: 1.125rem;
            text-align: center;
            font-weight: normal;
        }
        .container {
            height: 33.4rem;
            margin-top: 3.125rem;
            .user {
                width: 100%;
                height: 9.375rem;
                background: white;
                margin-top: 3.125rem;
                .user_name {
                    height: 20%;
                    line-height: 1.875rem;
                    text-align: center;
                }
                .box {
                    width: 6.25rem;
                    height: 80%;
                    background: white;
                    margin-left: 35%;
                    .kongge {
                        height: 1rem;
                    }
                    img {
                        display: block;
                        width: 100%;
                        height: 6.25rem;
                        border-radius: 50%;
                    }
                }
            }
            .indent {
                height: 9.375rem;
                background-color: #ffffff;
                .page {
                    height: 2.1875rem;
                    line-height: 2.1875rem;
                    text-align: center;
                    font-size: 1rem;
                    font-weight: 600;
                    border-bottom: 1px solid #f2f2f2;
                }
                span {
                    display: inline-block;
                    width: 50%;
                    a {
                        display: block;
                        width: 3.125rem;
                        height: 3.125rem;
                        margin-left: 35%;
                        margin-top: 1rem;
                    }
                    p {
                        display: block;
                        width: 3.125rem;
                        height: 1.5625rem;
                        line-height: 1.5625rem;
                        margin: 0;
                        padding: 0;
                            margin-left: 35%;
                            text-align: center;
                    }
                }
                .logo-one {
                    a {
                        background-image: url('../../assets/imgs/movie.png');
                        background-size: 3.125rem 3.125rem;
                    }
                }
                .logo-tow {
                    a {
                        background-image: url('../../assets/imgs/shop.png');
                        background-size: 3.125rem 3.125rem;
                    }
                }
            }
            .list {
                height: 5rem;
                background: #fff;
                div {
                    width: 94%;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    margin-left: 1.25rem;
                    border-bottom: 1px solid #f2f2f2;
                    i {
                        display: inline-block;
                        width: 2.5rem;
                        height: 2.5rem;
                        line-height: 2.5rem;
                        text-align: center;
                        margin-left: 15rem;
                        transform: rotate(180deg);
                        color: #e0e0e0;
                    }
                }
            }
            .bk {
                height: 8.3rem;
            }
            .zaiwei {
                height: 1rem;
            }
        }
        
    }
</style>