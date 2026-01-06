function login(){
 fetch('http://localhost:3000/api/auth/login',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({email:email.value,password:password.value})
 }).then(r=>r.json()).then(d=>{
  localStorage.setItem('token',d.token);
  location.href=d.role==='admin'?'admin.html':'index.html';
 });
}