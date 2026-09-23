import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <form action="">
        <h1>Contat Us</h1>
        <input type="text" placeholder="Enter your name" id="" />
        <input type="email" placeholder="Enter your email" id="" />
        <textarea placeholder="Enter your message" id=""></textarea>
        <button>Send</button>
      </form>
      <Footer></Footer>
    </div>
  )
}

export default Contact
