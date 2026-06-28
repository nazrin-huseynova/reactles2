import React, { Component } from "react";
import "../App.css";

export class Main extends Component {
  movies = [
    {
      id: 1,
      name: "Inception",
      genre: "Sci-Fi, Thriller",
      rejissor: "Christopher Nolan",
      imdb: "8.8",
      finance: "836M $",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology...",
      img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&auto=format&fit=crop",
      cinema: { name: "Park Cinema Flame Towers", address: "Baku, Azerbaijan", rating: "4.7" },
      tags: ["IMAX", "Subtitles", "2D"]
    },
    {
      id: 2,
      name: "Interstellar",
      genre: "Sci-Fi, Adventure",
      rejissor: "Christopher Nolan",
      imdb: "8.7",
      finance: "731M $",
      description: "When Earth becomes uninhabitable, a team of explorers travels through a wormhole in space...",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1072&auto=format&fit=crop",
      cinema: { name: "Cinema Plus 28 Mall", address: "Azadliq Ave, Baku", rating: "4.5" },
      tags: ["Sci-Fi Special", "ATMOS", "3D"]
    },
    {
      id: 3,
      name: "The Dark Knight",
      genre: "Action, Crime",
      rejissor: "Christopher Nolan",
      imdb: "9.0",
      finance: "1.006B $",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham...",
      img: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1024&auto=format&fit=crop",
      cinema: { name: "Nizami Cinema Center", address: "Nizami St, Baku", rating: "4.8" },
      tags: ["Action Night", "VIP", "2D"]
    }
  ];

  render() {
    return (
      <div style={{ padding: "20px", backgroundColor: "#000000", minHeight: "100vh" }}>
        <main>
          {this.movies.map((movie) => (
            <div key={movie.id} className="main-container">
              <section className="holder">
                
                <div
                  className="movie-poster-card"
                  style={{ backgroundImage: `url(${movie.img})` }}
                >
                  <div className="circle-buttons-group">
                    <div className="circle-btn">
                      IMDB
                      <span>{movie.imdb}</span>
                    </div>
                    <div className="circle-btn">
                      BoxOffice
                      <span style={{ backgroundColor: "#2ecc71" }}>
                        {movie.finance}
                      </span>
                    </div>
                    <div className="circle-btn">
                      Age
                      <span>16+</span>
                    </div>
                  </div>
                </div>

                <div className="panel">
                  <div className="movie-details">
                    <h2 style={{ color: "#3498db", margin: "0 0 10px 0" }}>
                      {movie.name}
                    </h2>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Director:</strong> {movie.rejissor}</p>
                    <p><strong>Description:</strong> {movie.description}</p>
                  </div>
                </div>

              </section>
            </div>
          ))}
        </main>
      </div>
    );
  }
}

export default Main;