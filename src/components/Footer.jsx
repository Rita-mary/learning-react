const name = "Okeke"
const date = new Date()
const year = date.getFullYear

const Footer = () => {
  return (
    <div>
      <h1>&copy; {year}</h1>
      <span>Hello, welcome {name}</span>
    </div>
  )
}

export default Footer
