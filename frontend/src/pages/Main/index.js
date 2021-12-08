import React from 'react'; // Importando o React e os hook useState e useCallback
import { Card } from 'react-bootstrap'; // Importando componente do React Bootstrap
import imagem from '../../assets/react-laravel.png' // Importando a imagem

export default function Main(){

  return(
    <div>
        <Card className="mt-2 border-0">

            <Card.Body className="fundo-global text-white">
                <Card.Text className="text-center fs-4 fw-bold">
                   Click nos links acima para ter acesso aos gráficos e tabelas.
                </Card.Text>
            </Card.Body>

            <Card.Img variant="bottom" src={imagem} width="1280" height="800" />
        </Card>
    </div>
  );
}