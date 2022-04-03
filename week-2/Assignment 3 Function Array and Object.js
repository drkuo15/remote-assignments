function avg(data){
    let len = data.products.length;
    let sum = 0 
    for(i=0; i<len; i++){
        let pri = data.products[i].price;
        sum += pri;  
    }
    return sum/len;
} 

avg({
size:3,
products:[
{
name:"Product 1",
price:100 },
{
name:"Product 2",
price:700 },
{
name:"Product 3",
price:250 }
]})
