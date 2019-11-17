import React, {Component} from 'react';
import logo from './logo.png';
import searchIcon from './search-icon.png';


class EpicMenu extends  Component {

    
    

    render(){

        console.log(this.props.links)

        return(

            <nav className = 'menu'>

             <h1  className=" menu_logo">DLCC.</h1>

<div className = "menu__right">
 <ul className = " menu_list">
 <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
 <li className="menu__list-item"><a className="menu__link" href="#">About</a></li>
 <li className="menu__list-item"><a className="menu__link" href="#">Portfolio</a></li>
 <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li>


 </ul>
 <button style = {{
   backgroundImage: 'url(' + searchIcon +')'
 }} className="menu__search-button"></button>
 
 <form className="menu__search-form hide" method="POST">
 <input className="menu__search-input" placeholder="Type and hit enter"/>

 </form>

</div>
                
            </nav>
        )
    }



}

export default EpicMenu;