const routes = [
  { path: '/home', component: home },
  { path: '/employee', component: employee },
  { path: '/department', component: department }
];

// Criar o roteador
const router = new VueRouter({
  routes
});

// Criar a instância do Vue
new Vue({
  el: '#app',
  router
});