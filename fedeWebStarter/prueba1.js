const a=5;
console.log('se trata de',a)
for(k=2;k===2;k++){
    console.log('Entró');
}
/*
arreglo=['xd',2,-5,true];
function mostrar(elemento,i){
        console.log(`${elemento} ${i}`);
}
arreglo.forEach(mostrar);
*/
arreglo.forEach((element,i) => {
    console.log('elemento:',`${element}  `,'tipo:',`${(typeof element)}  `,'posición:',`${i}`,'.');
});