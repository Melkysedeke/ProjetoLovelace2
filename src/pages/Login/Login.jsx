import React, { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import arrowImg from "../../assets/arrow.svg";
import { auth } from "../../services/firebaseConfig.js";
import { load, sucess, fail }  from "../../services/alert.js";
import Swal from 'sweetalert2';
import { sendPasswordResetEmail } from "firebase/auth";
import styles from './Login.module.css'


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    
  const navigate = useNavigate();

  // Function to clear input fields
  function clearFields() {
    setEmail("");
    setPassword("");
  }

  // Store input data in localStorage on any change
  useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }, [email, password]);

  // Retrieve input data from localStorage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  // Handle loading, success, and error states
  useEffect(() => {
    if (loading) {
      load();
    }
    if (user) {
      sucess();
      navigate('/Lovelace_1.2.4/tool'); // Navigate to the tool page
    }else if(error){
      fail();
    }
  }, [loading, user, error]); // Update only on changes to these variables


  function handleForgotPassword() {
      Swal.fire({
        title: "Esqueceu sua senha?",
        text: "Digite seu e-mail para redefinir a senha:",
        input: "email",
        inputPlaceholder: "lovelace@gmail.com",
        showCancelButton: true,
        confirmButtonText: "Enviar",
      }).then((result) => {
        if (result.isConfirmed) {
          const email = result.value;
          sendPasswordResetEmail(auth, email)
            .then(() => {
              Swal.fire("Sucesso!", "Um e-mail de redefinição de senha foi enviado para " + email, "success");
            })
            .catch((error) => {
              console.error(error);
              Swal.fire("Erro", "Não foi possível enviar o e-mail. Verifique o seu endereço de e-mail.", "error");
            });
        }
      });
  }
  

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Lovelace</h1>
        <span>Informações de Login</span>
      </header>

      <form onSubmit={handleSignIn}>
        <div className={styles.inputContainer}>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="lovelace@gmail.com"
            value={email} // Pre-fill with stored value (if available)
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            value={password} // Pre-fill with stored value (if available)
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <a href="#" onClick={handleForgotPassword}>Esqueceu sua senha?</a>
        <button className={styles.button} onClick={handleSignIn}>
          Entrar <img src={arrowImg} alt="->" />
        </button>
        <div className={styles.footer}>
          <p>Você não tem uma conta?</p>
          <Link to="/Lovelace_1.2.4/register">Crie a sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
