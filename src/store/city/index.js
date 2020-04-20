const state = {
    nm: window.localStorage.getItem('nowNm') || '北京',
    id: window.localStorage.getItem('nowId') || 1
};

const mutations = {
    //方法大写表示是状态管理的方法
    CITY_INFO(state,payload) {
        state.nm = payload.nm
        state.is = payload.id
    }
};

const actions = {
    
};

export default {
    state,
    actions,
    mutations,
    //区分那个状态管理
    nameSpaced: true

}