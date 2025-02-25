import { Container } from './AppStyles';
import Input from '../../components/Input/Input';
import ItemRepo from '../../components/ItemRepo/ItemRepo';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import { api } from '../../services/api/Api';

interface Repo {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

function App() {
  const [currentRepo, setCurrentRepo] = useState<string>(''); 
  const [repos, setRepos] = useState<Repo[]>([]); 
  const [error, setError] = useState<string>(''); 

  const handleSearchRepo = async () => {
    if (!currentRepo.trim()) {
      setError("Campo obrigatório."); 
      return;
    }

    try {
      const { data } = await api.get(`repos/${currentRepo}`); 

      if (data.id) { 
        const isExist = repos.find(repo => repo.id === data.id); 

        if (!isExist) {
          setRepos((prev) => [...prev, data]); 
          setCurrentRepo(''); 
          setError(''); 
          return;
        }

        setCurrentRepo(''); 

      }
    } catch (error) {
      setError("Ops... Digite o nome do usuário e o repostiório e tente novamente.");
      console.error("Erro ao buscar repositório:", error); 
    }
  };

  const handleRemoveRepo = (id: string) => {
    setRepos((prev) => prev.filter(repo => repo.id !== id)); 
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentRepo(e.target.value); 
    if (e.target.value.trim()) {
      setError('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchRepo(); 
    }
  };

  return (
    <Container>
      <img src="/gitlogo.png" width={72} height={72} alt="Logo do GitHub" />
      <h3>Digite a URL seguindo o formato: </h3>
        <h3>seu-nome/projeto:</h3>
      <Input 
        value={currentRepo} 
        onChange={handleInputChange} 
        onKeyPress={handleKeyPress} 
      />
      {error && <span>{error}</span>} 
      <Button onClick={handleSearchRepo}>Buscar</Button>
      {repos.map((repo) => (
        <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
