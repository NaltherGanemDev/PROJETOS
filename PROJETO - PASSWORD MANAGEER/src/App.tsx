import './App.css';
import { useState } from 'react';
// import  from './components/Form'
import Swal from 'sweetalert2';
import ButtonNewPassword from './components/buttonNewPassword/ButtonNewPassword';
import Form, { ShowImputType } from './components/form/Form';
import Title from './components/title/Title';

function App() {
  const [showButtonPassword, setShowButtonPassword] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleClickPassword = () => {
    setShowButtonPassword(false);
    setShowForm(true);
  };

  const handleClickCancel = () => {
    setShowForm(false);
    setShowButtonPassword(true);
  };

  const handleClickCadastrar = () => {
    setShowForm(false);
    setShowButtonPassword(true);
    Swal.fire({
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
      timer: 1500,
    });
  };

  const [showInfo, setShowInfo] = useState<ShowImputType[]>([]);

  const [showChecked, setShowChecked] = useState(false);

  function handleClick() {
    setShowChecked(!showChecked);
  }

  return (
    <div>
      <Title />
      { showButtonPassword && <ButtonNewPassword onClick={ handleClickPassword } /> }
      {showForm
        && <Form
          onClickCancel={ handleClickCancel }
          onClickCadastrar={ handleClickCadastrar }
          setShowInfo={ setShowInfo }
        />}
      {showInfo.length !== 0
      && (
        <div className='esconderSenha'>
          <div className='checkbox'>
            <label
              htmlFor="chk"
              className='switch'
            >
              <span className='slider'></span>
              Esconder senhas
            </label>
          <input
                onClick={ handleClick }
                checked={ showChecked }
                type="checkbox"
                name=""
                id="chk"
              />
            </div>
          </div>
      )}
      {showInfo.length === 0 && <div className='divH2Senha'><h2 className='nenhumSenha'>nenhuma senha cadastrada</h2></div>}
      {showInfo.map((element: ShowImputType) => {
        return (
          <div key={ element.url } className='divForm'>
            <a href={ element.url }>LINK</a>
            <h3>{element.login}</h3>
            <h3>{showChecked ? '******' : element.senha}</h3>
          </div>
        );
      })}
    </div>

  );
}

export default App;
