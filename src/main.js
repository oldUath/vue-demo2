
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
      user:{
        email:"dong@qq.com",
        nickname:"oldUath",
        phone:"12812345678"
      },
      users:[
        createUser('董阁','男'),
        createUser('老黄','女'),
        createUser('老李','男')
      ],
      displayUsers:[]
    }
  },
  //创建的时候就赋值
  created() {
    this.displayUsers=this.users
  },
  methods:{
    showMale(){
      //filter是筛选，不会修改原数组会创建一个新的
      this.displayUsers = this.users.filter(u=>u.gender === '男')
    },
    showFemale(){
      this.displayUsers = this.users.filter(u=>u.gender === '女')
    },
    showAll(){
      this.displayUsers = this.users
    }
  },
  //计算属性
  computed:{
    displayName(){
      const user=this.user
      return user.nickname ||user.phone||user.email
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
