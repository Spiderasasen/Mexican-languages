import React from "react";
import extinctLanguages from "../data/extinctLanguages.json";
import "../styles/LanguageCard.css";
import ExtinctCard from "../components/ExtinctCard";

function ExtinctLanguages(){

    return(
        <div className="ExtinctLanguages">
            <h2>Extinct Languages of Mexico</h2>
            {extinctLanguages.map(lang => (
                <ExtinctCard key={lang.id} data={lang} />
            ))}
        </div>
    );
}

export default ExtinctLanguages;