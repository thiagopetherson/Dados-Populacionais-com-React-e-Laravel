import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom' // Importando os Componentes do React Router Dom (Que usaremos para as rotas)

import Header from './components/Header' // Importando o componente do Header
import Main from './pages/Main' // Importando o componente
import Graficos from './pages/Graficos' // Importando o componente
import Tabelas from './pages/Tabelas'


export default function Routes () {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" element={<Main />} />  
                <Route exact path="/graficos" element={<Graficos />} />
                <Route exact path="/tabelas" element={<Tabelas />} />             
            </Switch>
        </Router>
    )
}