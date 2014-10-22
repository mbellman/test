// Highly sophisticated present-dispensing algorithm

function getPresent() {
    var presents = ['Car', 'Yacht', 'Piano', 'Teddy Bear'];
    
    return presents[randNumber(1, presents.length) - 1];
}

function merryChristmas() {
    var salutation = "Merry Christmas! You shall receive a";
    
    alert(salutation + ' ' + getPresent());
}