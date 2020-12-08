import './style.css'
import React, {useState } from 'react';
import { useHistory } from 'react-router-dom';


const Paciente = (props) => {

  const [nomePaciente, setNomePaciente] = useState('')


  async function pacienteBack() {

    try {
      let retorno = await fetch('http://localhost:8080/paciente', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
              "nomePaciente": nomePaciente,
          })
      })

    } 
    catch (error) {
      alert('Erro ao realizar cadastro')
      clearForms()
      console.log(error)
    }
    }

    const history = useHistory()

    function clearForms(){
      setNomePaciente('')
    }

    function handleClick(e) {
    e.preventDefault()
    pacienteBack()
    }

  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" >
            <img src="https://i.ibb.co/gP17TTb/logo.png" width={30} height={30} alt="logo" border={0} />
              MedTool
            </a>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" href="/consulta">Consulta</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/medico">Medico</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/paciente">Paciente</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/medicamento">Medicamento</a>
            </li>
          </ul>
          <button type="button" className="btn btn-default btn-info">
            <span className="glyphicon glyphicon-log-out" /> Log out
            </button>
        </nav>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="row m-5">
          <div className="col-12">
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-header customColap" id="headingTwo">
                <h5 className="mb-0">
                    Paciente
                  
                </h5>
              </div>
              <div >
                <div className="card-body">
                  <form>
                    <label>Nome do Paciente</label>
                    <input className="form-control" type="text"  value={nomePaciente.toString()} onChange={e => setNomePaciente(e.target.value)} required/>
                  </form>
                  <br/>
                  <button type="button" className="btn btn-outline-info" onClick={handleClick}>Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paciente;