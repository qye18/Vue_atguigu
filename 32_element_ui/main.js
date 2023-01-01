import Vue from 'vue';
import App from './App.vue';

//完整引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import {Button, Row, DataPicker, DatePicker} from 'element-ui'

Vue.config.productionTip = false
// ElementUI里所有样式都被注册，会导致整个应用过大
// Vue.use(ElementUI);

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component('date-picker1', DatePicker);

new Vue({
  render: h => h(App),
}).$mount('#app')
