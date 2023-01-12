import createExpress from 'express';
import {db_users} from './bd/bbdd.js';
import morgan from 'morgan';
import {engine} from 'express-handlebars';
import {id_generators} from './utilitys.js'
const server=createExpress();
var database_users=db_users;
/**Settings */
server.set('port','3000');
server.set('views','./views');
server.engine('handlebars',engine());
server.set('view engine','handlebars');


/**Middlewares */
server.use(createExpress.json());
server.use(createExpress.text());
server.use(morgan('dev'));
server.use(createExpress.json());



/**Routes */
server.get('/consultas',(req,res)=>{

    res.render('consultas');
});
server.get('/bajas',(req,res)=>{

    res.render('bajas');
});
server.get('/altas',(req,res)=>{

    res.render('altas');
});
server.get('/cambios',(req,res)=>{

    res.render('cambios');
});

server.get('/',(req,res)=>{
    res.render('index');
});

/* API REST */
server.get('/usuario/:id',(req,res)=>{
    const {id}=req.params;
    const user=database_users.find((user)=>user._id==id);
    if(!user){
        res.status(404).send();
    }
    else{
        res.send(user);
    }
});

server.get('/usuarios',(req,res)=>{
    console.log("Se solicitaron todos los usuarios ");
    res.send(database_users);
});

server.post('/usuario/add/user',(req,res)=>{
    var user=req.body;
    
    var aux={
        'id':0,
        'status':'ok'
    }
    user._id=id_generators.genera_id();
    user.index=database_users.length;
    user.guid=id_generators.genera_guid();
    console.log(database_users.push(user));
    console.log(database_users);
    res.send(JSON.stringify(aux));
    console.log("Se guardo de manera correcta en la base de datos el usuario");
});

server.delete('/usuario/delete/:id',(req,res)=>{
    console.log(req.params);
    const identificador=req.params.id;
    console.log(typeof(identificador)+' Ese es el tipo del id: '+identificador);
    var aux=[];
    database_users.forEach(user=>{
        if(user._id===identificador){
            console.log("Localice al usuario a eliminar");
        }else{
            aux.push(user);
        }
    });
    
    database_users=aux;
    console.log(database_users);
    res.send("Se elimino correctamente el usuario");
});

server.patch('/usuario/update',(req,res)=>{
    var user=req.body;
    console.log(user);
    var encontrado=false;
    var aux={
        'id':0,
        'status':'ok'
    }
    var index=0;
    database_users.forEach(item=>{
        if(item._id==user._id){
            index=item.index;
            encontrado=true;
        }
    });
    
    console.log(database_users);
    if(encontrado){
        database_users[index]=user;
        res.send(JSON.stringify(aux));
    }else{
        res.status(400).send();
    }
    
});


/*  */
server.use(createExpress.static('static'));
server.listen(server.get('port'),()=>{
    console.log("El servidor se puso en marcha a la espera de peticiones");
});




