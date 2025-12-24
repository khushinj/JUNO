import '../App.css';

function Form() {
  return (
    <div className="form-container">
      <h2 className="form-title">Contact Us</h2>
      <form className="form-content">
        <label className="form-label" htmlFor="name">Name:</label>
        <input className="form-input border border-black" type="text" id="name" name="name" />

        <label className="form-label" htmlFor="email">Email:</label>
        <input className="form-input" type="email" id="email" name="email" />

        <label className="form-label" htmlFor="message">Message:</label>
        <textarea className="form-textarea" id="message" name="message"></textarea>

        <button className="form-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;