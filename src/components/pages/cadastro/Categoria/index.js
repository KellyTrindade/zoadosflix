import React, { useState } from 'react'
import PageDefault from '../../../PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../FormField'

function NovaCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#DB202C'
    }

    let [categorias, setCategorias] = useState([])
    let [valores, setValores] = useState(valoresIniciais)


    function setValor(chave, valor) {
        setValores({
            ...valores,
            [chave]: valor
        })
    }

    function onChangeInputValor( e ) {
        e.preventDefault()

        setValor( e.target.getAttribute('name'), e.target.value )
    }

    return (
        <PageDefault>
            <h1>Nova Categoria</h1>
            
             <form onSubmit={ ( e ) => {
                e.preventDefault();

                setCategorias([
                    ...categorias, 
                    valores
                ])

                setValores(valoresIniciais)
             } }>
                 
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={valores.nome}
                    onChange={onChangeInputValor}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={valores.descricao}
                    onChange={onChangeInputValor}
                />
                
                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={valores.cor}
                    onChange={onChangeInputValor}
                />
                
                <button>
                Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map( (categoria, indice) => {
                    return(
                        <li key={`${categoria}-${indice}`}>{categoria.nome}</li>
                    )
                })}
            </ul>

            <Link to="/">
                Voltar à tela inicial
            </Link>
        </PageDefault>
    ) 
}

export default NovaCategoria