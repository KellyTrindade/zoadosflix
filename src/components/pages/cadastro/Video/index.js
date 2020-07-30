import React from 'react'
import PageDefault from '../../../PageDefault'
import { Link } from 'react-router-dom'

function NovoVideo() {
    return (
        <PageDefault>
            <h1>Novo video</h1>
            
            <Link to="/cadastro/categoria">
                Nova Categoria
            </Link>
        </PageDefault>
    ) 
}

export default NovoVideo