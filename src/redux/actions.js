import firebase from '../store/firebase'
import { DATA_FROM_FIRESTORE } from './types'
const ref = firebase.firestore().collection('TODOS')

export const fetchToFirebase = () => {
    return async dispatch => {
        ref.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc) => {
              items.push(doc.data());
            })
            dispatch({type:DATA_FROM_FIRESTORE,payload:items})
          })
    }
}

//!Не вижу смысла писать его здесь так как он не связан с appReducers
const data = ref.doc()
export const sendToFireStore = (text) => {
          data.set({ //const res =
            title:text
          })
}