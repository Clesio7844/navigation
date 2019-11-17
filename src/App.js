import React from 'react';


function App() {
  return (
   

    <div className =" container center">

    <nav className = "manu">
       <h1 className=" menu_logo">Epic co.</h1>

       <div className = "manu-right">
        <ul className = " menu_list">
        <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
        <li className="menu__list-item"><a className="menu__link" href="#">About</a></li>
        <li className="menu__list-item"><a className="menu__link" href="#">Portfolio</a></li>
        <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li>


        </ul>
        <button className="menu__search-button"></button>
        
        <form className="menu__search-form hide" method="POST">
        <input class="menu__search-input" placeholder="Type and hit enter"/>

        </form>
       
       </div>
      
    </nav>





    </div>





      
  
  );
}

export default App;
