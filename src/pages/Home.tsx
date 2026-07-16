import { useNavigate } from "react-router"; // Hook que troca de página através do JS(botao) ao invés de links

export function Home() {
  const navigate = useNavigate(); // Função que troca de rota. Nesse caso quando clicar no botao (OnClick) vai chamar a funcao navigate que vai exibir a rota /products.

  function OpenProdutsPage() {
    navigate("/products"); // O navigate muda a rota para /products. Quando clicar no botao, vai chamar essa funcao
  }

  return (
    <div>
      <h1>Home page</h1>
      <nav>
        <a href="/products">Products</a>
        <a href="/products?category=tv&price=200">Categories</a>
        <button type="button" onClick={OpenProdutsPage}>
          View products
        </button>
      </nav>
    </div>
  );
}
