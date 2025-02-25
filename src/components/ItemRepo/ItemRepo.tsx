
import { ItemContainer } from './ItemRepoStyles'; 

interface Repo {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

interface ItemRepoProps {
  repo: Repo;
  handleRemoveRepo: (id: string) => void;
}

const ItemRepo = ({ repo, handleRemoveRepo }: ItemRepoProps) => {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <a href={repo.html_url} className="repository" target="_blank" rel="noreferrer">
        Ver Repositório
      </a>
      <a href="#" onClick={handleRemove} className="remove">
        Remover
      </a>
    </ItemContainer>
  );
};

export default ItemRepo;
