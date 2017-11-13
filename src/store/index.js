import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    message: '',
    aTodos: [{value: '默认默认', id: 0}]
  },
  getters: {
    nCounts (state) {
      return state.aTodos.length
    }
  },
  mutations: {
    ONADDTODO (state, item) {
      state.aTodos.push(item)
    },
    ONDELETETODO (state, index) {
      state.aTodos.slice(index, 1)
    },
    ONERROR (state, str) {
      state.message = str
    }
  },
  actions: {
    onAddTodo (context, item) {
      if (item.value !== '') {
        context.commit('ONADDTODO', item)
        context.commit('ONERROR', '')
      } else {
        context.commit('ONERROR', '添加失败')
      }
    },
    //提交 ONDELTODO
    onDelTodo ({commit}, index) {
      commit('ONDELTODO', index)
    }
  },
  modules: {},
})
export default store
