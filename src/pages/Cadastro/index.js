import './style.css';
import React, {  useState } from 'react';
import {  useHistory } from 'react-router-dom';


const Cadastro = (props) => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  async function registerUserBack() {
    try {
      let retorno = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          "name": name,
          "password": password,
          "username": username
        })
      })
      let json = await retorno.json()
      console.log(json)
      if (json.respostaCadastro === 'sucesso') {
        alert(json.Message)
        clearForms()
        routeChange()
        return;
      }
      else if (json.respostaCadastro === 'camposVazios') {
        alert(json.Message)
        return;
      }
      return json

    } catch (error) {
      alert('Erro ao fazer o registro')
      clearForms()
      console.log(error)
    }
  }

  function handleClick(e) {
    e.preventDefault()
    registerUserBack()
}


  function clearForms() {
    setName('')
    setPassword('')
    setUsername('')
  }

  const history = useHistory()

  const routeChange = () => {
    let path = '/login'
    history.push(path)
  }


    return (
      <div>
        <div className="sidenav">
          <div className="login-main-text">
            <img src="https://i.ibb.co/8Bz08KH/home.png" alt="" />
          </div>
        </div>
        <div className="main">
          <div className="col-md-12">
            <div className="login-form">
              <h1 className="text-center">Cadastro</h1>
              <form>
                <div className="form-group">
                  <label>Usuario</label>
                  <input type="text" className="form-control" value={username.toString()} onChange={e => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Senha</label>
                  <input type="password" className="form-control" value={password.toString()} onChange={e => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-black mr-3" onClick={handleClick}>Registrar</button>
                <span >Ja possui conta? </span><a href="/">Login</a>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }


export default Cadastro;