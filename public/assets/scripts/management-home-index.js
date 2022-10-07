let listCars;

const skeletonLoading = new SkeletonTemplate('cards-car');
skeletonLoading.genTemplate();
skeletonLoading.setView(9);

const handlerOpenData = (JSONData)=>{
    if(JSONData.error != undefined){
        window.location.replace('/login-page');
    }else{
        listCars = new ContentTemplateUser(JSONData, 'cards-car');
        listCars.setBlankView();
        listCars.setView();
    }
}

const handlerDeleteData = (JSONData) => {
    if(JSONData.error != undefined){
        // Notifikasi gagal hapus
        let alert = document.getElementById('alert-danger');
        alert.innerText(JSONData.error);
        alert.classList.remove('d-none');
        setTimeout(() => {
            alert.classList.add('d-none');
        }, 3000);
    }else{
        // Notifikasi berhasil
        let alert = document.getElementById('alert-success');
        alert.innerText("Data has deleted");
        alert.classList.remove('d-none');
        setTimeout(() => {
            alert.classList.add('d-none');
        }, 3000);
        // Renew JSON Data
        listCars.setBlankView();
        skeletonLoading.setView();
        listCars.setNewJson(`${window.origin}/auth/${userID}/cars`, listCars);
    }
}

requestServer(`${window.origin}/auth/${userID}/cars`, 'GET', {}, handlerOpenData);

// handling size card
document.querySelectorAll('.size').forEach(element => {
    element.addEventListener('click', function(){
        if(this.value == 'sm'){
            listCars.setBlankView();
            listCars.setView('col-md-3');
        }else if(this.value == 'md'){
            listCars.setBlankView();
            listCars.setView('col-md-4');
        }else{
            listCars.setBlankView();
            listCars.setView('col-md-6')
        }
    })
});

// handling delete car
document.querySelectorAll('.btn-delete').forEach(element => {
    element.addEventListener('click', function(){
        let idData = this.getAttribute('value');

    });
});
