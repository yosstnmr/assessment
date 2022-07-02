let wordgame = {
    question:"りんごの英単語は？",
    correct:"apple",
    evaluation:function(answer){
        return wordgame.correct === answer;
    }
}

let counter = 0;
function exeCount(){
    counter++;
    return counter;
}
document.onkeydown = showExeCount;
let inputkeys = "";
function showExeCount(event) {
    
    let inputKey;
    if(event.key) {
        inputKey = event.key;
    } else {
        inputKey = event.target.innerText;
    }
    console.log(inputKey); // -> 「a」のキーボードまたはボタンを押すと「a」と出力される


if(inputKey=="Enter"){
    const resultElemnt=document.getElementById("result");
    if(wordgame.evaluation(inputkeys)){
        resultElemnt.innerText="正解"
    }else {
        resultElemnt.innerText="不正解"
    }
}
    else if(inputKey=="Delete"||inputKey=="Backspace"){
        let deleteLast = inputkeys.substring(0, inputkeys.length -1);
        inputkeys = deleteLast;
    } else {
        inputkeys+=inputKey;
    }
    const text=document.getElementById('keyabordinput');
    text.innerText=inputkeys;
}

function showAlphabet(){
    let words = document.getElementById("virtualkeyboard");
    const cca = 'a'.charCodeAt(0);

    for(let i = cca;i <=cca + 25;i++){
        const letter = String.fromCharCode(i);
        const button = document.createElement("button");
        button.innerText+=letter
        button.onclick=showExeCount;
        const targetDiv = document.getElementById("virtualkeyboard")
        
        targetDiv.appendChild(button);
    }
    const kimeru = document.createElement("button");
    kimeru.innerText = "Enter";
    kimeru.onclick=showExeCount;
    virtualkeyboard.appendChild(kimeru);
    
    const kesu = document.createElement("button");
    kesu.innerText = "Delete";
    kesu.onclick=showExeCount;
    virtualkeyboard.appendChild(kesu);
}   
showAlphabet()

