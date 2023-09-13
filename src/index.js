/* eslint-disable */
import TimeLine from './components/TimeLine.vue'
import TimeLineItem from './components/TimeLineItem.vue'
import TimeLineIndividual from './components/TimeLineIndividual.vue'
import TimeLineIndividualItem from './components/TimeLineIndividualItem.vue'
import WelcomeComponent from './components/WelcomeComponent.vue'
import ModalMuf from './components/ModalMuf.vue'
import FlagComponent from './components/FlagComponent.vue'
export { TimeLine, TimeLineItem, TimeLineIndividual, TimeLineIndividualItem, WelcomeComponent, ModalMuf, FlagComponent }
export function install(Vue) {
  Vue.component('TimeLine', TimeLine)
  Vue.component('TimeLineItem', TimeLineItem)
  Vue.component('TimeLineIndividual', TimeLineIndividual)
  Vue.component('TimeLineIndividualItem', TimeLineIndividualItem)
  Vue.component('WelcomeComponent', WelcomeComponent)
  Vue.component('ModalMuf', ModalMuf)
  Vue.component('FlagComponent', FlagComponent)
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
export default { install: install }