<template>
    <div id="topbar">
        <router-link tag="div" to="/movie" class="left">
            <i class="iconfont">&#xe6ee;</i>
            <span>电影</span>
        </router-link>
        <router-link tag="div" to="/cinema" class="center">
            <i class="iconfont">&#xe8c0;</i>
            <span>影院</span>
        </router-link>
        <router-link tag="div" to="/filepro" class="right">
            <i class="iconfont">&#xe613;</i>
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../.././assets/css/fonts.css';

    * {
        margin: 0;
        padding: 0;
    }
    #topbar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        height: 3.125rem;
        background-color: #ffffff;
        box-shadow: -3px 0 3px 3px rgba($color: #b0b0b0, $alpha: .4);
        div.router-link-active {
            color: pink;
        }
        .left,.center,.right {
            flex: 1;
            text-align: center;
            color: #999;
            i {
                display: block;
                width: 100%;
                height: 1.875rem;
                line-height: 1.875rem;
                font-size: 1.5625rem;
            }
            span {
                display: block;
                width: 100%;
                height: 1.25rem;
                line-height: 1.25rem;
                font-size: .875rem;
            }
        }
    }
</style>