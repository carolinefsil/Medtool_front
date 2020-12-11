import './style.css'

import React, {useState } from 'react';
import { useHistory } from 'react-router-dom';


const Consulta = (props) => {

  const [data, setData] = useState('')
  const [medico, setMedico] = useState('')
  const [paciente, setPaciente] = useState('')
  const [medicamento, setMedicamento] = useState('')
  const [posologia, setPosologia] = useState('')


  async function consultaBack() {

    try {
      let retorno = await fetch('http://localhost:8080/consulta', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
            "data": data,
            "medico": medico,
            "paciente":paciente,
            "medicamento": medicamento,
            "posologia":posologia,
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
    setData('')
    setMedico('')
    setPaciente('')
    setMedicamento('')
    setPosologia('')
  }

  function handleClick(e) {
  e.preventDefault()
  consultaBack()
  }



  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">
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
              <div className="card-header customColap" id="headingOne">
              <h5 className="mb-0">
                    Consulta
                  
                </h5>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                  <form>
                    <label>Data</label>
                    <input className="form-control" type="date"  value={data.toString()} onChange={e => setData(e.target.value)} />
                    <br />
                    <label>Medico</label>
                    <select  className="form-control">
                    <option>Dr Drauzio Varella</option>
                    <option>Dra Adriana de Oliveira</option>
                    <option>Dra Angelita Habr-Gama</option>
                     </select>
                    <br />
                    <label>Paciente</label>
                    <select className="form-control" >
                    <option>Caroline</option>
                    <option>Breno</option>
                    <option>Ray</option>
                     <option>Raphael</option>
                     </select>
                    <br />
                    <label>Medicamento</label>
                    <select  className="form-control">
                        <option>Amoxilina</option>
                         <option>Cloroquina</option>
                          <option>Diazepam</option>
                          </select>
                    <br/>
                    <label>Posologia</label>
                    <input  className="form-control" type="text" onChange={e => setPosologia(e.target.value)}/>
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
export default Consulta;