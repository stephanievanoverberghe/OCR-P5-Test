// votre code ici

const checkAge = int => {
    if (int < 18) {
        console.log("Vous êtes mineur.");
    } else if (int >= 18 && int <= 65) {
        console.log("Vous êtes majeur.");
    } else {
        console.log("Vous êtes senior.");
    }
}

checkAge(70);

export default checkAge;
