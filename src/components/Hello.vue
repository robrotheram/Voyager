<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="hello">

    <RealTime :time="10" :interval="50" > </RealTime>

    <button class="btn btn-primary" v-on:click="sendAlert">{{button_text}}</button>

    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <hr/>
    <p>{{doneTodosCount}}</p>
    <hr/>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <p>Ecosystem hello bob</p>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="https://github.com/vuejs/vueify" target="_blank">vueify</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

  <img src="static/img/users.png"/>




</div>
</template>

<script>
    import RealTime from './d3/RealTime.vue'



export default {
    components:{'RealTime': RealTime },
    name: 'foo',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
  computed: {
    doneTodosCount () {
      return this.$store.state.count
    },
    button_text(){
      if(this.$store.state.run){return "pause"}else {return "play"}
    }
  },

    methods:{
        sendAlert: function (event) {
            console.log("DSATA");
            //this.$emit('test')
          // this;
          this.$store.commit('increment_N',1);
          this.$store.commit('switch');
        }
    }
}
</script>

<style scoped>
#hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

path {
    stroke: steelblue;
    stroke-width: 2;
    fill: none;
}

.axis path,
.axis line {
    fill: none;
    stroke: grey;
    stroke-width: 1;
    shape-rendering: crispEdges;
}


.tick line{
    opacity: 0.5;
}
</style>


