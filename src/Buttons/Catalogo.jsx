import { useNavigate } from "react-router-dom";

function Catalogo({ onClick }) {
    const navigate = useNavigate();

    return (
        <button className="btn-catalogo"
          title="Ver catálogo de amigurumis"
          onClick={() => navigate('/catalogo')}
        >
          <span className="material-symbols-outlined">
           auto_stories
          </span>
        </button>
    );
}

export default Catalogo