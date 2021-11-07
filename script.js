let digital = document.querySelector('.digital');
let segundo = document.querySelector('.p_s');
let minuto = document.querySelector('.p_m');
let hora = document.querySelector('.p_h');

const atualizaRel = () =>{
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    digital.innerHTML = `${zero(h)}:${zero(m)}:${zero(s)}`;


    let sGr = (6 * s) - 90;
    let mGr = (6 * m) - 90;
    let hGr = ((360/12) * h) - 90;
    segundo.style.transform = `rotate(${sGr}deg)`;
    minuto.style.transform = `rotate(${mGr}deg)`;
    hora.style.transform = `rotate(${hGr}deg)`;

    
}

function zero(n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

setInterval(atualizaRel, 1000);
atualizaRel();