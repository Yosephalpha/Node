import { client } from "./app.js";

export function getAllMovies() {
    return client.db("node_may").collection("movies").find().toArray();
}
export function addMovie(newMovies) {
    return client.db("node_may").collection("movies").insertOne(newMovies);
}
export function getMovieById(movieid) {
    return client.db("node_may").collection("movies").findOne({ id: movieid });
}
export function updateMovieById(movieid, updatedMovies) {
    return client.db("node_may").collection("movies").updateOne({ id: movieid }, { $set: updatedMovies });
}
export function deleteMovieById(movieid) {
    return client.db("node_may").collection("movies").deleteOne({ id: movieid });
}
