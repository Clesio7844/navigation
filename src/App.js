
import React, {Component} from 'react';

import EpicMenu from './EpicMenu';


class App extends Component {

  render() {

    let links = [
       {label: 'Home', link: '#home'},
       {label: 'About', link: '#about'},
       {label: 'Portfolio', link: '#portfolio'},
       {label: 'Contac', link: '#contact'},
    ];


  return (
   

    <div className ="container  center">
    
    <EpicMenu links = {links} />
  





    </div>





      
  
  );
}
}

export default App;
