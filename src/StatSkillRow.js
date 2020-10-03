import React, {useState, useEffect} from 'react';

const StatSkillRow = ({id, setPoints}) => {
    const [totalCost, setTotalCost] = useState(0);
    const [dice, setDice] = useState(1);
    const [hardDice, setHardDice] = useState(0);
    const [wiggleDice, setWiggleDice] = useState(0);
    const [hyperDice, setHyperDice] = useState(0);
    const [hyperHardDice, setHyperHardDice] = useState(0);
    const [hyperWiggleDice, setHyperWiggleDice] = useState(0);
    
    useEffect(() => {
        let total = 0;
        total += (dice-1) * 5;
        total += hardDice * 10;
        total += wiggleDice * 20;
        total += hyperDice * 4;
        total += hyperHardDice * 8;
        total += hyperWiggleDice * 16;
        setTotalCost(total);
        setPoints(total);
    });

    return (
        <tr>
        <td>
            {id}
        </td>
        <td>
        <button onClick={() => setDice(dice-1)}>-</button>
        <strong> {dice} </strong>
        <button onClick={() => setDice(dice+1)}>+</button>
        </td>
        <td>
        <button onClick={() => setHardDice(hardDice-1)}>-</button>
        <strong> {hardDice} </strong>
        <button onClick={() => setHardDice(hardDice+1)}>+</button>
        </td>
        <td>
        <button onClick={() => setWiggleDice(wiggleDice-1)}>-</button>
        <strong> {wiggleDice} </strong>
        <button onClick={() => setWiggleDice(wiggleDice+1)}>+</button>
        </td>
        <td>
        <button onClick={() => setHyperDice(hyperDice-1)}>-</button>
        <strong> {hyperDice} </strong>
        <button onClick={() => setHyperDice(hyperDice+1)}>+</button>
        </td>
        <td>
        <button onClick={() => setHyperHardDice(hyperHardDice-1)}>-</button>
        <strong> {hyperHardDice} </strong>
        <button onClick={() => setHyperHardDice(hyperHardDice+1)}>+</button>
        </td>
        <td>
        <button onClick={() => setHyperWiggleDice(hyperWiggleDice-1)}>-</button>
        <strong> {hyperWiggleDice} </strong>
        <button onClick={() => setHyperWiggleDice(hyperWiggleDice+1)}>+</button>
        </td>
        <td style={{width:'150px'}}>
            <strong>{dice + hyperDice}d</strong>
            {hardDice + hyperHardDice > 0 && <strong>+ {hardDice + hyperHardDice}hd</strong>}
            {wiggleDice + hyperWiggleDice > 0 && <strong>+ {wiggleDice + hyperWiggleDice}wd</strong>}
        </td>
        <td>{totalCost} points</td>
    </tr>
    );
}

export default React.memo(StatSkillRow);