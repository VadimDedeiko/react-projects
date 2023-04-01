const Card = () => {
  return (
    <div className="card">
      <h1>Bogdan</h1>
      <h2>Software Engineer</h2>
      <button>Like</button>
    </div>
  )
}
import React from "react";

const Card = () => {
  return (
    <React.Fragment>
      <h1>Bogdan</h1>
      <h3>I am recording React course</h3>
      <button>Like!</button>
    </React.Fragment>
  )
}

export default Card;
