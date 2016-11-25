import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)



var ws = new WebSocket('ws://192.168.1.173:3000');

function createWebSocketPlugin (socket) {
    return store => {
        socket.onmessage = function (event) {
            store.commit('receiveData', event.data)

        }
        store.subscribe(mutation => {
            console.log("SENDINF TO WEBSCOKET!!!!!! TYPS::::", mutation.type);
            if (mutation.type === 'increment_N') {
                console.log("SENDINF TO WEBSCOKET!!!!!! ",mutation.payload, store.state);
                //socket.emit('update', mutation.payload)

            }
        })
    }
}
const plugin = createWebSocketPlugin(ws);
export default new Vuex.Store({
    state: {
        count: 10,
        run:true
    },
    plugins: [plugin],
    mutations: {
        increment (state) {
            state.count++
        },
        increment_N (state, m) {
            state.count += m;
        },
        receiveData(state,data){
            console.log(data);
        },
        switch (state){
          state.run = !state.run;
        },
    }
})