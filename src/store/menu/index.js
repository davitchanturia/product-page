export default {
    namespaced: true,
    state() {
        return {
            show: false
        }
    },
    getters: {
        show(state) {
            return state.show;
        }
    },
    mutations: {
        show(state, payload) {
            state.show = payload;
        }
    },
    actions:{
        show(context, payload) {
            context.commit('show', payload);
        }
    }
}