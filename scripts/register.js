let salon = {
  name: "Pampered Pooches",
  address: {
    number: "172",
    street: "Palomar",
    city: "San Diego",
    zip: "92710",
  },
  operation: {
    open: "10:00 a.m.",
    close: "9:00p.m.",
    days: "Tuesday thru Saturday",
  },
  phone: "901-234-5678",
  pets: [],
};

function displaySalonInfo() {
  let tmp = `<p>${salon.name}</p>
    <p>${salon.address.number}  ${salon.address.street}</p>
    <p>${salon.address.city} ${salon.address.zip}</p>
    <p>${salon.phone}</p>
    <p>${salon.operation.days}</p>
    <p>${salon.operation.open}</p>
    <p>${salon.operation.close}</p>`;

  document.getElementById("footerInfo").innerHTML = tmp;
}

function Pet(n, a, g, b, s, o, p) {
  this.name = n;
  this.age = a;
  this.gender = g;
  this.breed = b;
  this.service = s;
  this.ownersName = o;
  this.contactPhone = p;
}
//creating default pets
let pet1 = new Pet(
  "Scooby",
  5,
  "male",
  "Dane",
  "nail trim",
  "Shaggy P",
  "888-888-8888"
);
let pet2 = new Pet(
  "Felix",
  12,
  "male",
  "German Shepherd",
  "dental care",
  "George G",
  "777-777-7777"
);
let pet3 = new Pet(
  "Titan",
  6,
  "male",
  "poodle",
  "grooming",
  "Joyce N",
  "555-555-5555"
);
let pet4 = new Pet(
  "Precious",
  7,
  "female",
  "chihuahua",
  "vaccine",
  "Karyn C",
  "502-345-6667"
);
salon.pets.push(pet1,pet2,pet3,pet4);
function isValid(aPet) {
  let valid = true;
  if (aPet.name == "" || aPet.service == "" || aPet.contactPhone == "") {
    //if we arrive here the pet is not valid
    valid = false;
  }
  return valid;
}
//register pets
function register() {
  let petName = document.getElementById("txtName").value;
  let petAge = document.getElementById("txtAge").value;
  let petGender = document.getElementById("txtGender").value;
  let petBreed = document.getElementById("txtBreed").value;
  let petService = document.getElementById("selService").value;
  let petOwner = document.getElementById("txtOwner").value;
  let ownerPhone = document.getElementById("txtPhone").value;

  let newPet = new Pet(
    petName,
    petAge,
    petGender,
    petBreed,
    petService,
    petOwner,
    ownerPhone
  );
  if (isValid(newPet) == true) {
    //push the object onto the array
    salon.pets.push(newPet);
    clear();
  } else {
    alert("Add a name for the pet");
  }
}
alert(`We have ${salon.pets.length} pets registered`);
function petsNames() {
  for (let i = 0; i < salon.pets.length; i++) {
    console.log(salon.pets[i].name);
  }
}
petsNames();

function clear() {
  $("input").val("");
}

function init() {
  displaySalonInfo();
  
  displayTable();
}

window.onload = init;
