import React, { useState } from 'react'
import { AiFillCaretRight } from "react-icons/ai"; //imported react icons from react icon library



//This is the only component that we need for our dropdown menu

export default function Dropdown(props) {




    //to change the state of dropdown arrow and display dropdown list
    const [degrees, setDeg] = useState("0");
    const[disP,setDisp] = useState("none");


    const myStyle = {

        transform: `rotate(${degrees}deg)`
        , transitionDuration: '0.2s'

    };

    const dropStyle = {
        display: `${disP}`,
    }


    //on hovering the dropdown button
    const onHov = () => {
        setDeg("90")
        setDisp("flex")
    };



    //on clicking the items in the dropdown list

    const onCli = () => {
        setDeg("0")
        setDisp("none")
    };




    //to style the list items

    const listItemsStyle = {

        cursor: 'pointer', 
        border: '0.2px solid darkGreen',
        marginTop: '3px',
        boxSizing: 'border-box',
        paddingTop:'3.5%',
        borderRadius:"5px",
        color: 'white',
        height:'40px'
    
    }

    return (
        <div className='container'>

            <div className="dropDownButton" onMouseOver={onHov}  >
                <p>Dropdown</p>
                <AiFillCaretRight className='item' style={myStyle} />
            </div>
            <div className="dropDownItems" style={dropStyle}>
            {props.itemsList.map((item) => (
              <div className={"listItems"} onClick={onCli} style={listItemsStyle}>
              {item}
            </div>
            ))}

            </div>


        </div>
    )
}



