import React from "react";
import data from '../data.js'
import Box from '../components/Box.js'
import Confetti from 'react-confetti'

export default function Game() {
    
    const [running, setRunning] = React.useState(false)
    const [boxes, setBoxes] = React.useState(data)
    const [currPlayer, setCurrPlayer] = React.useState(true)
    const [winner, setWinner] = React.useState()
    const [completed, setCompleted] = React.useState(false)
    const [draw, setDraw] = React.useState(false)

    function handleClick(event) {
        setRunning(true)
        if (!completed) {
            setBoxes(prevBoxes => {
                const newArray = []
                for (let i = 0; i < prevBoxes.length; i++) {
                    if (event.target.id == i) {
                        newArray.push({
                            ...prevBoxes[i],
                            player: currPlayer ? "X" : "O",
                            clicked: true
                        })
                    } else {
                        newArray.push(prevBoxes[i])
                    }
                }
                return newArray
            })
            setCurrPlayer(prevCurrPlayer => !prevCurrPlayer)
        }
    }

    function newGame() {
        setCompleted(false)
        setDraw(false)
        setBoxes(prevBoxes => {
            const newArray = []
            for (let i = 0; i < prevBoxes.length; i++) {
                newArray.push({
                    ...prevBoxes[i],
                    player: "",
                    clicked: false
                })
            }
            return newArray
        })
        console.log(draw)
    }

    React.useEffect(() => {

        let flag = true
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].clicked === false) {
                flag = false
            }
        }
        if (flag === true) {
            setDraw(true)
        }
        if (!completed) {
            if ((boxes[0].player != '' && boxes[0].player === boxes[1].player && boxes[1].player=== boxes[2].player) || 
            (boxes[3].player != '' && boxes[3].player === boxes[4].player && boxes[4].player === boxes[5].player) ||
            (boxes[6].player != '' && boxes[6].player === boxes[7].player && boxes[7].player === boxes[8].player) ||
            (boxes[0].player != '' && boxes[0].player === boxes[4].player &&  boxes[4].player === boxes[8].player) ||
            (boxes[2].player != '' && boxes[2].player === boxes[4].player && boxes[4].player === boxes[6].player) ||
            (boxes[0].player != '' && boxes[0].player === boxes[3].player && boxes[3].player=== boxes[6].player) ||
            (boxes[1].player != '' && boxes[1].player === boxes[4].player && boxes[4].player=== boxes[7].player) ||
            (boxes[2].player != '' && boxes[2].player === boxes[5].player && boxes[5].player=== boxes[8].player)
        ) {
            setWinner(prevWinner => {
                return currPlayer ? "O" : "X"
            })
            console.log(winner + " won")
            setRunning(false)
            setCompleted(true)
        }
        }
    }, [boxes])

    console.log(winner + " won")

    const options = boxes.map(box => (
        <Box key={box.id} clicked={box.clicked} img={box.img} player={box.player} value={box.id} handleClick={handleClick} />
    ))

    return (
        <div className="container">
            {completed && <Confetti  height="800px" />}
            <h1>Tic Tac Toe</h1>
            <section className="grid">
                {options}  
            </section>
            <section>
                <button className="restart-button" onClick={newGame}>Restart</button>
            </section>
            {(draw && !completed) && <h1>Draw</h1>}
            {completed && <h1>{winner} won</h1>}
        </div>
    )
}