export default {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    getters: {
        getCounter(state) {
            return state.counter;
        },
    },
    mutations: {
        changeCounterInc(state) {
            if(state.counter > 19) {
                state.counter = 20;
            }else{
                state.counter = state.counter + 1;
            }
        },
        changeCounterDesc(state) {
            if(state.counter < 1) {
                state.counter = 0
            }else{
                state.counter = state.counter - 1;
            }

        }
    },
    actions: {
        changeCounterInc(context) {
            context.commit('changeCounterInc');
        },
        changeCounterDesc(context) {
            context.commit('changeCounterDesc');
        },
    }
}