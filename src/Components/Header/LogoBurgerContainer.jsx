import LogoBurger from "./LogoBurger";
import {ACToggle} from "../../redux/mainReducer";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
   return {burger: state.mainReducer.burger}
};
let mapDispatchToProps=(dispatch)=>{
   return {toggleBurger: ()=>dispatch(ACToggle())}
}

export default connect(mapStateToProps,mapDispatchToProps)(LogoBurger)