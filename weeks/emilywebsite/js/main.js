function fact(){
    // creates array containing facts about Federer
    let facts = [];
    facts.push("Emily's favorite food is green chile!");
    facts.push("Emily loves The 1975.");
    facts.push("Emily's hot take is that she doesn't like pizza.");
    facts.push("Emily loves coffee but can't drink it black.");
    facts.push("Emily loves country music but like wholesome country like Thomas Rhett, not misogynistic country.");
    facts.push("Emily finally learned how to penny board after her traumatizing fall in the science center plaza.");
    facts.push("Emily loves CS50 (of course!).");

    // Uses a random number generator to get a random fact from the array
    let random_fact = facts[Math.floor(Math.random()*facts.length)];
    document.getElementById("fact").innerHTML = random_fact;
};