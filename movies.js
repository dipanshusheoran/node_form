var express = require('express');
var router = express.Router();
const Movie = require('./models/Post')

router.get('/',(req,res)=>{
   res.render('form.ejs')
})

router.get('/redirect',(req,res)=>{
   res.send('Check the atlas to see posted data.')
})

router.post('/',(req,res)=>{
   const movie = new Movie({
      name : req.body.name,
      genre : req.body.genre
   })
   movie.save()
      .then(data=>res.json(data))
      .catch(e=>res.error(e))
})

module.exports = router;