import Textarea from "./Textarea"
import Stats from "./Stats"
import { useState } from "react"

export default function Container(){
    const [text, setText] = useState("")
    const numberOfCharacters = text.length
    const numberOfWords = text.split(/\s/).filter((word) => word !== "").length

    return (
        <main className="container">
            <Textarea text={text} setText={setText}/>
            <Stats numberOfWords={numberOfWords} numberOfCharacters={numberOfCharacters}/>
        </main>
    )
}