import "../styles/LanguageCard.css";
import {Link} from "react-router-dom";

function ExtinctCard({data}) {
    return(
        <Link to={`/extinct-languages/${data.id}`} className="language-card">
            <div className="language-card">
                <h3>{data.name}</h3>
                <img src={data.image} alt={data.imageAlt} />
                <p>{data.description}</p>
            </div>
        </Link>
    )
}
export default ExtinctCard;