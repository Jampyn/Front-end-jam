import React, { Fragment, useState , useEffect} from 'react'
import animal from '../data/animal.json'




function Maintest() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(animal);

    }, []);

    console.log('animal', animal)
    //let data = "กระต่าย";
    //var data = "หมา"
    animal.push("กระต่าย")
    console.log("animal", animal);

    function addArray(text) {
        animal.push(text);
        console.log(animal);
        setData(animal);
    }

    function deleteArray(text) {
        console.log(text)
        animal.pop(text)
        console.log("Animal", animal)
    }

    function filterArray(text) {
        console.log(text);
        let array = animal.filter(a => a !== text)
        console.log("animal", array)

    }

    return (
        <Fragment>
        <div>
            <button type="button" onClick={() => {
                filterArray("กระต่าย")
            }}>
                Click
            </button>
            
            <div className='row'>
                {data.map((item, index) => {
                    return(
                    <div className='col' key={index}>
                        <p>{item}</p>

                    </div>
                    );
                })}
            </div>
        </div>
        </Fragment>
    )
}



export default Maintest