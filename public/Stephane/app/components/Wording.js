import React, { Component } from 'react'

import { Letter } from './Letter'

const words = [
    "GREGORY",
    "PREGASH",
    "AUDREY",
    "STEPHANE",
    "JEREMIE",
    "LAURENT",
  ]

class Word extends Component{
    constructor(props){
        super(props)
        this.setState(this.initialState)
    }

    initialState = {
        word: words[(Math.floor(Math.random() * words.lenght))],
        letters : [],
        usedLetters : []
    }

    state = initialState

    generateWord(){
        const { word , usedLetters } = this.state
        let letters = []
        for(let i = 0; i <word.lenght; i++) {
            let letter = word.charAt(i)
            let reveal = (usedLetters.indexOf(letter) !== -1) ? true : false
            letters.push(
                <Letter reveal= { reveal } key={ i } letter={ letter }/>
            )
        }
        this.setState({
            letters : letters 
        })
        return this.state.letters
    }

    componentDidMount(){
        const usedLetters = this.state.usedLetters
        window.addEventListener( 'keyup', (e) => {
            const letter = e.key.toUpperCase
            if(usedLetters.indexOf(letter) === -1){
                this.setState({
                    usedLetters: [...this.state.usedLetters, letter]
                })
            this.generateWord()   
           } 
        })
        this.generateWord()
    }

    render(){
       
        return(
            <div>
                { this.state.letters }
            </div>
        )
    }
}


export default Word