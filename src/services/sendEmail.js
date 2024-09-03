import mailgun from 'mailgun-js';
import "dotenv"
const sendEmail = (event, body, func) => {
  event.preventDefault()
  
  const notEmptyInputs = body.name === '' || body.email === '' || body.message === '' || body.phone === '' || body.local === ''
  if (notEmptyInputs) {
    func.setError('Por favor, preencha todos os campos.');
    return;
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneNumberRegex = /^\d{2}\s?\d{9}$/;

  if (!emailRegex.test(body.email)) {
    func.setError('Por favor, insira um endereço de e-mail válido.');
    return;
  }

  if (body.group.email && !emailRegex.test(body.group.email)) {
    func.setError('O email do grupo faltou alguma coisa!');
    return;
  }

  if (!phoneNumberRegex.test(body.phone)) {
    func.setError('O telefone deve conter ddd+numero. Não esqueça do prieiro 9! :)');
    return;
  }

  if (body.group.phone && !phoneNumberRegex.test(body.group.phone)) {
    func.setError('O telefone da liderança faltou alguma coisa! Veja a orientação.');
    return;
  }

  if (body.submmitDisabled) {
    func.setError(`"Eu aceito", não selecionado!`);
    return;
  }

  const groupParseData = () => {
    if (body.group.name !== '') {
      return (
        `- Nome: ${body.group.name} \n - Email pra contato: ${body.group.email} \n - Telefone da Liderança: ${body.group.liderPhone} \n - Nome da Liderança: ${body.group.liderName} \n - Local/Locais de atuação: ${body.group.local} \n - Área(s) de atuação: ${body.group.activity.join(", ")} \n`
      )
    }
    return "nao possui"
  }
  const data = {
    from: `LOA Clima <dom@ameciclo.org>`,
    to: 'contato@ameciclo.org',
    subject: 'Contato do site',
    text: `Nome: ${body.name} \n Email: ${body.email} \n Telefone: ${body.phone} \n Local: ${body.local} \n Grupo: \n ${groupParseData()} \n Mensagem: ${body.message}`
  };

  const apiKey = process.env.REACT_APP_MAILGUN_API_KEY;
  const domain = process.env.REACT_APP_MAILGUN_DOMAIN;
  const mg = mailgun({ apiKey: apiKey, domain: domain });

  mg.messages().send(data, (error) => {
    if (error) {
      func.setError('Estamos com algum tipo de problema no servidor, tente novamente!')
      return;
    } else {
      func.setSucess(true);
      func.scrollToTop();
    }
  });
  func.setError(false);
};

export default sendEmail;