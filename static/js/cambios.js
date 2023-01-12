function update_user(data,tags,amigos){
    data.isActive=document.getElementById('active_user').value;
    data.balance="$"+document.getElementById('balance_user').value;
    data.picture=document.getElementById('picture_user').value;
    data.age=document.getElementById('age_user').value;
    data.eyeColor=document.getElementById('eye_user').value;
    data.name=document.getElementById('username').value;
    data.gender= document.getElementById('gender_user').value;
    data.company=document.getElementById('company_user').value;
    data.email= document.getElementById('email_user').value;
    data.phone= document.getElementById('phone_user').value;
    data.address=document.getElementById('address_user').value;
    data.about=document.getElementById('about_user').value;
    data.latitude= parseFloat(document.getElementById('latitude_user').value);
    data.longitude=parseFloat(document.getElementById('longitud_user').value);
    data.tags=tags;
    data.friends=amigos;
    data.greeting=document.getElementById('saludo_user').value;
    data.favoriteFruit=document.getElementById('fruit_user').value;
}