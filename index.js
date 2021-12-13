function Box(props) {
  // Write your code here.
  const { text, boxContainer } = props;
  return <div className={boxContainer}>{text}</div>;
}

const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading-style">Boxes</h1>
    <div className="box-container">
      <Box text="small" boxContainer="small-box-container" />
      <Box text="medium" boxContainer="medium-box-container" />
      <Box text="large" boxContainer="large-box-container" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
