import React, {Component} from 'react';
import {Header} from 'react-native-elements';

class NavBar extends Component{
  render(){
    return(
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Music', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
  }
}

export default NavBar;
