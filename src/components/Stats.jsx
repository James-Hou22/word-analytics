import { INSTAGRAM_MAX_CHARACTERS, FACEBOOK_MAX_CHARACTERS } from "../lib/constants"


export default function Stats( {numberOfCharacters, numberOfWords} ){
    return <section className="stats">
        <Stat number={numberOfWords} label="Words"/>
        <Stat number={numberOfCharacters} label="Characters"/>
        <Stat number={INSTAGRAM_MAX_CHARACTERS - numberOfCharacters} label="Instagram"/>
        <Stat number={FACEBOOK_MAX_CHARACTERS - numberOfCharacters} label="Facebook"/>
    </section>
}

function Stat({ label , number }){
    return(
        <section className="stat">
            <span className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`}>{number}</span>
            <h2 className="second-heading">{label}</h2>
        </section>
    )
}