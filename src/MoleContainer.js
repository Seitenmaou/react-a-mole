import {useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    let [targetMole, setTargetMole] = useState(false)

const handleClick = (e) => {
    props.setScore(props.score+1)
    setTargetMole(false)
}



let displayMole = targetMole
? <Mole setScore={props.setScore} toggle={setTargetMole} handleClick={handleClick} />
: <EmptySlot toggle={setTargetMole} />

return (
    <div style={{'display': 'inline-block', 'width': '30vw'}}>
        {displayMole}
    </div>
)
}
export default MoleContainer