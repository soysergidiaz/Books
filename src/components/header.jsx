import React from "react";

function Header(){

    function changeHover({target}){
        if (target.className !== 'actual') {
            document.querySelector('a.actual').className = 'no-actual';
            target.className = 'actual';
        } 
    }

    function changeLeaving({target}) {
        /*const thisPage = document.querySelector('a.no-actual');
        console.log(thisPage);*/
    }

    return (
        <header>
            <h1>My Library</h1>
            <nav>
                <a href="#" className="actual" onMouseOver={changeHover}>Home</a>
                <a href="#" onMouseOver={changeHover}>Ficción</a>
                <a href="#" onMouseOver={changeHover}>No Ficción</a>
                <a href="#" onMouseOver={changeHover}>Lista de deseos</a>
            </nav>
        </header>
    );
}

export default Header;