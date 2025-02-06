//import products from './produtos.json';
import fs from "node:fs";
import path from "node:path"
import { json } from "node:stream/consumers";

const productJson = JSON.stringify([
    {
        "name": "chocolate",
        "amountInStock": 500,
        "unitValue": 2
    },
    
    {
        "name": "banana",
        "amountInStock": 120,
        "unitValue": 32
    }
], null , 0)

const fileOutPath = path.join(__dirname, 'generated-products.json');

const produts = JSON.parse(productJson);

fs.writeFileSync(fileOutPath, productJson);
console.log(productJson);

//products.forEach(product => console.log(product));