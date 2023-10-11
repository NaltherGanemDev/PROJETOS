import './form.css';
import { useState } from 'react';

export type ShowImputType = {
  service: string,
  login: string,
  senha: string,
  url: string,
};

type FormProps = {
  onClickCancel: () => void;
  onClickCadastrar: () => void;
  setShowInfo: React.Dispatch<React.SetStateAction<ShowImputType[]>>;
};

export default function Form(prop: FormProps) {
  const { onClickCancel, onClickCadastrar, setShowInfo: setInfo } = prop;

  const senhaValida = 'valid-password-check';
  const senhaInvalida = 'invalid-password-check';

  const stateObject = {
    service: '',
    login: '',
    senha: '',
    url: '',
  };

  const [showImput, setShowImput] = useState(stateObject);
  // const [senhasCadastradas, setSenhasCadastradas] = useState({});
  const [verSenha, setVerSenha] = useState('password');

  const handleClickSenha = () => {
    if (verSenha === 'password') {
      setVerSenha('text');
    } else {
      setVerSenha('password');
    }
  };

  const { service, login, senha, url } = showImput;

  const validatorForm = () => {
    const minLength = senha.length >= 8;
    const maxLength = senha.length <= 16;
    const letterAndNumbers = /[a-zA-Z]/.test(senha) && /[0-9]/.test(senha);
    const specialCharacter = /[A-Z\W|_]/.test(senha);

    return {
      minLength,
      maxLength,
      letterAndNumbers,
      specialCharacter,
    };
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setShowImput({
      ...showImput,
      [name]: value,
    });
  }

  function showButton() {
    if (!service || !login || !senha || !url) {
      return false;
    }

    if (senha.length < 8 || senha.length > 16) {
      return false;
    }

    if (!/[a-zA-Z]/.test(senha) || !/[0-9]/.test(senha)) {
      return false;
    }

    return !(!/[A-Z\W|_]/.test(senha));
  }

  // const [showElements, setShowElements] = useState({})

  const onClickCadastrarButton = () => {
    onClickCadastrar();

    setInfo((info: ShowImputType[]) => [...info, showImput]);
  };

  return (
    <>
      <div>
        <div>
          <label htmlFor="input-name">Nome do serviço</label>
          <input
            onChange={ handleChange }
            type="text"
            name="service"
            value={ service }
            id="input-name"
          />
        </div>
        <div>
          <label htmlFor="input-login">Login</label>
          <input
            onChange={ handleChange }
            type="text"
            name="login"
            value={ login }
            id="input-login"
          />
        </div>
        <div>
          <label htmlFor="input-password">Senha</label>
          <input
            onChange={ handleChange }
            type={ verSenha }
            name="senha"
            value={ senha }
            id="input-password"
          />
          <button
            onClick={ handleClickSenha }
            data-testid="show-hide-form-password"
          >
            ver
          </button>
        </div>
        <div>
          <label htmlFor="input-text">URL</label>
          <input
            onChange={ handleChange }
            type="text"
            name="url"
            value={ url }
            id="input-text"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={ !showButton() }
            onClick={ onClickCadastrarButton }
          >
            Cadastrar
          </button>
          <button onClick={ onClickCancel }>Cancelar</button>
        </div>
      </div>
      <div>
        <p
          className={ validatorForm().minLength
            ? senhaValida : senhaInvalida }
        >
          Possuir 8 ou mais caracteres
        </p>
        <p
          className={ validatorForm().maxLength
            ? senhaValida : senhaInvalida }
        >
          Possuir até 16 caracteres
        </p>
        <p
          className={ validatorForm().letterAndNumbers
            ? senhaValida : senhaInvalida }
        >
          Possuir letras e números
        </p>
        <p
          className={ validatorForm().specialCharacter
            ? senhaValida : senhaInvalida }
        >
          Possuir algum caractere especial
        </p>
      </div>
    </>
  );
}
