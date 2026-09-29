let indexQuestionActuelle = 0;
let score = 0;

const questionTexte = document.getElementById('questionTexte');
const boutonsReponse = Document.getElementById('boutonReponse');
const scoreTexte = Document.getElementById('score');
const btnRecommencer = Document.getElementById('btnRecommencer');

function afficherQuestion(){
    boutonsReponse.innerHTML = "";

    if(indexQuestionActuelle >= questions.length){
        questionTexte.innerText = "Quiz terminè";
        scoreTexte.innerText = 'mon score final:${score} / ${questions.length}';
        btnRecommencer.style.display = "block";
        return;
    }
    let q = questions[indexQuestionActuelle];
    questionTexte.innerText = 'question $ {indexQuestionActuelle + 1} / ${questions.length}: ${q.question}';

    for(let i = 0;i<q.reponses.length; i++){
        const bouton = Document.createElement('button');
        bouton.innerText = q.reponses[i];
        bouton.onclick =() =>
            verifieerReponses(i);
                 boutonsReponse.appendChild(bouton);
    }
}
function verifieerReponses(indexChoisis){
    let q = questions[indexQuestionActuelle];
    if(indexChoisis === q.correcte){
        score++;
        scoreTexte.innerText = 'score: ${score}';
        
    }
}
    

    

