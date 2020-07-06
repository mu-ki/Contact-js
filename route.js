var express = require("express");
const pg = require("pg");
var router = express.Router();
const config = {
  host: "192.168.0.131",
  user: "postgres",
  password: "1111",
  database: "contact",
  port: 5432,
  ssl: false
};
const postsql = new pg.Client(config);
postsql.connect(err => {
  if (err) throw err;
  else console.log("Database Connected!!");
});
// read all contact main
router.route("/main").get(function(req, res,) {
  const query = "SELECT * FROM public.users;";
  postsql.query(query)
        .then((items) => {
            console.log(data.rows);
              res.send(data.rows)
              .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.send("No Data")
      }
            return true;
      })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution, exiting now');
        });
});

// read all contact fav
router.route("/fav").get(function(req, res,) {
    const query = "SELECT * FROM users where fav ='1';";
    postsql.query(query)
        .then((data) => {
            console.log(data.rows);
            res.send(data.rows)

        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution, exiting now');
        });
});
  
// ===========================insert=======================
router.route("/add").post(function(req, res, next) {
  const { name, mail, number,fav } = req.body;
  const query = `INSERT INTO public.users(name, number, mail, fav)VALUES ('${name}','${number}','${mail}','${fav}');`;
  postsql.query(query)
  .then((data) => {
  })
.catch(err => console.log(err))
.then(() => {
console.log('Finished execution, exiting now');
});
});
// ===================Delete==================
// app.get("/delete", (req, res) => {
//   const id= req.query.id;
//   console.log(id) 
//   const query =`DELETE FROM users WHERE sno = '${id}';`;
//   postsql.query(query)
//   .then((data) => {
//       console.log(data.rows);
//       res.send(data.rows)
  
//   })
//   .catch(err => console.log(err))
//   .then(() => {
//       console.log('Finished execution, exiting now');
//   });
//   });
  
module.exports = router;
