
const mysql=require('mysql');


const db=mysql.createConnection({host:'localhost',user:'root',password:'admin@123',database:'school_management_system_db'});

db.connect((error)=>{
    if(error){console.log(`Error: ${error}`);} 
    else{console.log(`db connected successfully`);}
});

let AddUser=(sql)=>{

    return  new Promise((resolve, reject)=>{
          db.query(sql,'', (error, success)=>{
              if(error){
                  reject(error);
              } else{
                  resolve(success.affectedRows)
              }
          });
      });
  }


exports.signup=(req,res)=>{
    
    if(!req.body){res.send(`Invalid input`);}

    let userName=req.body.email;
    let password=req.body.password;
    let sQuery=`Insert into users (email,password) values ('${userName}','${password}')`;

    AddUser(sQuery).then((affectedRows)=>{
        res.send(`${affectedRows} records inserted`);
    });
};

