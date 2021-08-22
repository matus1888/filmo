import React from 'react';
import "./App.scss"
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Banner from "./Components/Banner/Banner";
import Choise from "./Components/Choise/Choise";

const App = (props) => {
    return (
        <>
            {props.burger && <div className={"modal-window"} onClick={props.toggleBurger}></div>}
            <Header/>
            <div className="container">
                <div className={"main-container"}>
                    {props.burger && <Menu className="menu"></Menu>}
                    <div className="no-menu__container">
                        <Banner></Banner>
                        <Choise></Choise>
                        {/*    <Look className="block__look__and__choiсe_and__trailers"></Look>*/}
                        {/*    <Advertising className="advertising"></Advertising>*/}
                        {/*    <Main className="main"></Main>*/}
                        {/*    <Calendar className="calendar__cashes"></Calendar>*/}
                        {/*    <Cashes className="calendar__cashes"></Cashes>*/}
                    </div>
                </div>
            </div>
            {/*<Footer className="footer"></Footer>*/}
            </>
    );
};

export default App;
