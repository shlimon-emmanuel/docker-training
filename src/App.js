import "./App.css";
import Confetti from "./Confetti";

const shareMessage = "I modified Malik's Docker container!";
const shareLink = "https://docker.com/";

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>Version modifiée du conteneur de Malik!</h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
          Modification réussie du conteneur de kilam13
        </p>
        <div>
          <a
            target="_blank"
            href={
              "https://twitter.com/intent/tweet?text=" +
              shareMessage +
              "&url=" +
              shareLink
            }
            class="fa-brands fa-x-twitter"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            target="_blank"
            href={
              "https://www.linkedin.com/sharing/share-offsite/?url=" + shareLink
            }
            class="fa-brands fa-linkedin"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            target="_blank"
            href={
              "https://reddit.com/submit?title=" +
              shareMessage +
              "&url=" +
              shareLink
            }
            class="fa-brands fa-reddit"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;
