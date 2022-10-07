let listCars;

const handlerOpenData = (JSONData)=>{
    if(JSONData.error != undefined){
        window.location.replace('/login-page');
    }else{
        listCars = new ContentTemplateUser(JSONData, 'cards-car');
        listCars.setBlankView();
        listCars.setView();
    }
}

const skeletonLoading = new SkeletonTemplate('cards-car');
skeletonLoading.genTemplate();
skeletonLoading.setView(9);

requestServer(`${window.origin}/auth/${userID}/cars`, 'GET', {}, handlerOpenData);

// handling size card
document.querySelectorAll('.size').forEach(element => {
    element.addEventListener('click', function(){
        if(this.value == 'sm'){
            listCars.setBlankView();
            listCars.setView('col-md-2');
        }else if(this.value == 'md'){
            listCars.setBlankView();
            listCars.setView('col-md-4');
        }else{
            listCars.setBlankView();
            listCars.setView('col-md-6')
        }
    })
});

