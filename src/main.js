import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import App from './App'
import Vuex from 'vuex'
import routes from './routes'
import scClient from 'socketcluster-client'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Vuex)

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    store.commit("routeChange", "start");
    next()
})

router.afterEach((to, from) => {
    document.title = to.meta.title
    store.commit("routeChange", "end");
    if (window.innerWidth < 992) {
        store.commit('left_menu', "close");
    } else {
        store.commit('left_menu', "close");
    }
})

var options = {
    host: 'api.straks.info:443',
    path: '/ws/',
    autoConnect: true,
    secure: true,
    connectTimeout: 10000,
    ackTimeout: 10000,
    channelPrefix: null,
    disconnectOnUnload: true,
    multiplex: true,
    autoReconnectOptions: {
        initialDelay: 10000,
        randomness: 10000,
        multiplier: 1.5,
        maxDelay: 60000
    },
    authEngine: null,
    codecEngine: null,
    subscriptionRetryOptions: {}
};

var socket = scClient.connect(options)

socket.on('connect', () => {
    console.log('Connected to sockets!')
})

var blockChannel = socket.subscribe('blocks')
blockChannel.watch((data) => {
    store.commit('updateLatestBlock', {
        latest_block: data
    })
})

var statsChannel = socket.subscribe('stats')
statsChannel.watch((data) => {
    store.commit('updateLatestStats', {
        latest_stats: data
    })
})

Vue.mixin({
    methods: {
        // eslint-disable-next-line
        formatBytes: function (a, b) {
            if (0 == a) return '0 Bytes';
            var c = 1024,
                d = b || 2,
                e = ['Bytes', 'KH', 'MH', 'GH', 'TH', 'PH', 'EH', 'ZH', 'YH'],
                f = Math.floor(Math.log(a) / Math.log(c));
            return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
        }
    }
})

new Vue({
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
}).$mount('#app')
