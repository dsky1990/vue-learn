/**
 * Created by dsky on 16/8/23.
 */

const vue1 = new Vue({
  el: '#example1',
  data:{
    isA: true,
    isB: false
  }
});
const vue2 = new Vue({
  el : '#example2',
  data: {
    class1: false,
    class2: true,
    setClass: {}
  },
  computed: {
    setClass: {
      get: function () {
        return {class1: this.class1, class2:this.class2}
      }
    }
  }
});
const vue3 = new Vue({
  el: '#example3',
  data: {
    isA: true,
    isB: false,
    a: 'class1',
    b: 'class2'
  }
});
const vue4 = new Vue({
  el: '#example4',
  data: {
    style: {
      color: 'orange',
      fontSize: '18px'
    }
  }
});