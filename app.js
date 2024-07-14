const sqlite3 = require('sqlite3').verbose();
let sql;



//connect db 
const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err)=>{
    if(err) return console.error(err.message);
});


//create table
// sql = 'CREATE TABLE users(id INTEGER PRIMARY KEY, first_name, last_name, username, password, email)';
// db.run(sql);

//drop table
// db.run('DROP TABLE users');

//insert data
// sql = 'INSERT INTO users(first_name, last_name, username, password, email) VALUES (?,?,?,?,?)';
// db.run(sql,["dua", "fathul", "dimasfath94", "dimas", "dimas@gmail.com"],(err)=>
// {
//     if(err) return console.error(err.message);
// });


//update data
// sql = 'UPDATE users SET first_name = ? WHERE id = ?';
// db.run(sql, ['ganti', 2], (err) => {
//     if(err) return console.error(err.message);
// });

//delete data
// sql = 'DELETE FROM users WHERE id = ?';
// db.run(sql, [2], (err) => {
//     if(err) return console.error(err.message);
// });

//select data
// sql = 'SELECT * FROM users';
// db.all(sql, [], (err, rows) => {
//     if(err) return console.error(err.message);
//     rows.forEach(row=>{
//         console.log(row);
//     });
// });

document.getElementById("p1").innerHTML = "New text!";
sql = 'SELECT * FROM users';
db.all(sql, [], (err, rows) => {
    if(err) return console.error(err.message);
    rows.forEach(row=>{
        console.log(row);
        
    });
});

// function getData(){
//     sql = 'SELECT * FROM users';
//     db.all(sql, [], (err, rows) => {
//         if(err) return console.error(err.message);
//         rows.forEach(row=>{
//             console.log(row);
//             //alert(row.first_name);
//             // document.getElementById("the-span").addEventListener("click", function() {
//             //     var json = JSON.stringify({
//             //       id: parseInt(row.id),
//             //       first_name: row.first_name,
//             //       points: parseInt(this.dataset.points),
//             //     });
//             //   });
//             return row;
//         });
//     });




