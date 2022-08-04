import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    cityId: '310100',
    cityName: '上海',
    cinemaList: [],
    isTabbarShow: true
  },
  getters: {
  },
  mutations: {
    changeCityName (state, cityName) {
      state.cityName = cityName
    },
    changeCityId (state, cityId) {
      state.cityId = cityId
    },
    changeCinemaList (state, cinemaList) {
      state.cinemaList = cinemaList
    },
    clearCinemaList (state) {
      state.cinemaList = []
    },
    tabbarShow (state) {
      state.isTabbarShow = true
    },
    tabbarHide (state) {
      state.isTabbarShow = false
    }
  },
  actions: {
    getCinemaList (store, cityId) {
      // console.log("getCinemaData")
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=3312386`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        store.commit('changeCinemaList', res.data.data.cinemas)

        // this.$nextTick(() => {
        //   new BetterScroll('.box', {
        //     scrollbar: {
        //       fade: true
        //     }
        //   })
        // })
      })
    }
  },
  modules: {
  }
})
