import React from 'react'; // Importando o React
import { useEffect, useState } from 'react' // Importando o ciclo de vida e os estados do React
import api from '../../services/axios' // Importando o arquivo de configuração do Axios
import { Container, Row, Col } from 'react-bootstrap'; // Importando componente do React Bootstrap
import './tabelas.css'

import Tables from '../../components/Tables' // Importando o componente do Charts (que contém os gráficos da lib ApexChart)


export default function Tabelas(){

  const [paises, setPaises] = useState([]) // Estado dos países
  const [load, setLoad] = useState(false) // Estado do carregamento

  useEffect(() => {
      // Usamos async pois a requisição poderá demorar um pouco
      const buscarPaises = async () => {
        const response = await api.get(`/countries`) // Realizando a requisição 'get' para a API

        // console.log(response.data)
        setPaises(response.data) // Setando o estado com o retorno da requisição
        setLoad(true) // Setando o estado com true
      }

      buscarPaises()
  },[setPaises, setLoad])

  return(
    <div className="fundo">
      <Row>
          <Col md={{ span: 6, offset: 3 }} className="mt-5">
          <h2 className="text-white">Tabela Populacional dos Países</h2>
              {load &&
                  <Tables paises={paises} />
              }
          </Col>
      </Row>
    </div>
  );
}