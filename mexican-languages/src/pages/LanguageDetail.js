import {useParams} from 'react-router-dom';
import languages from "../data/livingLangaues.json";
import "../styles/LanguageCard.css";

function LanguageDetail(){
    const {id} = useParams();
    const language = languages.find(lang => lang.id === Number(id));

    if (!language) return <h2>Language not found</h2>

    return(
        <div className="language-card">
            <h2>{language.name}</h2>
            <img src={language.image} alt={language.imgAlt}/>
            <p><strong>Native Speakers:</strong> {language.population}</p>
            <p>{language.description}</p>
        </div>
    )
}
export default LanguageDetail;