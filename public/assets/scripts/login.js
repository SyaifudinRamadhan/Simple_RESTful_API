const loginVerify = (JSONData) => {
    console.log(JSONData);
}

document.getElementById('submit').addEventListener('click', ()=>{
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    // Buat animasi loading 

    // Lakukan cek isi field
    if(username == undefined || password == undefined){
        // Munculkan notifikasi gagal 5 detik
    }else{
        requestServer(`${window.origin}/login`, 'POST', loginVerify);
    }
});