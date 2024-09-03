import React, { useEffect, useState } from 'react';
import sendEmail from '../services/sendEmail';
import sucessIcon from '../images/email-sucess.png';

const FaqForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setTel] = useState('');
  const [local, setLocal] = useState('');
  const [message, setMessage] = useState('');
  const [groupName, setGroupName] = useState('');
  const [groupEmail, setGroupEmail] = useState('');
  const [groupLiderName, setGroupLiderName] = useState('');
  const [groupLiderPhone, setGroupLiderPhone] = useState('');
  const [groupLocal, setGroupLocal] = useState('');
  const [otherActivity, setOtherActivity] = useState('');
  const [submmitDisabled, setSubmmitDisabled] = useState(true);
  const [groupTrue, setGroupTrue] = useState(false);
  const [groupFalse, setGroupFalse] = useState(true);
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const activityAreas = [
    { label: 'Meio Ambiente', value: 'Meio Ambiente' },
    { label: 'Mobilidade', value: 'Mobilidade' },
    { label: 'Direitos Humanos', value: 'Direitos Humanos' },
    { label: 'Movimento Sindical e Trabalhista', value: 'Movimento Sindical e Trabalhista' },
    { label: 'Educação', value: 'Educação' },
    { label: 'Saúde', value: 'Saúde' },
    { label: 'Cultura e Arte', value: 'Cultura e Arte' },
    { label: 'Movimento LGBTQ+', value: 'Movimento LGBTQ+' },
  ];

  const body = {
    name,
    email,
    message,
    phone,
    local,
    group: {
      name: groupName,
      email: groupEmail,
      liderName: groupLiderName,
      liderPhone: groupLiderPhone,
      local: groupLocal,
      activity: [...selectedAreas, otherActivity],
    },
    submmitDisabled,
  }

  const handleOtherCheckboxChange = () => {
    setShowOtherInput(!showOtherInput);
    if (!showOtherInput) {
      setOtherActivity('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const func = { setError, setSucess, scrollToTop }

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(false);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [error, setError]);

  const handleCheckboxChange = (value) => {
    const index = selectedAreas.indexOf(value);
    if (index === -1) {
      setSelectedAreas([...selectedAreas, value]);
    } else {
      const updatedAreas = [...selectedAreas];
      updatedAreas.splice(index, 1);
      setSelectedAreas(updatedAreas);
    }
  };

  return (
    <main className="">
      <div className="">
        {sucess ? (
          <>
            <div className='message-form-sucess'>
              <img className='sucess-icon' src={sucessIcon} alt="icone de simbolo check simbolizando que o email foi recebido" />
              <h2>Entregue!</h2>
              <p>Estamos muito felizes com sua contribuição!</p>
            </div>
          </>
        ) : (
          <>
            <form className="message-form">
              <div className='message-form-inputs'>
                <label htmlFor="branch-name">Nome</label>
                <input
                  type="text"
                  id="branch-name"
                  placeholder="Seu nome"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="joao@gmail.com"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label htmlFor="tel">DDD + Telefone</label>
                <input
                  type="text"
                  id="tel"
                  name="tel"
                  placeholder="81 987654321"
                  autoComplete="off"
                  value={phone}
                  onChange={(e) => setTel(e.target.value)}
                  required
                />

                <label htmlFor="local">Cidade + Estado</label>
                <input
                  type="text"
                  id="local"
                  name="local"
                  placeholder="Recife, Pernambuco"
                  autoComplete="off"
                  value={local}
                  onChange={(e) => setLocal(e.target.value)}
                  required
                />

                <label>Participa de algum grupo que queria participar das ações?</label>
                <div className="group-check">
                  <div
                    className={groupTrue ? "group-selected" : "group-unselected"}
                    onClick={() => {
                      setGroupTrue(true)
                      setGroupFalse(false)
                    }}
                  >
                    SIM
                  </div>
                  <div
                    className={groupFalse ? "group-selected" : "group-unselected"}
                    onClick={() => {
                      setGroupTrue(false)
                      setGroupFalse(true)
                    }}
                  >
                    NÃO
                  </div>
                </div>
                {
                  groupTrue && (
                    <>
                      <label htmlFor="groupName">Nome do Grupo</label>
                      <input
                        type="text"
                        id="groupName"
                        name="groupName"
                        placeholder="Escreva aqui"
                        autoComplete="off"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        required
                      />

                      <label htmlFor="groupEmail">E-mail para contato</label>
                      <input
                        type="groupEmail"
                        id="groupEmail"
                        name="groupEmail"
                        placeholder="contato@grupox.com"
                        autoComplete="off"
                        value={groupEmail}
                        onChange={(e) => setGroupEmail(e.target.value)}
                        required
                      />

                      <label htmlFor="groupTel">Nome das lideranças</label>
                      <input
                        type="text"
                        id="groupTel"
                        name="groupTel"
                        placeholder="Joana, Paulo"
                        autoComplete="off"
                        value={groupLiderName}
                        onChange={(e) => setGroupLiderName(e.target.value)}
                        required
                      />
                      <label htmlFor="groupTel">Telefone das lideranças</label>
                      <input
                        type="text"
                        id="groupTel"
                        name="groupTel"
                        placeholder="81 987654321"
                        autoComplete="off"
                        value={groupLiderPhone}
                        onChange={(e) => setGroupLiderPhone(e.target.value)}
                        required
                      />

                      <label htmlFor="groupLocal">Cidade + Estado ou Países de atuação</label>
                      <input
                        type="text"
                        id="groupLocal"
                        name="groupLocal"
                        placeholder="Recife, Pernambuco ou Brasil, Argentina"
                        autoComplete="off"
                        value={groupLocal}
                        onChange={(e) => setGroupLocal(e.target.value)}
                        required
                      />

                      <label>Quais principais áreas de atuação:</label>
                      {activityAreas.map((area) => (
                        <div key={area.value} className='contact-group-activity'>
                          <input
                            type="checkbox"
                            id={area.value}
                            name={area.value}
                            value={area.value}
                            checked={selectedAreas.includes(area.value)}
                            onChange={(e) => handleCheckboxChange(e.target.value)}
                          />
                          <label htmlFor={area.value}>{area.label}</label>
                        </div>
                      ))}
                      <div key={"other"} className="contact-group-activity">
                        <input
                          type="checkbox"
                          id="other"
                          name="other"
                          value="Outra"
                          checked={selectedAreas.includes('Outra')}
                          onChange={(e) => handleOtherCheckboxChange()}
                        />
                        <label htmlFor="other">Outra</label>
                      </div>
                      {showOtherInput && (
                        <div className="message-form">
                          <label htmlFor="otherActivity">Informe a outra atividade:</label>
                          <input
                            type="text"
                            id="otherActivity"
                            name="otherActivity"
                            placeholder="Digite aqui..."
                            value={otherActivity}
                            onChange={(e) => setOtherActivity(e.target.value)}
                          />
                        </div>
                      )}
                    </>
                  )
                }

              </div>
              <div className='message-form-textarea'>
                <label htmlFor="message">Agora, faça sua pergunta:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Escreva aqui..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className='lgpdArea'>
                <p>
                  Seguindo a <mark>Lei Geral de Proteção de Dados - LGPD (Lei nº 13.709)</mark>, informamos que nenhum dado pessoal será divulgado ou fornecido a terceiros. Todas informações contidas nesse formulário serão exclusivamente para coletar informações de percepção da rede, além de fornecer retorno para aqueles que desejarem. Selecione abaixo <mark>“EU ACEITO”</mark> caso esteja de acordo com essas condições.
                </p>
                <div className='accept-box'>
                  <input
                    type="checkbox"
                    id="lgpdAgree"
                    name="lgpdAgree"
                    onChange={(e) => setSubmmitDisabled(!submmitDisabled)}
                  />
                  <label htmlFor="lgpdAgree">Eu aceito</label>
                </div>
              </div>
              <br />
              <button
                className="submmit-message-btn"
                type="submit"
                onClick={
                  (event) => {
                    sendEmail(event, body, func);
                  }
                }
              >
                Enviar
              </button>
              {error && <p className='error-message shake-error'>{error}</p>}
            </form>
          </>
        )}
      </div>
    </main>
  );
};

export default FaqForm;
