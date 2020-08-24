# .sync修饰符
>组件不能直接修改props外部的数据

如果强行修改外部的属性会报错
这个是子组件Child 点击按钮减去100，money的值与父组件的total值一样:money="total"
```
    <button @click="money-=100">
      <span>花钱</span>
    </button>
```

> 需要使用$emit()函数;**触发当前实例上的事件。附加参数都会传给监听器回调（父组件）。**

在子组件使用 $emit(‘参数1’，参数2)
当前实例继承了eventBus，可以触发一个事件
```
    <!-- $emit()触发一个事件，update:money是事件名   -->
    <button @click="$emit('update:money',money-100)">
```

> 在父组件使用$$event()接受参数2
他就是接收子组件参数2返回的结果的

```
<!--    传给子组件一个money值,v-on是监听子组件的update:money事件，$event获取子组件事件的结果-->
    <Child :money="total" v-on:update:money="total = $event" />
```
父组件这一大段代码太麻烦了，vue把它封装成了一个修饰符
   ```javascript 
    <Child :money.sync="total"  />
```

