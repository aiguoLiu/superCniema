<template>
    <div id="top">
        <div class="left">
            <div @click="handleClick">
                <span>{{ $store.state.city.nm }}</span>
                <i>▼</i>
            </div>
        </div>
        <div class="center">
            <router-link tag="div" to="/movie/now" class="center_one">
                <span>
                    正在热映
                </span>
            </router-link>
            <router-link tag="div" to="/movie/wait" class="center_tow">
                <span>
                    即将上映
                </span>
            </router-link>
        </div>
        <div class="right" @click="handleChangePage">
            <i class="iconfont">&#xe67d;</i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'top',
    methods: {
        handleChangePage() {
            //编程式导航简单的跳转到seach页面
            this.$router.push(`/seach`)
        },
        handleClick() {
            this.$router.push(`/city`)
        }
    }
}
</script>

<style lang="scss" scoped>
    #top {
        display: flex;
        width: 100%;
        height: 2.5rem;
        border-top: .0625rem solid black;
        .left {
            width: 20%;
            div {
                span {
                    display: inline-block;
                    margin-top: .625rem;
                    margin-left: 0.5rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    // overflow: hidden;
                }
                i {
                    display: inline-block;
                    width: .9375rem;
                    height: .9375rem;
                    font-size: .625rem;
                }
            }
        }
        div.router-link-active {
            border-bottom: 1.5px solid red;
            font-size: 1rem !important;
            color: #333;
        }
        .center {
            width: 60%;
            height: 2.5rem;
            .center_one {
                float: left;
                width: 50%;
                font-size: .85rem;
                font-weight: 700;
                span {
                    display: inline-block;
                    width: 80%;
                    height: 2.1875rem;
                    text-align: center;
                    line-height: 2.1875rem;
                    margin-left: .9375rem;
                    
                }
            }
            .center_tow {
                float: right;
                width: 50%;
                font-size: .85rem;
                font-weight: 700;
                span {
                    display: inline-block;
                    width: 80%;
                    height: 2.1875rem;
                    text-align: center;
                    line-height: 2.1875rem;
                    margin-left: .9375rem;
                }
            }
        }
        .right {
            width: 20%;
            i {
                display: block;
                width: 1.875rem;
                height: 1.875rem;
                line-height: 1.875rem;
                color: red;
                font-size: 1.5rem;
                text-align: center;
                margin: .25rem 1.5625rem;
            }
        }
    }
</style>