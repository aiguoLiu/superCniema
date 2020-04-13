<template>
    <div id="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'Scroller',
    data() {
        return {
           
        }
    },
    //父子间的通信
    props: {
        handleToScroll: {
            type: Function,
            default: function(){}
        },
        headleToTouchend: {
            type: Function,
            default: function(){}
        }
    },
    mounted() {
        let scroll = new BScroll( this.$refs.wrapper, {
            // better-scroll提供了有tap事件（touchstart事件的封装）但是要在better-scroll里面生效需要加上tap:true（）详细见better-scroll
            scrollX: true,
            scrollY: true,
            tap: true,
            probeType: 1,
            // scrollbar: {
            //     fade: true,
            //     interactive: false
            // }
        })

        scroll.on('scroll', (pos) => {
            this.handleToScroll(pos);
        })

        scroll.on('touchEnd', (pos) => {
            this.headleToTouchend(pos);
        })


    }
}
</script>

<style>
    #wrapper {
        position: relative;
        overflow: hidden;
    }
</style>