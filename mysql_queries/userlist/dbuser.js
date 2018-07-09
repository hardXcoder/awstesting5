const mysql=require('mysql2');

const connection = mysql.createConnection(
    {
        host: 'ujjawaldb.cfmjxfzks4ne.ap-south-1.rds.amazonaws.com',
        database: 'ujjawalDB',
        user: 'ada',
        password: '120120021',
        insecureAuth: true
    }
)    

function insertuser(name ,email,college,address,phone,password) {
    // console.log(title+description+price+img+'------');
    console.log("I am here in newest")
    return new Promise(function (resolve, reject) {
        connection.query(`INSERT INTO users (name ,email,college,address,phoneNumber,password) VALUES(?,?,?,?,?,?)`,
            [name ,email,college,address,phone,password],
            function (err, res) {
                if (err) {
                    console.log(error)
                    reject(err);
                } else {

                    console.log('success');

                    resolve();

                }
            })
    })
}

function getuser(email,password){

    console.log("i am here in query")

    return new Promise(function(resolve,reject){

        connection.query(`SELECT * FROM users where email ="${email}" and password ="${password}"`,
        function(err,rows,cols){

            
            if(err){
                console.log("hey here")
                reject(err);
            }else{
                console.log("hey there")
                 
                resolve(rows); 
            }
           
        })
    })
}

function getUserIdByEmail(email){

    console.log("i am here in almost last query")

    return new Promise(function(resolve,reject){

        connection.query(`SELECT user_id FROM users where email ="${email}" `,
        function(err,rows,cols){

            
            if(err){
                console.log("hey here")
                reject(err);
            }else{
                console.log("hey there")
                 
                resolve(rows); 
            }
           
        })
    })
}




exports=module.exports={
   insertuser,
   getuser,
   getUserIdByEmail
}


