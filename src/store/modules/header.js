const state = {
    userName: '123'
}

const getters = {
    userName(state) {
        return state.userName
    }
}

const actions = {
    sendName ({commit, state},data) {
        console.log(data)
        commit('SEND_NAME', data)
    }
}

const mutations = {
    SEND_NAME (state, data) {
        state.userName = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}