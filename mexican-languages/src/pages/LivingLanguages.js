//imports
import React from "react"
import language from '../data/livingLangaues.json';
import LanguageCard from '../components/LanguageCard';

//just checking the data
function LivingLanguages() {
    return (
        <div>
            <h2>Living Indigenous Languages</h2>
            {language.map(lang => (
                <LanguageCard key={lang.id} data={lang} />
            ))}
        </div>
    );
}

export default LivingLanguages;