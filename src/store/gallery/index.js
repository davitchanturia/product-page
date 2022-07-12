export default {
    namespaced: true,
    state() {
        return {
            items: [
                {name: 'first', path: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'},
                {name: 'second', path: 'https://images.unsplash.com/photo-1603808033596-5d1fa1629eae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'},
                {name: 'third', path: 'https://images.unsplash.com/photo-1603808033176-9d134e6f2c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'},
                {name: 'fourth', path: 'https://images.unsplash.com/photo-1603808033587-935942847de4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80'}
            ],
            active: {
                name: 'first', 
                path: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
            },
        }
    },
    getters: {
        getGalleryItems(state) {
            return state.items;
        },
        getActiveItem(state) {
            return state.active;
        }
    },
    mutations: {
        changeActiveFoto(state, payload) {
            state.active = payload;
        }
    },
    actions: {
        changeActiveFoto(context, payload) {
            context.commit('changeActiveFoto', payload);
        }
    }
}