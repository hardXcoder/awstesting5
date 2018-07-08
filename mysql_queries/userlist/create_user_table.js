const mysql=require('mysql2');

const connection =mysql.createConnection(
    {
        host:'localhost',
        database:'bookshop',
        user:'root',
        password:'9891266117',
        insecureAuth:true
    }
)

connection.query(
    `CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(1000) UNIQUE NOT NULL,
        college VARCHAR(500) NOT NULL,
        address VARCHAR(10000) NOT NULL,
        phoneNumber VARCHAR(1000) NOT NULL,
        isSeller BOOLEAN NOT NULL
    ) `,
    function(err,results){
        if(err){
            console.log(err);
            
        }else{
            console.log("successfully created");
        }
        connection.close();
    }

)