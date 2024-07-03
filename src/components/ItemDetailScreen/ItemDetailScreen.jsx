import React from 'react'
import style from './ItemDetailScreen.module.css'
import Ficha from '../Ficha/Ficha'

const ItemDetailScreen = ({data}) => {
    console.log(data)
  return (
    <div className={style.ItemDetail}>
      <img src={data.img} />
      <h2>{data.name}</h2>
      <>Mas info proximamente</>
    </div>
  );
}

export default ItemDetailScreen