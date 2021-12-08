import React, { Component } from 'react'; // Importando o React
import { useEffect, useState } from 'react' // Importando o ciclo de vida e os estados do React
import { Table } from 'react-bootstrap'; // Importando componente do React Bootstrap


export default function Tables(props){    
  
  const [listaPaises, setListaPaises] = useState([])    
 

  useEffect(() => {
      setListaPaises(props.paises)      
  },[setListaPaises, props])
    
    return(
        <div className="">
          <div className="row">
            <div className="tables">              
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th scope="col">País</th>
                    <th scope="col">Continente</th>
                    <th scope="col">População</th>
                    <th scope="col">Língua Nativa</th>                    
                  </tr>
                </thead>
                <tbody> 

                  {/* Renderizando a lista */}
                  {listaPaises.map((item, index) => {
                    return(
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.continent}</td>                        
                        <td>{item.population}</td>
                        <td>{item.native_language}</td>                       
                      </tr>
                    )
                  })}   

                </tbody>
              </Table>
            </div>
          </div>
        </div>
    );
}