import App from "./App";
import {connect} from "react-redux";
import {ACToggle} from "./redux/mainReducer";

let mapStateToProps = (state) => {
    return {
        burger: state.mainReducer.burger
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        toggleBurger:()=>dispatch(ACToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)