export default function AddFAQForm({ setShowFAQForm }) {
  const handleFAQSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="add-faq-form-container flex justify-center items-center">
      <form className="add-faq-form" onSubmit={handleFAQSubmit}>
        <div className="flex justify-between items-center">
          <p className="font-30 fw-700">Add FAQ</p>
          <img
            className="cursor-pointer"
            onClick={() => setShowFAQForm(false)}
            src="/faq-form-close.svg"
          />
        </div>
        <div className="faq-form-formulation">
          <p className="font-12 fw-700">Formulation</p>
          <div className="formulation-input-container">
            <input className="formulation-input" />
            <a>-</a>
          </div>
          <div className="faq-formulation-add flex">
            <img src="/faq-plus.svg" className="faq-plus" />
          </div>
          <p className="font-12 fw-700">Answer (markham)</p>
          <input className="font-12 fw-400 answer-input" placeholder="Enter" />
          <div className="faq-add-button-container">
            <div className="button secondary font-14 fw-700">SAVE</div>
          </div>
        </div>
      </form>
    </section>
  );
}
