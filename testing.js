userButton.addEventListener('click',addUser);

function addUser(e){
    e.preventDefault();

    var userName = document.getElementById('name').value;
    
    axios.post("https://crudcrud.com/api/4add3c30cda44bd8a6e570f993c4bc65/appointmentData",{
        name: userName
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

    axios.delete("https://crudcrud.com/api/4add3c30cda44bd8a6e570f993c4bc65/appointmentData/{_id}")
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/4add3c30cda44bd8a6e570f993c4bc65/appointmentData")
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
})