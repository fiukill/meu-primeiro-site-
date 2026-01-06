fetch('http://localhost:3000/api/products')
.then(r=>r.json())
.then(p=>{
 document.getElementById('products').innerHTML =
 p.map(x=>`<p>${x.name} - R$ ${x.price}</p>`).join('');
});