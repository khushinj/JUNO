import '../App.css';

type FormProps = {
  onClose: () => void;
};

function Form({ onClose }: FormProps) {
  return (
    // Overlay (doesn't affect page layout)
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      {/* Modal content */}
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="form-title text-2xl font-semibold">Contact Us</h2>
          <button
            aria-label="Close"
            className="rounded-full p-2 hover:bg-gray-100"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form className="form-content flex flex-col gap-4">
          <label className="form-label" htmlFor="name">Name:</label>
          <input
            className="form-input border border-black w-full rounded-md px-3 py-2"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />

          <label className="form-label" htmlFor="email">Email:</label>
          <input
            className="form-input border border-black w-full rounded-md px-3 py-2"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />

          <label className="form-label" htmlFor="message">Message:</label>
          <textarea
            className="form-textarea border border-black w-full rounded-md px-3 py-2"
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
          ></textarea>

          <button className="form-button bg-black text-white rounded-md px-4 py-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;