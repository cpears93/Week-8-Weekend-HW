use movies_hub;
db.dropDatabase();

db.movies.insertMany([
  {
    title: "Blade Runner",
    genre: "Sci-Fi",
    rating: 15,
    release_date: 1982
    },
  {
    title: "Alien",
    genre: "Sci-Fi",
    rating: 15,
    release_date: 1979
    },
  {
    title: "Carlito's Way",
    genre: "Gangster",
    rating: 18,
    release_date: 1993
    },
  {
    title: "Akira",
    genre: "Cyberpunk",
    rating: 15,
    release_date: 1993
    },
  {
    title: "Diego Maradona",
    genre: "Documentary",
    rating: 12,
    release_date: 2019
    },
  {
    title: "Escape From New York",
    genre: "Action",
    rating: 15,
    release_date: 1981
    },
  {
    title: "Scarface",
    genre: "Gangster",
    rating: 18,
    release_date: 1983
    },
  {
    title: "2001: A Space Odessey",
    genre: "Sci-Fi",
    rating: 15,
    release_date: 1993
    },
]);
