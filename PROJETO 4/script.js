const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');

const button = document.getElementById('btn');

button.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const enviar = document.getElementById('submit-btn');

enviar.addEventListener('click', (event) => {
  event.preventDefault();
});

const botao = document.getElementById('agreement');
botao.addEventListener('change', () => {
  if (botao.checked) {
    enviar.removeAttribute('disabled');
  } else {
    enviar.setAttribute('disabled', ' ');
  }
});
