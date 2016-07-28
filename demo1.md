# vue学习(1) -- 数据绑定

## Vue 实例

### 构造器

每个vue程序都需要通过`Vue`创建一个Vue的根实例:

```js
var vm = new Vue({
    // code here
});
```

Vue实例就是[MVVM](https://en.wikipedia.org/wiki/Model_View_ViewModel)中描述的 ViewModel - 因此在文档中经常会使用`vm`这个变量名。

### 属性与方法

每个Vue实例都会代理其`data`对象里的所有属性:

```js
var data = { a: 1 }
var vm = new Vue({
  data: data
})

vm.a === data.a // -> true

// 设置属性也会影响到原始数据
vm.a = 2
data.a // -> 2

// ... 反之亦然
data.a = 3
vm.a // -> 3
```

除了这些数据属性，Vue 实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 `$`，以便与代理的数据属性区分。例如：

```js
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true    
```

## 数据绑定语法

Vue.js 的模板是基于 DOM 实现的。这意味着所有的 Vue.js 模板都是可解析的有效的 HTML，且通过一些特殊的特性做了增强。Vue 模板因而从根本上不同于基于字符串的模板，请记住这点。

### 插值

#### 文本

vue 插入文本的方法和angular类似，使用 “Mustache” 语法（双大括号）：

```js
<span>Message: {{ msg }} </span>
```

Mustache 标签会被相应数据对象的 `msg` 属性的值替换。每当这个属性变化时它也会更新。你也可以只处理单次插值，今后的数据变化就不会再引起插值更新了：

```js
<span>This will never change: {{* msg }}</span>
```

#### 原始的html

双 Mustache 标签将数据解析为纯文本而不是 HTML。为了输出真的 HTML 字符串，需要用三 Mustache 标签：

```js
<div>{{{ raw_html }}}</div>
```

#### html 特性

Mustache 标签也可以用在 HTML 特性 (Attributes) 内：

```js
<div id="item-{{ id }}"></div>
```

### 绑定表达式

放在 Mustache 标签内的文本称为绑定表达式。在 Vue.js 中，一段绑定表达式由一个简单的 JavaScript 表达式和可选的一个或多个过滤器构成。

#### JavaScript 表达式

到目前为止，我们的模板只绑定到简单的属性键。不过实际上 Vue.js 在数据绑定内支持全功能的 JavaScript 表达式：

```js
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}
```

这些表达式将在所属的 Vue 实例的作用域内计算。一个限制是每个绑定只能包含单个表达式，因此下面的语句是无效的：

```js
<!-- 这是一个语句，不是一个表达式： -->
{{ var a = 1 }}

<!-- 流程控制也不可以，可改用三元表达式 -->
{{ if (ok) { return message } }}
```

#### 过滤器

Vue.js 允许在表达式后添加可选的“过滤器 (Filter) ”，以“管道符”指示：

```js
{{ message | capitalize }}
```

过滤器也可以接受参数：

```js
{{ message | filterA 'arg1' arg2 }}
```

过滤器函数始终以表达式的值作为第一个参数。带引号的参数视为字符串，而不带引号的参数按表达式计算。这里，字符串 `arg1` 将传给过滤器作为第二个参数，表达式 `arg2` 的值在计算出来之后作为第三个参数。