import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default ({onSelectSquare}) => {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const handleSelectSquare = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     })

    //     onSelectSquare();
    // }

    return (<ol id="game-board">
        {initialGameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                            <li key={colIndex}>
                                <button onClick={onSelectSquare}>{playerSymbol}</button>
                            </li>
                        )}
                </ol>
            </li>
        )}
    </ol>)
};
