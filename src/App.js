import React, {useState, useEffect} from 'react';
import './App.css';
import StatSkillRow from './StatSkillRow';

const App = () => {

    const [total, setTotal] = useState(0);
    const [bodyPoints, setBodyPoints] = useState(0);
    const [coordinationPoints, setCoordinationPoints] = useState(0);
    const [sensePoints, setSensePoints] = useState(0);
    const [mindPoints, setMindPoints] = useState(0);
    const [charmPoints, setCharmPoints] = useState(0);
    const [commandPoints, setCommandPoints] = useState(0);

    useEffect(() => {
        setTotal(bodyPoints + coordinationPoints + sensePoints + mindPoints + charmPoints + commandPoints);
    }, [bodyPoints, coordinationPoints, sensePoints, mindPoints, charmPoints, commandPoints]);
    
  return (
    <div style={{marginLeft:'80px', marginTop:'50px'}}>
        <div style={{fontSize:'2rem', marginLeft:'250px'}}>Total cost: {total}</div>
        <table>
            <thead>
                <tr>
                    <td>Stat</td>
                    <td>d</td>
                    <td>hd</td>
                    <td>wd</td>
                    <td>Hyper d</td>
                    <td>Hyper hd</td>
                    <td>Hyper wd</td>
                    <td>dice</td>
                    <td>Cost</td>
                </tr>
            </thead>
            <tbody>
                <StatSkillRow id={'Body'} setPoints={setBodyPoints}/>
                <StatSkillRow id={'Coordination'} setPoints={setCoordinationPoints}/>
                <StatSkillRow id={'Sense'} setPoints={setSensePoints}/>
                <StatSkillRow id={'Mind'} setPoints={setMindPoints}/>
                <StatSkillRow id={'Charm'} setPoints={setCharmPoints}/>
                <StatSkillRow id={'Command'} setPoints={setCommandPoints}/>
            </tbody>
        </table>
    </div>
  );
}

export default App;
