import { Outlet } from "react-router-dom";
const Formations = () => {
  return (
    <div>
      <h1>Nos Formations</h1>
      <Outlet /> {/* C'est ici que les pages enfants apparaissent */}
    </div>
  );
};

export default Formations;
