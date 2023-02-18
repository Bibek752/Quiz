const questions=[
    {
        'question':'1)Which is used in backend development?',
        'a':'HTML',
        'b':'CSS',
        'c':'Nodejs',
        'd':'Reactjs',
        'correct':'c'
     },
     {
        'question':'2)When was Javascript launched?',
        'a':'2000',
        'b':'1990',
        'c':'1995',
        'd':'none of the above',
        'correct':'c'
    },
    {
        'question':'3)which of the following is not a loop?',
        'a':'when',
        'b':'for',
        'c':'do-while',
        'd':'while',
        'correct':'a'
    },
]

let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const ques=document.getElementById("ques")
const optionInputs=document.querySelectorAll('.options')
const takequestion=()=>{
    if(index==total){
        return endQuiz();
    }
    reset();
    const data=questions[index]
    ques.innerText=data.question;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

const submit=()=>{
    const data=questions[index]
    const ans=getAns()
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    takequestion();
    
}

const getAns=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
               answer= input.value;
            }
            
        }
    )
    return answer;
}

const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML='<h2>Thank you </h2>'
    +
    'and your score is='
    +
    right

    
    
}

takequestion();