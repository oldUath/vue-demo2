
const Vue=window.Vue;
Vue.config.productionTip = false;

new Vue({
  el:"#app",
  data:{
    n:0,
    history:[],
    inUndoMode:false
  },
  //监听
  watch:{
    n(newValue,oldValue){
      if(!this.inUndoMode){
        this.history.push({from:oldValue,to:newValue});
      }
    }
  },


  template:`
      <div>
        {{n}}
        <hr>
        <button @click="add1">+1</button>
        <button @click="add2">+2</button>
        <button @click="minus1">-1</button>
        <button @click="minus2">-2</button>
        <hr>
        <button @click="undo">撤销</button>
        <hr>
        {{history}}
      </div>
  `,
  methods:{
    add1(){
      this.n+=1;
    },
    add2(){
      this.n+=2;
    },
    minus1(){
      this.n-=1;
    },
    minus2(){
      this.n-=2;
    },
    undo(){
      const last = this.history.pop();
      console.log(last);
      const old = last.from;
      this.inUndoMode = true;
      this.n = old;//watch是一异步的
    //  异步执行，
      this.$nextTick(()=>{
        this.inUndoMode = false;
      },0)

    }
  }

})
