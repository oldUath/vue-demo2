
const Vue=window.Vue;
Vue.config.productionTip = false;
//传入名字和性别自动创建
let id=0
const createUser = (name,gender)=>{
  id+=1
  return {id:id,name:name,gender:gender}
}

new Vue({
  el:"#app",
  data(){
    return {
      users:[
        createUser('董阁','男'),
        createUser('老黄','女'),
        createUser('老李','男')
      ],
      gender:""
    };
  },
  //计算属性
  computed:{
    displayUsers(){
      const {users,gender}=this;
      if(gender === ""){
        return users;
      }else if(gender ==='male'){
        return users.filter(u=>u.gender ==='男');
      }else if(gender === 'female'){
        return users.filter(u=>u.gender ==='女');
      }else{
        return 0
      }
    }
  },
  methods:{
    showMale(){
      //filter是筛选，不会修改原数组会创建一个新的
      this.gender = 'male'
    },
    showFemale(){
      this.gender = 'female'

    },
    showAll(){
      this.gender = ''
    }
  },

  template:`
      <div>
        <div>
          {{displayName}}
        </div>
        <hr>
        <div>
          <div><button @click="showAll">全部</button><button @click="showMale">男</button><button @click="showFemale">女</button></div>
          <ul>
            <li v-for="(u,index) in displayUsers" :key="index">{{u.name}}--{{u.gender}}</li>
          </ul>
        </div>
      </div>
      
  `
})
