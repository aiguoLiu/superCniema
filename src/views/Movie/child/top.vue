<template>
    <div id="top">
        <div class="left">
            <div>
                <span>赣州</span>
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
        <div class="right">
            <i class="iconfont">&#xe67d;</i>
        </div>
    </div>
</template>

<script>
export default {

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
                    width: 60%;
                    height: 1.25rem;
                    text-align: right;
                    line-height: 1.25rem;
                    margin-top: .625rem;
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
            border-bottom: 2px solid red;
        }
        .center {
            width: 60%;
            height: 2.5rem;
            .center_one {
                float: left;
                width: 50%;
                span {
                    display: inline-block;
                    width: 80%;
                    height: 2.1875rem;
                    font-size: .9375rem;
                    text-align: center;
                    line-height: 2.1875rem;
                    font-weight: 600;
                    margin-left: .9375rem;
                }
            }
            .center_tow {
                float: right;
                width: 50%;
                span {
                    display: inline-block;
                    width: 80%;
                    height: 2.1875rem;
                    font-size: .9375rem;
                    text-align: center;
                    line-height: 2.1875rem;
                    font-weight: 600;
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