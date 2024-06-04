// votre code ici

const checkAge = (age) => {
    switch (true) {
        case (age < 18):
            return "Vous êtes mineur.";
        case (age >= 18 && age < 65):
            return "Vous êtes majeur.";
        case (age >= 65):
            return "Vous êtes senior.";
        default:
            return "Âge invalide.";
    }
};


checkAge(70);

export default checkAge;
