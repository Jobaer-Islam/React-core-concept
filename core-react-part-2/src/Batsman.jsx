import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleDouble = () => {
        const updatedRuns = runs + 2;
        setRuns(updatedRuns);
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
    }

    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            {
                runs > 50 && <p>Your achieved Half-Century</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}