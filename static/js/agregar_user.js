function datos(amigos,tags){

    const meses=['01','02','03','04','05','06','07','08','09','10','11','12'];
    var date=new Date();
    var register=date.getFullYear()+"-"+meses[date.getUTCMonth()]+'-'+date.getUTCDay()+'T'+date.toTimeString();
    register=register.replace('(hora estándar central)','');
    var user={
        '_id':null,
        'index':0,
        'guid':null,
        "isActive": true,
        "balance":"$"+document.getElementById('balance_user').value,
        "picture":document.getElementById('picture_user').value,
        "age":document.getElementById('age_user').value,
        "eyeColor": document.getElementById('eye_user').value,
        "name": document.getElementById('username').value,
        "gender": document.getElementById('gender_user').value,
        "company": document.getElementById('company_user').value,
        "email": document.getElementById('email_user').value,
        "phone": document.getElementById('phone_user').value,
        "address":document.getElementById('address_user').value,
        "about":document.getElementById('about_user').value,
        "registered":register,
        "latitude": parseFloat(document.getElementById('latitude_user').value),
        "longitude":parseFloat(document.getElementById('longitud_user').value),
        "tags":tags,
        "friends":amigos,
        "greeting": document.getElementById('saludo_user').value,
        "favoriteFruit":document.getElementById('fruit_user').value
    };
    return user;
}

