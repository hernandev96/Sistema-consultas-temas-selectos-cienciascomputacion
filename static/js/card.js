function info(usuario){
    
    document.getElementById("user_id").value=' '+usuario._id+'';
    document.getElementById("index_user").value=' '+usuario.index+'';
    document.getElementById("guid_user").value=' '+usuario.guid+'';
    document.getElementById("active_user").value=' '+usuario.isActive+'';
    document.getElementById("balance_user").value=' '+usuario.balance+'';
    document.getElementById("picture_user").value=' '+usuario.picture+'';
    document.getElementById("age_user").value=' '+usuario.age+'';
    document.getElementById("eye_user").value=' '+usuario.eyeColor+'';
    document.getElementById("username").value=' '+usuario.name+'';
    document.getElementById("gender_user").value=' '+usuario.gender+'';
    document.getElementById("company_user").value=' '+usuario.company+'';
    document.getElementById("email_user").value=' '+usuario.email+'';
    document.getElementById("phone_user").value=' '+usuario.phone+'';
    document.getElementById("address_user").value=' '+usuario.address+'';
    document.getElementById("about_user").value=' '+usuario.about+'';
    document.getElementById("registered_user").value=' '+usuario.registered+'';
    document.getElementById("latitude_user").value=' '+usuario.latitude+'';
    document.getElementById("longitud_user").value=' '+usuario.longitude+'';
    usuario.tags.forEach(element => {
        var tag=document.createTextNode(element);
        var item=document.createElement('li');
        item.appendChild(tag);
        document.getElementById('tags-list').appendChild(item);
    });
    usuario.friends.forEach(e => {
        var amigo='ID: '+e.id+' Name: '+e.name+' ';
        var friend=document.createTextNode(amigo);
        var item_friends=document.createElement('li');
        item_friends.appendChild(friend);
        document.getElementById('friends-list').appendChild(item_friends);
    });
    document.getElementById("saludo_user").value=' '+usuario.greeting+'';
    document.getElementById("fruit_user").value=' '+usuario.favoriteFruit+'';

}