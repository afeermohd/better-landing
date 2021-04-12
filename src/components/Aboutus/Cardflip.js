import React, { useState } from "react";

const AboutUs = () => {
  const [flip, setFlip] = useState(false);
  const flipped = () => setFlip(false);
  return (
    <div>
      <div
        onMouseEnter={flipped}
        onMouseLeave={flipped}
        className={"card-container" + (flip ? " flipped" : "")}
      >
        <Front />
        <Back />
      </div>
    </div>
  );
};

class Front extends React.Component {
  render() {
    return (
      <div className="front">
        <ImageArea />
        <MainArea />
      </div>
    );
  }
}

class Back extends React.Component {
  render() {
    return (
      <div className="back">
        <p>
          Some sample text to demonstrate how these cards will work, including
          how they truncate long sentences. This section displays the
          full-length blog post.
        </p>
        <p>
          Bloggity bloggity bloggity blog. This would be the full text of the
          abbreviated blog post.
        </p>
      </div>
    );
  }
}

class ImageArea extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img
          className="card-image"
          src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"
        ></img>
        <h1 className="title">An example blog post</h1>
      </div>
    );
  }
}

class MainArea extends React.Component {
  render() {
    return (
      <div className="main-area">
        <div className="blog-post">
          <p className="date">{new Date().toLocaleDateString()}</p>
          <p className="blog-content">
            Some sample text to demonstrate how these cards will work, including
            how they truncate long sentences.
          </p>
          <p className="read-more">Hover to read more...</p>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
