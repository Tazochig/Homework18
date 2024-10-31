let age = prompt("Enter your age");
let type = prompt("Movie type");
let time = prompt("matinee or evening");
let discount = prompt("do you have a discount");

let price = 0;

function AgeControl(age) {
  switch (true) {
    case age < 10:
      return (price += 5);
    case age >= 10 && age <= 65:
      return (price += 15);
    default:
      return (price += 10);
  }
}
AgeControl(age);

function TypeControl(type) {
  switch (true) {
    case type === "3D":
      return (price += 5);
    default:
      break;
  }
}
TypeControl(type);

function TimeControl(time) {
  switch (true) {
    case time === "evening":
      return (price += 5);
    default:
      break;
  }
}

TimeControl(time);
function DiscountControl(discount) {
  switch (true) {
    case discount === "yes" || "ki" || "diax":
      return (price -= 5);
    default:
      break;
  }
}
DiscountControl(discount);

alert(price + "lari");
