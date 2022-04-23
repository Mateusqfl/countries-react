import React from 'react'
import { HeaderCnt } from '../assets/styles/HeaderStyle'
import mapamundi from '../imagens/maiores-paises-do-mundo-og.jpg'

export default function Header({PageTitle}) {
  return (
    <HeaderCnt>
        <h1>
            {PageTitle}
        </h1>
     <img src={mapamundi} alt="" />
    </HeaderCnt>
  )
}
