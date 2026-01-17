import "../styles/LanguageCard.css";
import {Link} from "react-router-dom";

function LanguageCard({data}) {
    return(
        <Link to={`/living/${data.id}`} className="language-card">
            <div className="language-card">
                <h3>{data.name}</h3>
                <img src={data.image} alt={data.imageAlt} />
                <p><strong id="pop">People still speaking it:</strong> {data.population}</p>
                <p>{data.description}</p>
            </div>
        </Link>
    )
}
export default LanguageCard;