let indexQuestionActuelle = 0;
let score = 0;
const questionTexte = document.getElementById('questionTexte');
const boutonsReponse = document.getElementById('boutonsReponse');
const scoreTexte = document.getElementById('score');
const btnRecommencer = document.getElementById('btnRecommencer');

function afficherQuestion(){
    boutonsReponse.innerHTML = "";
    if(indexQuestionActuelle >= questions.length){
        questionTexte.innerText = "Quiz terminé!";
        scoreTexte.innerText = `Score final: ${score} / ${questions.length}`;
        btnRecommencer.style.display = "block";
        return;
    }
    let q = questions[indexQuestionActuelle];
    questionTexte.innerText = `Question ${indexQuestionActuelle+1}: ${q.q}`;
    scoreTexte.innerText = `Score: ${score}`;

    for(let i=0; i<q.reponses.length; i++){
        const bouton = document.createElement('button');
        bouton.innerText = q.reponses[i];
        bouton.addEventListener('click', () => {
            if(i === q.correct) score++;
            indexQuestionActuelle++;
            afficherQuestion();
        });
        boutonsReponse.appendChild(bouton);
    }
}

btnRecommencer.addEventListener('click', ()=>{
    indexQuestionActuelle = 0; score = 0;
    btnRecommencer.style.display = "none";
    afficherQuestion();
});
