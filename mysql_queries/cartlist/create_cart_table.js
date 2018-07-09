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
    `CREATE TABLE IF NOT EXISTS bookcart (

        order_id INTEGER AUTO_INCREMENT PRIMARY KEY,
        buyer_email varchar(1000),
        book_id integer,
        seller_id integer,
        book_name varchar(50),
        author_name varchar(50),
        img varchar(10000),
        price integer,
        quantity integer,
        seller_email varchar(500)
        
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

//2nd this 2nd
// CREATE TABLE IF NOT EXISTS bookcart (
        
//     order_id INTEGER AUTO_INCREMENT PRIMARY KEY,
//     buyer_email varchar(1000),
//     book_id integer,
//     seller_id integer,
//     book_name varchar(50),
//     author_name varchar(50),
//     img varchar(10000),
//     price integer,
//     quantity integer,
//     seller_email varchar(500)
    
// )