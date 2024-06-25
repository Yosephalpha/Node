import express from "express"
import { getAllMovies, addMovie, getMovieById, updateMovieById, deleteMovieById } from "../helper.js"

const router = express.Router()



//get all movies
router.get('/', async function (req, res) {
    const result = await getAllMovies()//put document inside array
    res.send(result)
})


//add new movies
router.post('/', async function (req, res) {
    const newMovies = req.body
    console.log(newMovies)
    const result = await addMovie(newMovies)
    res.send(result)
})

//get particular movie

router.get('/:movieid', async function (req, res) {
    const { movieid } = req.params
    console.log(req.params, movieid)
    const result = await getMovieById(movieid)
    result ? res.send(result) : res.status(404).send({ message: "No movie found" })
})

//update movie

router.put('/:movieid', async function (req, res) {
    const { movieid } = req.params
    console.log(req.params, movieid)
    const updatedMovies = req.body
    const result = await updateMovieById(movieid, updatedMovies)
    res.send(result)
})

//delete movie
router.delete('/:movieid', async function (req, res) {
    const { movieid } = req.params
    console.log(req.params, movieid)
    const result = await deleteMovieById(movieid)
    if (result.deletedCount === 0) {
        res.status(404).send({ message: "No movies found" })
    }
    else {
        res.send({ message: "movie deleted" })
    }
})


export const moviesRouter = router