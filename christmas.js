// Highly sophisticated present-dispensing algorithm

function getPresent() {
    var presents = ['Car', 'Yacht', 'Piano', 'Teddy Bear'];
    
    return presents[randNumber(1, presents.length) - 1];
}

function deliverPresent(recipient) {
    var present = getPresent();
    
    return recipient + " received a " + present + " from Santa!";
}

function merryChristmas() {
    var salutation = "Merry Christmas!";
    var name = "Malcolm";
    
    alert(salutation + ' ' + deliverPresent(name));
}