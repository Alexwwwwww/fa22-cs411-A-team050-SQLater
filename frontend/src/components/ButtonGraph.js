import React, { useState } from "react";

const ButtonGraph = ({title, getGraph}) => {
    const [input, setInput] = useState("")
    const [graphFile, setGraphFile] = useState()
    const GraphInputChangeHandler = async (event) => {
        setInput(event.target.value);
    };
    const SubmitGraphHandler = async (event) => {
        event.preventDefault()
        setGraphFile(getGraph(input))
    }

    return (
        <>
            <form onSubmit={SubmitGraphHandler}>
                <label>
                    &nbsp;&nbsp;{title}
                    <input
                        type="text"
                        value={input}
                        onChange={GraphInputChangeHandler}
                    ></input>
                    <button type="submit">Submit</button>
                </label>
            </form>
            {graphFile && <figure><img src={graphFile} alt="Graph" /></figure>}
        </>
    )
}

export default ButtonGraph
