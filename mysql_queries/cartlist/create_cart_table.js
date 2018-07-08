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
    `CREATE TABLE IF NOT EXISTS bookscart (
        order_id INTEGER AUTO_INCREMENT PRIMARY KEY,
        user  INTEGER ,
        book INTEGER,
        foreign key(user) references users(user_id),
        foreign key(book) references booksinventory(book_id)
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