import Vue from 'vue'
import App from './App.vue'

import Hello from './components/Hello.vue'
import Foo from './components/FOO.vue'
import Bar from './components/BAR.vue'

import VueRouter from 'vue-router'




// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define route components

// 3. Create the router
const router = new VueRouter({
    //mode: 'html5',
    //base: __dirname,
    routes: [
        { path: '/', component: Hello },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]
})



new Vue({ // eslint-disable-line no-new
  el: '#app',
    router,
  render: (h) => h(App)
})
