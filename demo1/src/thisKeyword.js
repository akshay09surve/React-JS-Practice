const person = {
  name: "Akshay",
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk;
walk();
