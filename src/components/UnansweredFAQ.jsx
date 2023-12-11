import Button from "./Button";
import FAQSearchInput from "./FAQSearchInput";

const UnansweredQuestions = [
  {
    date: "12:50 06/06/2023",
    question: "What’s your function",
    tag: "🍺 | general",
  },
  {
    date: "12:50 06/06/2023",
    question: "When will new taks be added to Zealy Treasure Hunt?",
    tag: "🆘 | get-help",
  },
  {
    date: "12:50 06/06/2023",
    question: "What’s your function",
    tag: "🍺 | general",
  },
  {
    date: "12:50 06/06/2023",
    question: "What’s your function",
    tag: "🆘 | get-help",
  },
  {
    date: "12:50 06/06/2023",
    question: "What’s your function",
    tag: "🍺 | general",
  },
  {
    date: "12:50 06/06/2023",
    question: "What’s your function",
    tag: "🍺 | general",
  },
];

function FAQList() {
  return (
    <ul className="faq-list">
      {/* for testing */}
      {UnansweredQuestions.map(({ question, tag, date }, idx) => (
        <li key={idx} className="faq-item flex items-center justify-between">
          <div className="flex items-center">
            <div className="faq-number">{idx + 1}</div>
            <div className="fw-400">
              <p className="font-14">{date}</p>
              <p className="font-12 faq-body">{question}</p>
            </div>
          </div>
          <div className="flex items-center font-14 fw-400">
            <div>{tag}</div>
            <a className="discord-button flex items-center">
              <img className="discord-icon" src="/discord.svg" />
              <span className="">Open</span>
            </a>
            <a className="mark-resolved-text">Mark resolved</a>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function UnansweredFAQ() {
  return (
    <>
      <section className="flex justify-between items-center faq-list-headbar">
        <h4 className="font-16 fw-600">Unanswered Questions</h4>
        <section className="flex items-center gap-x-20">
          <FAQSearchInput />
          <Button
            tp="dark"
            txt={"Channel Filter"}
            rightIcon={"/chevron-down.svg"}
          />
          <Button
            tp="dark"
            txt={"New To Old"}
            rightIcon={"/chevron-down.svg"}
          />
        </section>
      </section>
      <FAQList />
    </>
  );
}
