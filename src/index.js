/* eslint-disable */
import TimeLine from './components/TimeLine.vue'
import TimeLineItem from './components/TimeLineItem.vue'
export { TimeLine, TimeLineItem }
export function install(Vue) {
  Vue.component('TimeLine', TimeLine)
  Vue.component('TimeLineItem', TimeLineItem)
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
export default { install: install }