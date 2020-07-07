import React from 'react';
import Letter from './Letter';


const words=[
    "PANGOLIN",
    "DAUPHIN",
    "CACATOES",
    "EPAGNEUL",
    "CAMELEON",
    "BALEINE",
    "ELEPHANT",
]

class Word extends React.Component{
    state={
        word: words[(Math.floor(Math.random()*words.length))],
        letters: [],
        usedLetters: [], 
    }
    generateWord(){
       const {word,letters,usedLetters}= this.state  
       for(let i=0; i< word.length; i++){
           let letter= word.charAt(i)
           let reveal=(usedLetters.indexOf(letter)!==-1)? true:false
           letters.push(
               <Letter reveal={reveal} key= {i} letter= {letter}/>
           )
        
       }
       this.setState({
           letters:letters
       })
       return this.state.letters
    }
    componentDidMount(){
        const usedLetters= this.state.usedLetters;
        window.addEventListener('keyup',(e)=>{
            const letter= e.key.toUpperCase()
            if(usedLetters.indexOf(letter)===-1){
                this.setState({
                    usedLetters:[...usedLetters,letter]
                })
            this.generateWord()
                
            }
            this.setState({
                usedLetters:[...usedLetters,letter]
            })
        })
    }

    render() {
        return(
            <div>
                <p>Hello</p>
                <p><Letter /></p>
            </div>
            
        )
    }
}
export default Word