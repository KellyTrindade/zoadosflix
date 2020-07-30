import React from 'react'
import Menu from '../../Menu'
import dadosIniciais from '../../../data/dados_iniciais.json'
import BannerMain from '../../BannerMain'
import Carousel from '../../Carousel'
import Footer from '../../Footer'

function Home() {
  let categoria = Math.floor( ( Math.random() * dadosIniciais.categorias.length ) )
  let video = Math.floor( ( Math.random() * dadosIniciais.categorias[categoria].videos.length ) )

  return (
    <div style={ {background: "#141414"} }>
      <Menu />

        <BannerMain 
          videoTitle={dadosIniciais.categorias[categoria].videos[video].titulo}
          url={dadosIniciais.categorias[categoria].videos[video].url}
          videoDescription={dadosIniciais.categorias[categoria].videos[video].descricao}
          banner={dadosIniciais.categorias[categoria].videos[video].banner}
        />

        <Carousel 
          // ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[1]}
        />

        <Carousel 
          category={dadosIniciais.categorias[2]}
        />

        <Carousel 
          category={dadosIniciais.categorias[3]}
        />

        <Carousel 
          category={dadosIniciais.categorias[4]}
        />

        <Carousel 
          category={dadosIniciais.categorias[5]}
        />

      <Footer />
    </div>
  );
}

export default Home
