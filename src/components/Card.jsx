
const style = {
    border:'solid black 2px',
    padding:'10px',
    margin:'20px',
    borderRadius:'5px',
    backgroundColor:'lightGreen'
}

const Card = (props) => {
    return (
        <div style={style}>
          <div>Name : {props.name}</div>
          <div>Age : {props.age} </div>
          {props.children}
        </div>
    )
};

export default Card;