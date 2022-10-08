function scuberGreetingForFeet(distance) {
  // Write your code here!
  console.log(distance);
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}
console.log(scuberGreetingForFeet(2450));

function ternaryCheckCity(location) {
  // Write your code here!
  return location === "NYC" ? "Ok, sounds good." : "No go.";
}
console.log(ternaryCheckCity("NYC"));

function switchOnCharmFromTip(tip) {
  // Write your code here!
  console.log(tip);
  switch (tip) {
    case "generous":
      return "Thank you so much.";

    case "not as generous":
      return "Thank you.";

    default:
      return "Bye.";
  }
}
switchOnCharmFromTip("not as generous");
