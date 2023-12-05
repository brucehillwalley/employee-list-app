import React from "react";

const List = ({ data }) => {
  return (
    <>
      {data.map((person) => (
        <article className="person">
          <img src={person.image} alt="name" />
          <div>
            <h4>{person.name}</h4>
            <p>{person.email}</p>
            <p>{person.age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
