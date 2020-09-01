import React, {useState} from 'react'

const MenuItems = props => {
  return props.options.map((item, index) => <button key={index}>{item.name}</button>)
}

export default MenuItems;

