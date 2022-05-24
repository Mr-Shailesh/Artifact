import React, { useEffect, useState } from "react";

let progressInterval = null;

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    progressInterval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 100);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, [progress]);

  return (
    <div className="m-5">
      <div className="progress" style={{ height: 30 }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}

export default Loader;
