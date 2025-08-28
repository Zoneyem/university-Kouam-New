import { Outlet } from "react-router-dom";

const GestionPage = () => {
  return (
    <div>
      GestionPage
      <Outlet /> {/* C'est ici que les pages enfants apparaissent */}
    </div>
  );
}

export default GestionPage