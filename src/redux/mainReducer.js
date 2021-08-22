const TOGGLE_BURGER="toggle"


let initialState= {
    burger:false
}
let mainReducer= (state=initialState, action) =>{

    switch (action.type) {
        case TOGGLE_BURGER:{
          return {...state, burger: !state.burger}
        }
        default :
            return state;
    }
}

export const ACToggle=()=>({type: TOGGLE_BURGER})
export default mainReducer