import { useState } from "react"

function App() {

    let [counter, setCounter] = useState(0);

    const increaseValue = () => {
        setCounter(counter + 1);
    }

    const decreaseValue = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <button onClick={increaseValue}>Increase counter {counter}</button>
            <button onClick={decreaseValue}>Decrease counter {counter}</button>
        </>
    )
}

export default App;