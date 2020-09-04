import React, { Component } from 'react'
import Header from '../Header/Header';
import MenuItems from '../MenuItems/MenuItems';

import  { FirebaseContext } from '../Firebase';

import data from '../../data';
import epicWin from '../../assets/epicWin.gif'

import megaman from '../../megaman';

export default class Home extends Component {
  state = {
    introduced : false,
    data: null,
    userInfo : {
      userName : null
    }
  }

  componentWillMount() {
    const firstName = localStorage.getItem('firstName');
    firstName && this.setState({introduced: true, userInfo: ({userName: firstName})})
    this.setState({data: data})
  }

  componentDidMount(){
    !this.state.introduced && megaman().systemCall.configurar();
  }

  render() {
    const { options } = data
    return (
      <FirebaseContext.Consumer>
        {firebase => {
          return (
            <div>
              <Header img={epicWin} />
              <MenuItems options={options}/>
            </div>
          );
        }}
      </FirebaseContext.Consumer>
      
    )
  }
}
