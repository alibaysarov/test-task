import { createStore } from "vuex";
import { tableModule } from "./modules/tableModule";
export default createStore({
  modules:{
    table:tableModule
  }
})