import { ButtonStyle } from './ButtonStyles';

// Tipando as props do Button, onde 'onClick' é a função e 'children' é o conteúdo dentro do botão
interface ButtonProps {
  onClick: () => void; // Tipando a função onClick
  children: React.ReactNode; // 'children' pode ser qualquer conteúdo, por exemplo, texto ou componentes
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <ButtonStyle onClick={onClick}>
      {children} {/* Renderizando o conteúdo do botão */}
    </ButtonStyle>
  );
};

export default Button;
