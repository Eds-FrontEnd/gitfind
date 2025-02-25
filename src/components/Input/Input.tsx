import { InputContainer } from './InputStyles';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void; 
}

const Input = ({ value, onChange, onKeyPress }: InputProps) => {
  return (
    <InputContainer>
      <input type="text" value={value} onChange={onChange} onKeyPress={onKeyPress} placeholder='nome-do-usuario-github/nome-do-projeto'/>
    </InputContainer>
  );
};

export default Input;
