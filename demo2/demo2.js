/**
 * Created by dsky on 16/8/11.
 */

var vm1 = new Vue({
  el: '#example1',
  data: {
    a: 1
  },
  computed: {
    b: function () {
      return this.a + 1;
    }
  }
});
setTimeout("vm1.a = 2",2000);

var vm2 = new Vue({
  el: '#example2',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  }
});
vm2.$watch('firstName', function (val) {
  this.fullName = val + '' + this.lastName;
});
vm2.$watch('lastName', function (val) {
  this.fullName = this.firstName + '' + val;
});

var vm3 = new Vue({
  el: '#example3',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  computed: {
    fullName: {
      // getter
      get: function () {
        console.log('get');
        return this.firstName + ' ' + this.lastName;
      },
      // setter
      set: function (newValue) {
        console.log('set');
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
});
setTimeout("vm3.fullName = 'John Doe'",2000);