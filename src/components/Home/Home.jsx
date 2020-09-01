import React, { Component } from 'react'
import Header from '../Header/Header';
import MenuItems from '../MenuItems/MenuItems';

import data from '../../data';
import epicWin from '../../assets/epicWin.gif'

import megaman from '../../megaman';

export default class Home extends Component {
    componentDidMount(){
       megaman().systemCall.configurar();
    }

    render() {
        const { options } = data
        return (
            <div>
               <Header img={epicWin} />
               <MenuItems options={options}/>
            </div>
        )
    }
}
