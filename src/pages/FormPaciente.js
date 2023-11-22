import React, { useState } from 'react';

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '10px',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif'
  };

  const paragrafoEstilo = {
    fontWeight: 'bold',
    color: '#333'
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
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer'
  };
  const textareaEstilo = {
    ...inputEstilo,
    height: '100px', 
    width:'400px',
    resize: 'vertical'
  };

  
  return (
    <form onSubmit={handleSubmit} style={estilo}>
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

      <p style={paragrafoEstilo}>Sente alguma dor ou queixa? *</p>
      <label>
        <input type="radio" name="dor" value="sim" onChange={handleChange} required style={inputEstilo} />
        Sim
      </label>

      <label>
        <input type="radio" name="dor" value="nao" onChange={handleChange} style={inputEstilo} />
        Não
      </label>

      <p style={paragrafoEstilo}>Alguma reação alérgica? *</p>
      <label>
        <input type="radio" name="alergia" value="sim" onChange={handleChange} required style={inputEstilo} />
        Sim
      </label>
      
      <label>
        <input type="radio" name="alergia" value="nao" onChange={handleChange} style={inputEstilo} />
        Não
      </label>

      <p style={paragrafoEstilo}>Sente alguma melhora pós uso da medicação prescrita? *</p>
      <label>
        <input type="radio" name="melhora" value="sim" onChange={handleChange} required style={inputEstilo} />
        Sim
      </label>

      <label>
        <input type="radio" name="melhora" value="nao" onChange={handleChange} style={inputEstilo} />
        Não
      </label>

      <p style={paragrafoEstilo}>Informações adicionais:</p>
      <label>
        <textarea name="informacoesAdicionais" placeholder="Se necessário, escreva algo aqui." onChange={handleChange} style={textareaEstilo} />
      </label>

    
      <button type="submit" style={botaoEstilo}>Enviar</button>
    </form>
  );
}

export default FormularioPaciente;
