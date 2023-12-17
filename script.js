import { Human, obj } from "./Human.js";
import Address from "./Address.js";

let likhonsAddress = new Address("Mirpur", "Dhaka", "Bangladesh");
let likhon = new Human("Abdullah Likhon", 28, "Male", likhonsAddress);


console.log(obj, likhon);
