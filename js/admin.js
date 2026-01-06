function addProduct(){
 fetch('http://localhost:3000/api/products',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
   name:name.value,
   price:price.value,
   stock:stock.value
  })
 }).then(()=>alert('Produto criado'));
}