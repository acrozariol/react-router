import { useParams, useNavigate } from "react-router"; // useParams é um Hook, que serve pra pegar valores que fazem parte do caminho da rota, como ID de produto, usuário, post, etc

/* O usuario vai clicar em um card, que criamos em "Products.tsx". 
O card 1 leva até a pagina "/products/1". 
O useParams vai ler o id da URL "http://localhost:5174/details/1" e vai exibir na tela o ID
*/
export function Details() {
  const { id } = useParams(); // Traz o valor(id) da URL em forma de objeto
  const navigate = useNavigate(); // Quando clicar no button, o navigate volta uma página (-1)
  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        Voltar
      </button>
      <h1>Detalhes</h1>
      <span>
        ID do produto: <strong>{id}</strong>
      </span>
    </div>
  );
}
