const mysql=require('mysql');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin@123',
    database:'school_management_system_db'
});

db.connect((error)=>{
    if(error){
        console.log(`Error: ${error}`);
    } else{
        console.log(`db connected successfully`);
    }
});