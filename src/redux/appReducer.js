import { DATA_FROM_FIRESTORE } from "./types";

const initialState = {
    data:[],
}
export const appReducer =(state=initialState,action)=>{
    switch (action.type) {
        case DATA_FROM_FIRESTORE:
            return{...state,data:action.payload}
      default:return state;
    }
}