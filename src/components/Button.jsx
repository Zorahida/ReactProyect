
const Button = ({ Login }) => {
  console.log(Login)
  const handleClick = () => {
      console.log("Login")
  }
  return (
      <div>
          <button onClick={handleClick}>{}</button>
      </div>
  )
}
export default Button;