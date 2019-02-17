function calculateDogeAge(dog, human) {
    let dogAge = dog * 7;
    let humanAge = human / 7;
    console.log("Your doggie is " + dogAge + " years old in human years!");
    if (humanAge == 1) {
        console.log("I am " + humanAge + " year old in dog years!");
    } else {
        console.log("I am " + humanAge + " years old in dog years!");
    }
    console.log("----------");
}

dog1 = 1;
human1 = 19;

calculateDogeAge(dog1, human1);
