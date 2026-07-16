import styles from "./styles.module.css";
import { Outlet } from "react-router"; // Usado pra layouts, renderiza a página da rota atual.

// Sempre mostre o Header e o Footer… e no lugar do <Outlet />, renderiza a página da rota atual.

export function Layout() {
  return (
    <div>
      <header className={styles.user}>
        <p>Welcome!</p>
      </header>
      <Outlet />
      <footer>
        <span>All rights reserved</span>
      </footer>
    </div>
  );
}
