const cars = ["BMW", "Toyota", "KIA", "Honda", "Ford"];
const tvBrand = ["LG", "Mi", "Samsung", "Apple", "Sony"];
const phoneBrands = [];
phoneBrands[0] = "Apple";
phoneBrands[1] = "Mi";
phoneBrands[2] = "Nonthing";
phoneBrands[3] = "Vivo";

const eit_member_kms = [
    "KMS",
    24,
    "Myeik",
    "09-xxxxxxxxx",
    "job.lsjfj@gmail.com",
];
const eit_leaner = ["BTN", "WH", "MKO", "SN", "HSST", "NLLT", "AT",];
const user_inpt=prompt("Enter Search Data:").toLowerCase()
const isFound=false;

for (let i = 0; i < eit_leaner.length; i++) {
    const name = eit_leaner[i].toLowerCase();
    if(user_inpt==name){
        alert(`We Found ${user_inpt}`);
        isFound=true;
        break;
    }
    console.log(name);
}

if(!isFound){
    alert(`We didn't ${user_inpt}`)
}
