import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Router from './router'

Vue.use(Vuex)

// var production = !window.location.host.includes('localhost')
// var baseUrl = production ? '//leagueapp.herokuapp.com/' : '//localhost:5000/'
// let api = Axios.create({
//   baseURL: baseUrl + 'api/',
//   timeout: 3000,
//   withCredentials: true
// })
// let auth = Axios.create({
//   baseURL: baseUrl + 'account/',
//   timeout: 3000,
//   withCredentials: true
// })

let leagueApi = Axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn/8.21.1/data/en_US/'
})
//profileicon.json 
//champion.json 
//champion/{champ name}
//item.json 
//mastery.json 
//rune.json
//summoner.json 

let imgApi = Axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/'
})
//send champion name with .png to get splash art


export default new Vuex.Store({
  state: {
    activeBuild: {},
    champions: [],
    items: [],
    masteries: [],
    runes: [],

  },
  mutations: {
    setChampions(state, data) {
      state.champions = data
    }
  },
  actions: {
    getChamps({ commit, dispatch }) {
      leagueApi.get('champion.json')
        .then(res => {
          commit('setChampions', res.data)
        })
    },
    getImgs({ commit, dispatch }, payload) {
      imgApi.get('')
    }
  }
})
