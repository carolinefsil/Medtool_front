import './style.css'

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


const Login = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  let perfil
  let id

  async function loginUser() {

    try {
      let retorno = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          "username": username,
          "password": password,
        })
      })
      let json = await retorno.json()
      if (json.respostaLogin === 'sucesso') {

        localStorage.setItem('token', json.token)
        perfil = json.perfil
        id = json.id

        routeChange()
        return;
      }
      else if (json.respostaLogin === 'invalida') {
        alert(json.Message)
        setPassword('')
        return;
      }
      else if (json.respostaLogin === 'naoEncontrado') {
        alert(json.Message)
        clearForms()
        return
      }
      else if (json.respostaLogin === 'error') {
        alert(json.Message)
        return
      }
      return json

    } catch (error) {
      alert('Erro ao fazer login')
      clearForms()
      console.log(error)
    }
  }

  const history = useHistory()

  const routeChange = () => {
    let path = '/'.concat(`${perfil}/${id}`);
    history.push(path)
  }

  function clearForms() {
    setUsername('')
    setPassword('')
  }

  function handleClick(e) {
    e.preventDefault()
    loginUser()
  };
  

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
              <h1 className="text-center">Login</h1>
              <form>
                <div className="form-group">
                  <label>Usuario</label>
                  <input type="text" className="form-control" value={username.toString()}  onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label>Senha</label>
                  <input type="password" className="form-control" value={password.toString()}  onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-black mr-3" onClick={handleClick}>Login</button>
                <span >Não possui conta? </span><a href="/cadastro">Cadastre-se</a>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }

export default Login;