const contenedor = document.querySelector('.contenedor')
const altoTablero=300;
const anchoTable=570;
const altoBloque=20;
const anchoBloque=100;

//dibujar posicion de usuario
 const posicionInicialUsuario=[230,10]
 let posicionActualUsuario=posicionInicialUsuario
//definicion de medidas
class Bloque{
    constructor(ejeX, ejeY){
        this.bottomLeft=[ejeX,ejeY]
        this.bottomRigth=[ejeX + anchoBloque, ejeY]
        this.topLetf=[ ejeX, ejeY + altoBloque]
        this.topRigth=[ejeX + anchoBloque, ejeY + altoBloque]
    }}
//definir todos los bllques
const bloques = [
    new Bloque(10,250),
    new Bloque(120,250),
    new Bloque(230,250),
    new Bloque(340,250),
    new Bloque(450,250),
    new Bloque(10,220),
    new Bloque(120,220),
    new Bloque(230,220),
    new Bloque(340,220),
    new Bloque(450,220),
    new Bloque(10,190),
    new Bloque(120,190),
    new Bloque(230,190),
    new Bloque(340,190),
    new Bloque(450,190),
]
//funcion añador blques
function addBloques(){
    for(let i = 0; i <  bloques.length; i++){
        //esto crea un elemento div dentro del documento
         const bloque= document.createElement('div')
         //añadimos el css
         bloque.classList.add('bloque')
         //ponemos su posicion
         bloque.style.left=bloques[i].bottomLeft[0]+'px'
         bloque.style.bottom=bloques[i].bottomLeft[1]+'px'
         //luego lo añadimos al contenedor el bloque
         contenedor.appendChild(bloque)
    }

}
//añadir los bloques al juego
addBloques()

function dibujarUsuario(){
    usuario.style.left=posicionActualUsuario[0]+'px'
    usuario.style.bottom=posicionActualUsuario[1]+'px'
}
//añadir al usuario
const usuario = document.createElement('div')
usuario.classList.add('usuario')
contenedor.appendChild(usuario)
dibujarUsuario()

//funcion mover usuario
function moverUsuario(e){
    switch(e.key){
        case 'ArrowLeft':
            if(posicionActualUsuario[0]>0){
                posicionActualUsuario[0] -=10
                dibujarUsuario()
            }
            break
        case 'ArrowRight':
            if(posicionActualUsuario[0]<(anchoTable - anchoBloque)){
                posicionActualUsuario[0] +=10
                dibujarUsuario()
            }
    }
}
//añadir un evento escuchador para el documento
document.addEventListener('keydown', moverUsuario)