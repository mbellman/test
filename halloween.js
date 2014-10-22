function randNumber(low, high) {
    return Math.floor((Math.random() * (high - low + 1)) + low);
}

// Highly sophisticated trick-or-treat algorithm

function trickOrTreat() {
    var outcome = randNumber(1, 2);
    
    if(outcome == 1) {
        // Trick!
        return "You just got tricked!";
    } else {
        // Treat
        return "You just got treated!";
    }
}

function halloweenGreeting() {
    var greet = 'Hello there!';
    
    alert(greet + ' ' + trickOrTreat());
}