import { useSearchParams } from "react-router"; // Esse hook serve pra ler (e também mudar) os parâmetros(itens, tv) da URL que vêm depois do ?.

export function Products() {
  const [searchParams] = useSearchParams(); // searchParams retorna um array, com o item da URL(tv) que vem depois do ?. -> /products?category=tv

  const category = searchParams.get("category"); // Vai na URL e pega o valor do parâmetro chamado category. Armazena o item na const
  const price = searchParams.get("price");
  return (
    <div>
      <a href="/">Back</a>
      <h1>Products</h1>
      {category && ( // SE category existir, exiba abaixo
        <span>
          Category: <strong>{category}</strong>
          <br />
          Price: <strong>{price}</strong>
        </span>
      )}

      <div className="cards">
        <a href="/details/1">Product 1</a>
        <a href="/details/2">Product 2</a>
        <a href="/details/3">Product 3</a>
        <a href="/details/4">Product 4</a>
        <a href="/details/5">Product 5</a>
      </div>
    </div>
  );
}
