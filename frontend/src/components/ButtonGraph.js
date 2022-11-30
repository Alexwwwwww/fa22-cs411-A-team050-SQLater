import React, { useState } from "react";

const ButtonGraph = ({title, getGraph}) => {
    const [input, setInput] = useState("")
    const [graphFigure, setGraphFigure] = useState()
    const GraphInputChangeHandler = async (event) => {
        setInput(event.target.value);
    };
    const SubmitGraphHandler = async (event) => {
        event.preventDefault()
        setGraphFigure(<figure><img src={getGraph(input)} alt="Graph" /></figure>)
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
            {graphFigure}
        </>
    )
}

export default ButtonGraph
