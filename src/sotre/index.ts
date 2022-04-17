import { App } from 'vue'
import { createPinia, defineStore } from 'pinia'

const store = createPinia()

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
    }
  },
})

export default (app: App<Element>) => {
  app.use(store)
}

export { store }
