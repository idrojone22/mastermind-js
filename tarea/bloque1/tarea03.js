let a = 5;
let b = 20;
let c = 8;
let d = 25;

//----a--------------b--------
//-------c----------------d---

function comprobar() {
    let z = d-c;
    console.log(z)

    if ( z > a && z < b ) {
        console.log(true);
    } else {
        console.log(false);
    }
}

comprobar();

