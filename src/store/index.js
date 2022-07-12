import { createStore } from "vuex";
import galleryModule from './gallery/index.js';
import counterModule from './counter/index.js';
import menuModule from './menu/index.js';

const store = createStore({
    modules: {
        gallery: galleryModule,
        counter: counterModule,
        menu: menuModule
    }
});

export default store;