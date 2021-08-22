import React from 'react';
import "../../App.scss"
import SearchComponent from "./SearchComponent";
import LogoBurgerContainer from "./LogoBurgerContainer";

const Header = () => {
    return (
       <header className={"header"}>
       <div className={"cont"}>
           <LogoBurgerContainer></LogoBurgerContainer>
           <button className={"to-kino"}>icon+Онлайн кинотеатр</button>
           <SearchComponent ></SearchComponent>
           <button className="login">Войти</button>
       </div>
       </header>
    );
};

export default Header;
