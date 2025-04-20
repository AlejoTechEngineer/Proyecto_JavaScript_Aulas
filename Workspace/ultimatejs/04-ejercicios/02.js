/**
 * Nombre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720 
 * Si el valor es menor se devuelve falso
 */

function nombreResolucion(ancho, alto){

    let resolucion8kancho = 7680;
    let resolucion8kalto = 4320;
    let resolucion4kancho = 3840;
    let resolucion4kalto = 2160;
    let resolucionWQHDancho = 2560;
    let resolucionWQHDalto = 1440;
    let resolucionFHDancho = 1920;
    let resolucionFHDalto = 1080;
    let resolucionHDancho = 1280;
    let resolucionHDalto = 720;


    if (ancho>=resolucion8kancho && b>=resolucion8kalto){
        return "8K";
    }else if (ancho>=resolucion4kancho && ancho<resolucion8kancho && alto>=resolucion4kalto && alto<resolucion8kalto){
        return "4K";
    }else if (ancho>=resolucionWQHDancho && ancho<resolucion4ancho && alto>=resolucionWQHDalto && alto<resolucion4kalto){
        return "WQHD";
    }else if (ancho>=resolucionFHDancho && ancho<resolucionWQHDancho && alto>=resolucionFHDalto && alto<resolucionWQHDalto){
        return "FHD";
    }else if (ancho>=resolucionHDancho && ancho<resolucionFHDancho && alto>=resolucionHDalto && alto<resolucionFHDalto){
        return "HD";
    }
    else{
        return false;
    }

}
let a=3840;
let b=2160;

let nombre = nombreResolucion(a, b);
console.log(nombre);

