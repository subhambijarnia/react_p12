import React, { Component } from 'react';
import './Avt.css';
import 'tachyons';
import Avtlist from './Avtlist';


class Avt extends Component {

    constructor(){
        super();
        this.state = {
            name : "Welcome Users"
        }
    }

    namechange (){
        this.setState({
            name : "Thank You!"
        })
    }

    render() {
        const avtListArray = [
            {
                id: 1,
                name: "Aam",
                work: "web dev"
            },
            {
                id: 2,
                name: "Kela",
                work: "BA PASS"
            },
            {
                id: 3,
                name: "Santra",
                work: "SEO"
            },
            {
                id: 4,
                name: "Chiku",
                work: "Sherlock Holmes"
            },
            {
                id: 5,
                name: "Sev",
                work: "agent 007"
            }
        ]
    
        const arrayAvtCard = avtListArray.map((holdCurrentValue, i) => {
            return <Avtlist key={i} id={avtListArray[i].id} name={avtListArray[i].name} work={avtListArray[i].work} />
        })

        return (
            <div className="mainpage">
            <h1> {this.state.name}</h1>
            {arrayAvtCard}
            <br />
            <button onClick = { () => this.namechange() }>Click</button>
        </div>
        )
    }
}


export default Avt;