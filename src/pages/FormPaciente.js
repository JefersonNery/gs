import React, { useState } from 'react';
import {Colors} from '../shared/DesignTokens';

function FormularioPaciente() {
  const [form, setForm] = useState({
    sentimento: '',
    dor: '',
    alergia: '',
    melhora: '',
    informacoesAdicionais: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
    window.location.reload();
  };

  const estilo = {
    width:'94%',
    margin:'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
    fontFamily: 'Arial, sans-serif',
    padding: '10px',
  };

  const paragrafoEstilo = {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px'
  };

  const inputEstilo = {
    width: '20px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px'
  };

  const botaoEstilo = {
    ...inputEstilo,
    width: '100px', 
    height:'40px',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    justifySelf: 'center',
    margin:'75px'

  };
  const textareaEstilo = {
    ...inputEstilo,
    height: '80px', 
    width:'90%',
    resize: 'vertical'
  };

  const secaoEstilo = {
    backgroundColor: '#fff',
    padding: '10px',
    
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.15)',
    marginBottom: '10px'
  };
  
  return (
    <form onSubmit={handleSubmit} style={estilo}>
      <div style={secaoEstilo}>
        <p style={paragrafoEstilo}>Como você está se sentindo desde a última consulta? *</p>
        <label>
          <input type="radio" name="sentimento" value="mau" onChange={handleChange} required style={inputEstilo} />
          Mau
        </label>

        <label>
          <input type="radio" name="sentimento" value="bem" onChange={handleChange} style={inputEstilo} />
          Bem
        </label>

        <label>
          <input type="radio" name="sentimento" value="otimo" onChange={handleChange} style={inputEstilo} />
          Ótimo
        </label>
      </div>

      <div style={secaoEstilo}>
        <p style={paragrafoEstilo}>Sente alguma dor ou queixa? *</p>
        <label>
          <input type="radio" name="dor" value="sim" onChange={handleChange} required style={inputEstilo} />
          Sim
        </label>

        <label>
          <input type="radio" name="dor" value="nao" onChange={handleChange} style={inputEstilo} />
          Não
        </label>
      </div>

      <div style={secaoEstilo}>
        <p style={paragrafoEstilo}>Alguma reação alérgica? *</p>
        <label>
          <input type="radio" name="alergia" value="sim" onChange={handleChange} required style={inputEstilo} />
          Sim
        </label>
        
        <label>
          <input type="radio" name="alergia" value="nao" onChange={handleChange} style={inputEstilo} />
          Não
        </label>
      </div>

      <div style={secaoEstilo}>
        <p style={paragrafoEstilo}>Sente alguma melhora pós uso da medicação prescrita? *</p>
        <label>
          <input type="radio" name="melhora" value="sim" onChange={handleChange} required style={inputEstilo} />
          Sim
        </label>

        <label>
          <input type="radio" name="melhora" value="nao" onChange={handleChange} style={inputEstilo} />
          Não
        </label>
      </div>

      <div style={secaoEstilo}>
        <p style={paragrafoEstilo}>Informações adicionais:</p>
        <label>
          <textarea name="informacoesAdicionais" placeholder="Se necessário, escreva algo aqui." onChange={handleChange} style={textareaEstilo} />
        </label>
      </div>

      <button type="submit" style={botaoEstilo}>Enviar</button>
    </form>
  );
}

export default FormularioPaciente;
