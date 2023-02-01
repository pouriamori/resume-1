

const Corner = (props) => {
  return (
    <>
      <div className="corner-wrapper" style={{ backgroundColor: props.color }}>
        <p className="h4">
          {props.text}
        </p>
      </div>
    </>
  )
}

export default Corner