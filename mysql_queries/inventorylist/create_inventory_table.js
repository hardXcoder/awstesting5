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

connection.query(
    ` CREATE TABLE IF NOT EXISTS booksinventory (
        book_id INTEGER AUTO_INCREMENT PRIMARY KEY,
        seller_id INTEGER NOT NULL,
        book_name VARCHAR(50) NOT NULL,
        author_name VARCHAR(100) NOT NULL,
        img VARCHAR(10000) NOT NULL,
        price INTEGER NOT NULL,
        condition enum('new','almost new','slightly damaged','worn'),
        category varchar(50),
        seller_email varchar(500),
        foreign key (seller_id) references users(user_id)) `,
    function(err,results){
        if(err){
            console.log(err);
            
        }else{
            console.log("successfully created");
        }
        connection.close();
    }

)

// first query this is 1
// CREATE TABLE IF NOT EXISTS booksinventory (
//     book_id INTEGER AUTO_INCREMENT PRIMARY KEY,
//     seller_id INTEGER NOT NULL,
//     book_name VARCHAR(50) NOT NULL,
//     author_name VARCHAR(100) NOT NULL,
//     img VARCHAR(10000) NOT NULL,
//     price INTEGER NOT NULL,
//     condition enum("new","almost new","slightly damaged","worn"),
//     category varchar(50),
//     seller_email varchar(500),
//     foreign key (seller_id) references users(user_id))