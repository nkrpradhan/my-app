console.log('test')

let initialValue=0;
function incrementfn(e){
   
initialValue++;
document.querySelector('.positive').textContent=initialValue;

}

function decrementfn(e){
   
initialValue>0 && initialValue--;
document.querySelector('.positive').textContent=initialValue;

}

document.querySelector('.btnpositive').addEventListener('click',incrementfn);


document.querySelector('.btnnegative').addEventListener('click',decrementfn);