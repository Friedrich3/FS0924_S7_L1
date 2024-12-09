
//ESERCIZIO UNO
class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    compareAge(element) {
        if (this.age === element.age) {
            return console.log(`L'età di ${this.firstName} è uguale a quella di ${element.firstName} `);
        } else if (this.age > element.age) {
            return console.log(`${this.firstName} è più vecchio di ${element.firstName}`);
        } else {
            return console.log(`${this.firstName} è più giovane di ${element.firstName}`);
        }
    }
}

const utente1 = new User("Mario", "Rossi", "72", "Roma");
const utente2 = new User("Paolo", "Bianchi", "72", "Genova");
const utente3 = new User("Marco", "Neri", "54", "Genova");

utente1.compareAge(utente2);    //ETA UGUALE
utente2.compareAge(utente3);    //OBJ MAGGIORE
utente3.compareAge(utente1);    //OBJ MINORE

//ESERCIZIO 2
const pets = [];
const Owners = [];
const btnAdd = document.getElementById("btnAdd");


class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    checkOwner() {
        if (Owners.includes(this.ownerName)) {
            console.log("true");
            printOwner(true,this.ownerName,this.petName);
        } else {
            console.log("false");
            printOwner(false,this.ownerName,this.petName);
        }
    }
}


btnAdd.addEventListener("click", function (e) {
    e.preventDefault();
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("petSpecies").value;
    const breed = document.getElementById("petBreed").value;

    const pet = new Pet(petName, ownerName, species, breed);
    pets.push(pet);
    pet.checkOwner();
    Owners.push(ownerName);

    addPet();
    console.log(Owners);
});

function addPet() {
    let animalList = document.getElementById("animalList");
    let formAnimals = document.getElementById("formAnimals");
    animalList.innerHTML = "";

    pets.forEach(element => {
        let newLi = document.createElement("li");
        newLi.innerText = `Nome: ${element.petName} - Owner: ${element.ownerName} - Specie: ${element.species} - Razza: ${element.breed}`
        animalList.appendChild(newLi);
    });
    formAnimals.reset();
}

function printOwner(booleano,ownerName,petName) {
    let ownerList = document.getElementById("Owners");
    
    if (booleano) {
        let listItem = document.getElementById(`${ownerName}`);
        listItem = listItem + `,${petName}`;
    } else {
        let newLi = document.createElement("li"); 
        newLi.setAttribute("id",`${ownerName}`);
        newLi.innerText = `${ownerName} owns : ${petName}`;
        ownerList.appendChild(newLi);
        
    }

}

