const kia_ = {
  "model-sdf": "kia_2012",
  brand: "kia",
  color: "black",
  
  age: function () {
    const date = new Date();
    return date.getFullYear() - this.year;
  },
  year: 2012,
};

const a=["kia",2012,"black"]
const b=[2012,"kia","black"]

kia_.color="red"
console.log(this);
console.log(kia_["model-sdf"]);
console.log(kia_.color);
console.log(kia_.brand);
console.log(kia_.year);
console.log(kia_.age);


