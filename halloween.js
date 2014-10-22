function randNumber(low, high) {
    return Math.floor((Math.random() * (high - low + 1)) + low);
}

// Highly sophisticated trick-or-treat algorithm

function trickOrTreat() {
    var outcome = randNumber(1, 3);
    
    if(outcome == 1) {
        // Trick!
        return "You just got tricked!";
    } else if(outcome == 2) {
        // Treat
        return "You just got treated!";
    } else {
        // Neither?!??!
        return "Get out of my house.";
    }
}

function halloweenGreeting() {
    var greet = 'Hello there!';
    
    alert(greet + ' ' + trickOrTreat());
}