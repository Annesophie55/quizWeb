


// evenement pour gerer le formulaire est soumi (submit)
// Cette evenement prend en pamarametre une fonction callBack qui va gerer le traitement des reponses de l'utilisateur
// Pour se faire vérifier si la valeur de l'input qui est coché est égale à la réponse attendue dans le tableau responses.
// Si le resultat est vrai, on ajoute true dans un nouveau tableau, sinon on ajoute false. 
// Cette fonction appelle la fonction qui va afficher le résultat selon le nombre de bonnes et mauvaises réponses . 
// Cette fonction appelera egalement la fonction qui va ajouter des couleurs à nos blocs questions en fonction des bonnes et mauvaises réponses.


// BONUS : Ajouter une fonction qui va réinitialiser la couleur des blocs questions lorsque l'utilisateur change de réponse.
const responses = ["c", "b", "c", "b", "a"];

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let result = [];
    let radios = document.querySelectorAll(('input:checked'));
    radios.forEach((radio, index)=>{
        if(radio.value === responses[index]){
            result.push(true)
        }
        else{
            result.push(false)
        }
     
    })

    resultQuiz(result);
    color(result);
})

let score = document.querySelector('.score');
let txt = document.querySelector('.txt');

function resultQuiz(result){
    let resultFilter = result.filter((element)=> element === false).length;
   
    score.textContent= "Vous avez fait "+ resultFilter + "erreurs !";

    switch(resultFilter){
        case 0: 
        case 1: 
        case 2: 
            txt.textContent="Vous avez gagné!";
            break;    
        case 3:  
        case 4: 
        case 5: 
            txt.textContent="Vous avez perdu!";
            break;


    }
}
let block = document.querySelectorAll(".question");
function color(result){

    console.log(result);
    result.forEach((element, index)=> {
        if(result[index]){
            block[index].style.backgroundColor='green';
        }
        else{
            block[index].style.backgroundColor='red';
        }
    })
}



//  récupérer mes value en rajoutant une value à mes inputs