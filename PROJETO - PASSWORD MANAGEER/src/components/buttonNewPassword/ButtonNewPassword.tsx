import './buttonNewPassword.css';

type ButtonProps = {
  onClick: () => void;
};

export default function ButtonNewPassword(prop: ButtonProps) {
  const { onClick } = prop;

  return (
    <div className='divButton'>
      <button className='buttonPassword' onClick={ onClick }>Cadastrar nova senha</button>
    </div>
  );
}
