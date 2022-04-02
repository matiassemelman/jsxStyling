// CHALLENGE STYLE GUIDE

const styleGuide = {
  orange: "hsl(25, 97%, 53%)",
  lightGrey: "hsl(217, 12%, 70%)",
  mediumGrey: "hsl(216, 12%, 54%)",
  lessDarkBlue: "hsl(213, 19%, 23%)",
  darkBlue : "hsl(213, 19%, 18%)",
  fontSize: "15px",
  weights: [400, 700],
  borderRadius: "50%"

}

// CONTAINER STYLES

const containerStyles = {
  backgroundColor: styleGuide.darkBlue, 
  maxWidth: "25%",
  margin: "15vh auto",
  padding: "2rem",
color: styleGuide.lightGrey,
borderRadius: "25px"
}

// icon Styles

const iconStyles = {
  padding: "1rem",
  backgroundColor: styleGuide.lessDarkBlue,
  borderRadius: styleGuide.borderRadius
}

// Rating container

const rating__container = {
  display: "flex",
  justifyContent: "space-between"
}
const buttonStyles = {
  borderRadius: "50%", 
  border: "none",
  fontSize: "16px",
  marginBlock: "2rem",
  padding: ".8em 1.2em",
  backgroundColor: styleGuide.lessDarkBlue,
  color: styleGuide.mediumGrey

}

const submit = {
  marginLeft: "1vw",
  width: "95%",
  padding: ".9rem",
  backgroundColor: styleGuide.orange,
  border: "none",
  borderRadius: "25px",
  fontSize: "15px",
  color: "white"
}

function App() {
  
  return (
    <div className="App">
      <div className="container" 
      style={containerStyles
        }>
        <img
          src="../interactive-rating-component-main/images/icon-star.svg"
          alt="StarIcon" style={iconStyles
            
          }
        />
        <h3 style={{color: "white"}}>How did we do?</h3>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div style={rating__container}>
          <button style={buttonStyles}>1</button>
          <button style={buttonStyles}>2</button>
          <button style={buttonStyles}>3</button>
          <button style={buttonStyles}>4</button>
          <button style={buttonStyles}>5</button>
        </div>
<div>
<button style={submit}>SUBMIT</button>
</div>
       

        {/* 
You selected Add Rating here out of 5

  Thank you!

  We appreciate you taking the time to give a rating. If you ever need more support, 
  don't hesitate to get in touch! */}
      </div>
    </div>
  );
}

export default App;
