import Button from "@mui/material/Button";
import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((count) => count + 1);
    };

    return (
        <>
            <h1>Contador</h1>
            <p>Valor do contador: {counter}</p>
            <Button variant="contained" onClick={incrementCounter}>
                Incrementar
            </Button>
        </>
    );
}
