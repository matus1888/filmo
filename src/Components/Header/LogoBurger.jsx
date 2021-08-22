import React from 'react';


const LogoBurger = ({toggleBurger}) => {

    return (
        <div>
            <span onClick={toggleBurger}>
                Burger
            </span>
            ФИЛЬМОПОИСК
        </div>
    );
};

export default LogoBurger;
