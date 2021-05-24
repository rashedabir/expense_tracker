import React from "react";

function Error({ error, setError }) {
  return (
    <div className="error-box">
      {error && (
        <div className="error mt-2">
          <p> {error} </p>
          <i onClick={() => setError("")} className="fas fa-times"></i>
        </div>
      )}
    </div>
  );
}

export default Error;
