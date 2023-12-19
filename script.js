import { Human, obj } from "./Human.js";
import Address from "./Address.js";

let likhonsAddress = new Address("Mirpur", "Dhaka", "Bangladesh");
let likhon = new Human("Abdullah Likhon", 28, "Male", likhonsAddress);
let output = document.querySelector('.object__output')

console.log(obj, likhon);

output.innerText = JSON.stringify(likhon);
console.log("Hello worl")