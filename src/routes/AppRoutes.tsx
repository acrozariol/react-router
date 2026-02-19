import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { NotFound } from "../pages/NotFound";
import { Details } from "../pages/Details";
import { Layout } from "../components/Layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/products" index element={<Products />} />
        <Route path="/details/:id" index element={<Details />} />
      </Route>
      <Route path="*" index element={<NotFound />} />
    </Routes>
  );
}
