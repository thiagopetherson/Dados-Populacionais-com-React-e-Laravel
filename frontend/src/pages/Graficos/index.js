import React from 'react'; // Importando o React
import { useEffect, useState } from 'react' // Importando o ciclo de vida e os estados do React
import api from '../../services/axios' // Importando o arquivo de configuração do Axios
import { Container, Row, Col } from 'react-bootstrap'; // Importando componente do React Bootstrap
import './graficos.css'

import Charts from '../../components/Charts' // Importando o componente do Charts (que contém os gráficos da lib ApexChart)


export default function Graficos(){

    const [nomes, setNomes] = useState([]) // Estado dos nomes dos países
    const [populacoes, setPopulacoes] = useState([]) // Estado das populacoes dos países
    const [load, setLoad] = useState(false) // Estado do carregamento

    useEffect(() => {
        // Usamos async pois a requisição poderá demorar um pouco
        const buscarPaises = async () => {
          const response = await api.get(`/countries`) // Realizando a requisição 'get' para a API

          let nomesPaises = []
          let populacaoPaises = []

        response.data.forEach(item => {
              nomesPaises.push(item.name)
              populacaoPaises.push(item.population)
        })


          setNomes(nomesPaises) // Setando o estado com o retorno da requisição
          setPopulacoes(populacaoPaises) // Setando o estado com o retorno da requisição
          setLoad(true) // Setando o estado com true
        }

        buscarPaises()
    },[setNomes, setPopulacoes])

    return(
        <div className="fundo">
            <Container>
                <Row>
                    <Col md={{ span: 10, offset: 1 }} className="mt-5">
                        <h2 className="text-white">Gráfico Populacional dos Países</h2>
                        {load &&
                            <Charts nomes={nomes} populacoes={populacoes} />
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}