import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 10,
        run:true
    },
    mutations: {
        increment (state) {
            state.count++
        },
        increment_N (state, m) {
            state.count += m;
        },
        switch (state){
          state.run = !state.run;
        }
    }
})