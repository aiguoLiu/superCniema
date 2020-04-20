<template>
    <div id="city">
        <div class="bk">
            <div class="orientation">
                <div class="txt">
                    定位城市
                </div>
                <div class="txt_ori">
                    <span>定位失败,请点击重试</span>
                </div>
            </div>
            <div class="hot">
                <div class="hot_txt">
                    热门城市
                </div>
                <div class="hot_city">
                    <span class="hot_list" 
                        v-for="item in hot_city" :key="item.id"
                        @click="handleChangeCity(item.nm,item.id)">
                        {{ item.nm }}
                    </span>
                </div>
            </div>
            <section class="city">
                <div class="ori">
                    定位
                </div>
                <div class="hots">
                    热门
                </div>
                <div class="zimu" v-for="item in zimu" :key="item.num">
                    {{ item }}
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'City',
    data() {
        return {
            hot_city: [
                {
                    id: 1,
                    nm: '上海'
                },
                {
                    id: 2,
                    nm: '北京'
                },
                {
                    id: 3,
                    nm: '广州'
                },
                {
                    id: 4,
                    nm: '深圳'
                },
                {
                    id: 5,
                    nm: '武汉'
                },
                {
                    id: 6,
                    nm: '天津'
                },
                {
                    id: 7,
                    nm: '西安'
                },
                {
                    id: 8,
                    nm: '南京'
                },
                {
                    id: 9,
                    nm: '杭州'
                },
                {
                    id: 10,
                    nm: '成都'
                },
                {
                    id: 11,
                    nm: '重庆'
                }
            ],
            zimu: [
                'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
                'S','T','U','V','W','X','Y','Z'
            ]
        }
    },
    methods: {
        handleChangeCity(nm,id) {
            this.$store.commit('CITY_INFO',{nm, id})
            //在模块中的加上模块名报错？？？不加模块名没报错
            this.$router.back()
            //记录上一次的记录，本地存储
            window.localStorage.setItem('nowNm',nm)
            window.localStorage.setItem('nowId',id)
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        
        padding: 0;
    }
    #city {
        width: 100%;
        min-height: 100%;
        background-color: #ebebeb;
        .bk {
            width: 90%;
            .orientation {
                width: 100%;
                //70px
                height: 4.375rem;
                .txt {
                    display: block;
                    width: 80%;
                    height: 1.25rem;
                    line-height: 1.25rem;
                    font-size: .8125rem;
                    margin-left: 1.1rem;
                }
                .txt_ori {
                    position: relative;
                    width: 100%;
                    height: 2.8125rem;
                    background-color: #f5f5f5;
                    span {
                        position: absolute;
                        top: 0.7rem;
                        left: 1rem;
                        width: 50%;
                        height: 1.5625rem;
                        line-height: 1.5625rem;
                        text-align: center;
                        background-color: white;
                        font-size: .8125rem;
                    }
                }
            }
            .hot {
                width: 100%;
                //220px
                height: 13.75rem;
                .hot_txt {
                    display: block;
                    width: 80%;
                    height: 1.25rem;
                    line-height: 1.25rem;
                    font-size: .8125rem;
                    margin-left: 1.1rem;
                }
                .hot_city {
                    display: flex;
                    flex-flow: wrap;
                    height: 11.25rem;
                    background-color: #f5f5f5;
                    overflow: hidden;
                    margin-top: 0.5rem;
                    .hot_list {
                        margin: 0 0.5rem;
                        margin-top: 0.6rem;
                        width: 28%;
                        height: 1.875rem;
                        line-height: 1.875rem;
                        text-align: center;
                        background-color: white;
                        border-radius: 0.2rem;
                    }
                }
            }
            .city {
                position: fixed;
                top: 3rem;
                right: 0;
                width: 8%;
                height: 34rem;
                div {
                    width: 100%;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    text-align: center;
                    font-size: .8rem;
                }
            }
        }
    }
</style>