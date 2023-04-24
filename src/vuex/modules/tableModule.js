export const tableModule={
  state(){
    return{
      menuShown:false,
      inputVal:'',
      rows:[
        {
          id:1,
          name:'Мраморный щебень фр. 2-5 мм, 25кг',
          weight:25,
          price:1231,
          count:12,
          total(){
            return this.price*this.count
          }
        },
        {
          id:2,
          name:'Мраморный щебень фр. 2-5 мм, 25кг',
          weight:15,
          price:1232,
          count:12,
          total(){
            return this.price*this.count
          }
        },
        {
          id:3,
          name:'Мраморный щебень фр. 2-5 мм, 25кг',
          weight:10,
          price:1233,
          count:13,
          total(){
            return this.price*this.count
          }
        },
      ]
    }
  },
  getters:{
    getInputVal(state){
      return state.inputVal
    },
    getTotal(state){
      const weight=state.rows.map(el=>el.weight).reduce((a,b)=>a+b)
      const count=state.rows.map(el=>el.count).reduce((a,b)=>a+b)
      const totalPrice=state.rows.map(el=>el.count*el.price).reduce((a,b)=>a+b)
      return{
        weight,
        count,
        totalPrice
      }
    }
  },
  mutations:{
    menuHandler(state){
      state.menuShown=!state.menuShown
    },
    
    refresh(state){
      
      state.rows=state.rows.map(el=>{
        el.total=el.count*el.price
        
        return{
          ...el,
        }
      })
    },
    inputHandler(state,payload){
      state.inputVal=payload
    },
    addRow(state){
      class Product{
        price=1000
        count=1
        name=''
        weight=10
        total=0
        id=0
        constructor(name,id){
          this.name=name
          this.id=id
          this.total=this.price*this.count
        }
      }
      if(state.inputVal!=''){
        const id=state.rows.at(-1).id+1
        const el=new Product(state.inputVal,id)
        state.rows.push(el)
        this.commit('refresh')
      }
      
    },
    removeRow(state,payload){
      console.log(payload);
      state.rows=state.rows.filter(el=>el.id!=payload);
      this.commit('refresh')
      return state.rows
    }
  },
  actions:{}
}