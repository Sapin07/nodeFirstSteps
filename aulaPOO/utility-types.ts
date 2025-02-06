import { Product } from "./produto"

const productAllOptional: Partial<Product> = {
    unitValue:20
}

const productAllRequired: Required<Product> = {
    name: "caixa",
    amountInStock: 5,
    unitValue: 21,
}

const productOmitStock: Omit<Product, "amountInStock"> = {
    name: "carro",
    unitValue: 12
}

const productOnly: Pick<Product, "name"> = {
    name: "cacau"
} 

//apenas leitura
const product1: Readonly<Product> = {
    name: "banana",
    amountInStock: 2,
    unitValue:1,
}
//ex de erro -> product1.name = "teste"