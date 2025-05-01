const QuizBoxs = document.querySelector("#QuizBoxs")
const ENDPOINT = "http://localhost:3000/quiz"
const ButtonNext = document.querySelector("#ButtonNext")


let newid = 0
const CenterShow = (url) =>{
    axios.get(ENDPOINT).then(({data}) =>{
        
        
        
        let elem = data[newid]
        let elem2 = data[newid -1]
        
        
        
        
        
            QuizBoxs.innerHTML = ""
            
            
            if(elem){
                QuizBoxs.innerHTML += `<div class="options-box">
            <h1 class="Question">${elem.question}</h1>
            <div class="optionsA">
                <h1>A)</h1>
                <p>${elem.options.A}</p>
            </div>
            <div class="optionsB">
                <h1>B)</h1>
                <p>${elem.options.B}</p>
            </div>
            <div class="optionsC">
                <h1>C)</h1>
                <p>${elem.options.C}</p>
            </div>
            <div class="optionsD">
                <h1>D)</h1>
                <p>${elem.options.D}</p>
            </div>
            `
            }else{
                QuizBoxs.innerHTML = `<div class="options-box">
            <h1 class="Question">${elem2.question}</h1>
            <div class="optionsA">
                <h1>A)</h1>
                <p>${elem2.options.A}</p>
            </div>
            <div class="optionsB">
                <h1>B)</h1>
                <p>${elem2.options.B}</p>
            </div>
            <div class="optionsC">
                <h1>C)</h1>
                <p>${elem2.options.C}</p>
            </div>
            <div class="optionsD">
                <h1>D)</h1>
                <p>${elem2.options.D}</p>
            </div>`
                ButtonNext.innerText = "Imtahani bitir"
            }
           
            
           
            
            
            
            
        });
        
    
    
}
CenterShow(ENDPOINT)
const NextShow = () =>{
    newid++
    console.log(newid);
    CenterShow(ENDPOINT)
}


