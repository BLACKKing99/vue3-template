import { App } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      count: 1,
    }
  },
})

export default (app: App<Element>) => {
  app.use(store)
}
