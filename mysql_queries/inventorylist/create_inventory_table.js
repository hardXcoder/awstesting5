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
    ` CREATE TABLE IF NOT EXISTS booksinventory (
        book_id INTEGER AUTO_INCREMENT PRIMARY KEY,
        seller_id INTEGER NOT NULL,
        book_name VARCHAR(50) NOT NULL,
        author_name VARCHAR(1000) NOT NULL,
        img VARCHAR(10000) NOT NULL,
        price INTEGER NOT NULL,
        condition enum('new','almost new','slightly damaged','worn'),
        foreign key (seller_id) references users(user_id)
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