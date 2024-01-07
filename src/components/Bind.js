import React, { useEffect } from "react";

const Bind = () => {
  let initial = true;

  useEffect(() => {
    if (initial) {
      class MyReact {
        constructor() {
          this.library = "MyReact";
          this.port = "https://localhost:3000";

          document
            .querySelector("button")
              .addEventListener("click", this.handleClick.bind(this));
        }

        handleClick() {
          console.log("Button");
          console.log(this);
        }
      }

      const app = new MyReact();

      initial = false;
      }
      
      console.log(document.querySelector(".temp > p"));
  }, []);

  return (
    <div>
          <button>Button clicked</button>
          <div className="temp">
            <p>Product Name</p>
          </div>
    </div>
  );
};

export default Bind;
