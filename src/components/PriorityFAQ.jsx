import FAQSearchInput from "./FAQSearchInput";

function FAQList() {
  return (
    <ul className="faq-list">
      {/* for testing */}
      {[1, 2, 3, 4, 5].map((idx) => (
        <li key={idx} className="faq-item flex items-center justify-between">
          <div className="faq-number">{idx}</div>
          <div className="fw-400">
            <p className="font-14">What's your function</p>
            <p className="font-12 faq-body">
              Save time by using Informance AI to provide instantand reliable
              responses, so you can focus on growingyour community. Integrates
              to meet your users on both Discord and Telegram.
            </p>
          </div>
          <img src="/faq-edit.svg" />
          <img src="/faq-delete.svg" />
        </li>
      ))}
    </ul>
  );
}

export default function PriorityFAQ() {
  return (
    <>
      <section className="flex justify-between items-center faq-list-headbar">
        <h4 className="font-16 fw-600">All FAQ</h4>
        <section className="flex items-center gap-x-20">
          <FAQSearchInput />
          <img src="/full-screen.svg" />
        </section>
      </section>
      <FAQList />
    </>
  );
}
