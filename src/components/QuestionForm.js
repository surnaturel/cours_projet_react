import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    const checkValue = (e)=>{
        if (!e.target.value.includes('f')) {
            setInputValue(e.target.value)
        }else{
            alert("🔥 Vous n'avez pas le droit d'utiliser la lettre 'f' ici.")
        }
    }
    const validation = () =>{
        alert(inputValue)
    }
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={checkValue}
            />
            <button onClick={validation}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm