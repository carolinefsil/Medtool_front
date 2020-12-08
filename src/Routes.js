import React from 'react';
import { Switch, Route } from "react-router-dom";
import Cadastro from './pages/Cadastro';
import Medico from './pages/Medico';
import Consulta from './pages/Consulta';
import Login from './pages/Login';
import Paciente from './pages/Paciente';
import Medicamento from './pages/Medicamento';


function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/cadastro' component={Cadastro} />
            <Route exact path='/consulta' component={Consulta} />
            <Route exact path='/medico' component={Medico} />
            <Route exact path='/paciente' component={Paciente} />
            <Route exact path='/medicamento' component={Medicamento} />
            </Switch>
    );
}

export default Routes;