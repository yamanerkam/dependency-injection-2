import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class ProductService{
    constructor(log: logService){

    }
getProducts(): Product[]{
    return[
            {name:"mouse",quantity:25},
            {name:"keyboard",quantity:50}
    ]
}

}

export class Product{
    name:string | undefined;
    quantity:number | undefined;
}

@Injectable({providedIn:'root'})
export class logService{
    log(){
        console.log('logging...')
    }
}