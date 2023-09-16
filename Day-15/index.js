class Person {
  constructor(n) {
    this.name = n;
  }

  introduceSelf() {
    console.log(`Hi I'm ${this.name}`);
  }

  
}


// const person_1=new Person("Kaung Myat Soe");
// const person_2=new Person("BTN");
// person_1.introduceSelf()
// person_2.introduceSelf()

class Cars{
    constructor(model,brand,color,year){
        this.model=model;
        this.brand=brand;
        this.color=color;
        this.year=year
    }

    showAbout(){
        console.log(`${this.model}\t${this.brand}\t${this.color}`);
    }

    age(){
        const date=new Date()
        return date.getFullYear() - this.year
    }


}


const KIA_2012=new Cars("KIA_2012","KIA","darkgray",2012)
// KIA_2012.showAbout()

// console.log(KIA_2012.age())
console.log(KIA_2012.model)
console.log(KIA_2012.color)
console.log(KIA_2012.brand)
console.log(KIA_2012.year)



