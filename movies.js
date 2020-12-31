var express = require('express');
var router = express.Router();
const Movie = require('./models/Post')

//To navigate to the form
router.get('/',(req,res)=>{
   res.render('form.ejs')
})

//Get all movies in our database
router.get('/allMovies',async (req,res)=>{
   try{
      const movies = await Movie.find()
      res.json(movies)
   }catch(e){
      res.json({message : err})
   }
})


//Find a movie by id
router.get('/:id',async (req,res)=>{
   try{
      const movie = await Movie.findById(req.params.id)
      res.json(movie)
   }catch(e){
      res.json({message : e})
   }
})


// Delelte a specific movie
router.delete('/:id',async (req,res)=>{
   try{
      const deletedMovie = await Movie.remove({_id :req.params.id})
      res.json(deletedMovie)
   }catch(e){
      res.json({message : e})
   }
})

//Update a movie
router.patch('/:id',async (req,res)=>{
   try{
      const updatedMovie = await Movie.updateOne( 
         {_id :req.params.id } , 
         { $set : {genre : req.body.genre} } 
         )
         res.json(updatedMovie)

   }catch(e){
      res.json({message : e})
   }
})


// Save a movie to our database
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