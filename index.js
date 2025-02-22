//DOM
const touches= [...document.querySelectorAll('.button')];
const listeKeycode = touches.map(touches=>touches.dataset.key);
const ecran= document.querySelector('.ecran');
console.log(listeKeycode);
document.addEventListener('keydown',(e)=>{
    const valeur=e.KeyCode.toString();
    calculer(valeur)
})
document.addEventListener('click' ,(e)=>{
    const valeur =e.target.dataset.key;
    console.log(valeur,typeof valeur);
    calculer(valeur)
    
    
})
const calculer=(valeur)=>{
    if (listeKeycode.includes(valeur)) 
        switch(valeur){
        case '8' :
        ecran.textContent="";
        break;
        case '13':
            const calcul= eval(ecran.textContent);
            ecran.textContent=calcul;
            break;
        default:
            const indexKeycode=  listeKeycode.indexOf(valeur);
            const touche= touches[indexKeycode];
            ecran.textContent +=touche.innerHTML;  

    }

}
window.addEventListener('error', e =>{
    alert('Une ereur est survenu dans votre calcul :'  + e.message)
})



