let pedido = '';
let Total = 0;
let subtotalTorta =0;
let subtotalBebida =0;

const tortaUno = 'Cheesecake frutos rojos';
const tortaDos = 'Chocotorta';
const tortaTres = 'Pastafrola';
const tortaCuatro = 'Biscochuelo de naranja';

const valorTortaUno = 500;
const valorTortaDos = 400;
const valorTortaTres = 350;
const valorTortaCuatro = 300;

const bebidaUno = 'Capucchino';
const bebidaDos = 'Latte'
const precioBebida = 450;

let bienvenido = alert('Bienvenido a Nuestra Tienda')

let nombre = prompt ('Ingresa tu nombre')

alert( 'Welcome: ' + nombre + '!')

const torta = prompt( nombre  + ' ' + '¿Cual va a ser tu pedido?' + ' ' + '\n 1-' + tortaUno + '\n 2-' + tortaDos + '\n 3-' + tortaTres + '\n 4-' + tortaCuatro,tortaUno,valorTortaUno,tortaDos,valorTortaDos,tortaTres,valorTortaTres,tortaCuatro,valorTortaCuatro);

const bebida = prompt( nombre  + ' ' + "Elige una bebida para compañar tu torta?" + ' ' + '\n 1-' + bebidaUno + ' ' + '\n 2-' + bebidaDos,bebidaUno,precioBebida,bebidaDos,precioBebida)

function Pedido(torta,bebida,nombre){
    this.torta = torta
    this.bebida = bebida
    this.nombre = nombre
}

const pedidoCliente = new Pedido(torta,bebida,nombre)

console.log(pedidoCliente)

function operacion(valorUno, valorDos, operacion) {
    switch (operacion){
            case "1":
                return valorUno + valorDos;
                break;
            case "2":
                return valorUno - valorDos;
                break;
            case "3":
                return valorUno * valorDos;
                break;
            case "4":
                return valorUno / valorDos;
                break;
            default:
            return 0;
                break;
        }
}

function pedirCantidad(texto) {
    let valor = prompt(texto);
    while ( isNaN(parseInt(valor)) ) {
        valor = prompt(texto)
    }
}

function realizarPedido(text1,text2,prodUno,valorProdUno,prodDos,valorProdDos){
    let eleccion = 0;
    let cantidad = 0;
    let subtotal = 0;

    cantidad = pedirCantidad(text1)
    
    if (cantidad > 0) {
        for (let i = 1; i <= cantidad; i++) {
            eleccion = pedirCantidad(text2 + 'N°:' + i + '\n1-' + prodUno + '$' + valorProdUno + '\n 2-' + prodDos + '$' + valorProdDos);
            while (eleccion !=1 && eleccion !=2) {
                eleccion = pedirCantidad('Opcion incorrecta,' + text2 + " N°:" + i + " \n 1-" +prodUno + " $" + valorProdUno + " \n 2-" + prodDos + " $"+ valorProdDos );
            }
            if (eleccion == 1) {
                subtotal = operacion(subtotal,valorProdUno,'1');
                Pedido = operacion(pedido,prodUno + '$' + valorProdDos + " \n","1");
            } else {
                subtotal = operacion(subtotal,valorProdDos,'1');
                Pedido = operacion(pedido,prodDos + '$' + valorProdDos + " \n","1");
            }
        }
    }
    return subtotal;
}


subtotalTorta = realizarPedido('Cuantas porciones van a llevar?','Elegi tu porcion',tortaUno,valorTortaUno,tortaDos,valorTortaDos,tortaTres,valorTortaTres,tortaCuatro,valorTortaCuatro);

Total = operacion(Total,subtotalTorta,'1')

subtotalBebida = realizarPedido('Que bebida quieres:','Elegi tu bebida',bebidaUno,precioBebida,bebidaDos,precioBebida);

Total = operacion(Total,subtotalBebida,'1')