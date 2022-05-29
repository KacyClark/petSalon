let salon={
    name:"Pampered Pooches",
    address:{
        number:"172",
        street: "Palomar",
        city: "San Diego",
        zip: "92710",
    },
    operation:{
        open:10:00 a.m.,
        close:9:00p.m.,
        days:"Tuesday thru Saturday"
    },
    phone:"901-234-5678"
}

    pets:[];

    function Pet(n,a,g,b,s,o,p){
        this.name=n;
        this.age=a;
        this.gender=g;
        this.breed=b;
        this.service=s;
        this.ownersName=o;
        this.contactPhone=p;

        let pet1 = new Pet("Scooby",5,"male","Dane","nail trim", "Shaggy P","888-888-8888");
        let pet2 = new Pet("Felix",12,"male","German Shepherd","dental care","George G","777-777-7777");
        let pet3 = new Pet("Titan",6,"male","poodle","grooming","Joyce N", "666-667-6667");
        let pet4 = new Pet("Precious",7,"female","chihuahua","vaccine","Karyn C","502-345-6667");
    }
    function(register){
        let petName=document.getElementById("txtName").Value;
        let petAge=document.getElementById("txtAge").Value;
        let petGender=document.getElementById("txtGender").value;
        let petBreed=document.getElementById("txtBreed").value;
        let petService=document.getElementById("selService").value;
        let petOwner=document.getElementById("txtOwner").value;
        let petPhone=document.getElementById("txtPhone").value;

        let newPet = new Pet(petName,petAge,petGender,petBreed, petService,petOwner,petPhone);
    }
   
    salon.pets.push(newPet);
console.log(pet1,pet2);
   function petsNames(){
    for(let i=0;i<salon.pets.length;i++){
        console.log(salonPets[i].names)
    }
    alert(`We have ${salon.pets.length} pets registered`)
}
petsNames();

function displaySalonInfo(){
    let tmp=
    `<p>${salon.name}</p>`
    `<p>${salon.address.number} + ${salon.address.street}</p>`
    `<p>${salon.address.city} + ${salon.address.zip}</p>`
    `<p>${salon.phone}</p>`
    `<p>${salon.operation.days}</p>`
    `<p>${salon.operation.open}</p>`
    `<p>${salon.operation.close}</p>`

    document.getElementById("footerInfo").innerHTML=tmp;
}
function init(){  
     displaySalonInfo();
}

window.onload=init;