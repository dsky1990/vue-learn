/**
 * Created by dsky on 16/7/28.
 */

var vm1 = new Vue({
  el: '#example1',
  data: {
    message : 'hello vue!'
  }
});

var vm2 = new Vue({
  el: '#example2',
  data: {
    message: 'hello vue!'
  }
});

var vm3 = new Vue({
  el: '#example3',
  data: {
    items: [
      {text: 'item1'},
      {text: 'item2'},
      {text: 'item3'}
    ]
  }
});

var vm4 = new Vue({
  el: '#example4',
  data: {
    html_tpl: '<h1>Hello Vue.js!</h1>'
  }
});