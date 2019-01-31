function sum(a, b) {
    return a + b
}

function sous(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b 
}

function div(a, b) {
    return a / b 
}

// fonction de calcul du nombre de secondes depuis l'an 2000 : 
function dateDiff(date1=new Date('2000-01-01 00:00:00'), date2= new Date()) {
    
    let tmp = date2 - date1; // Initialisation du retour
 
    let newtmp = Math.floor(tmp/1000); // Nombre de secondes entre les 2 dates
               
    return newtmp;
}

module.exports = {sum: sum, sous: sous, mult: mult, div: div, dateDiff: dateDiff};