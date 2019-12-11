import React from "react";
import PropTypes from "prop-types";

function TodoCard({ todo }) {
  const { title, completed } = todo;
  return (
    <div className="card">
      <div className="card__header">
        {completed ? (
          <h4 style={{ color: "#bbbb" }}>{title}</h4>
        ) : (
          <h4>{title}</h4>
        )}
      </div>
      <small>
        {completed ? (
          <span role="img" aria-label="complete" style={{ color: "#000411" }}>
            &#x2705;
          </span>
        ) : null}
      </small>
    </div>
  );
}

TodoCard.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoCard;
