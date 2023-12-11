import Button from "./Button";
import FAQSearchInput from "./FAQSearchInput";

const ConflictingQuestions = [
  {
    id: "1",
    selected: false,
    old: {
      date: "6.23",
      checked: false,
      source: "www.bounce.finance",
      body: "Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram.",
    },
    newer: {
      checked: false,
      date: "8.15",
      source: "Bounce Docs.PDF",
      body: "Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram.",
    },
  },
  {
    id: "2",
    selected: true,
    old: {
      date: "6.23",
      checked: false,
      source: "www.bounce.finance",
      body: "Save time by using Informance AI to 只上了币安交易所, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram.",
    },
    newer: {
      checked: true,
      date: "8.15",
      source: "Bounce Docs.PDF",
      body: "Save time by using Informance AI to provide instantand reliable responses, 上了币安交易所和okex. Integrates to meet your users on both Discord and Telegram.",
    },
  },
  {
    id: "3",
    selected: false,
    old: {
      date: "6.23",
      checked: false,
      source: "Priority FAQ",
      body: "Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram.",
    },
    newer: {
      checked: false,
      date: "8.15",
      source: "Priority FAQ",
      body: "Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram.",
    },
  },
];

function FAQList() {
  return (
    <ul className="faq-list">
      {/* for testing */}
      {ConflictingQuestions.map(({ id, old, newer, selected }, idx) => (
        <li key={id} className="faq-item flex justify-between">
          <div className="faq-number">{idx + 1}</div>
          <div className="fw-400">
            <div className="flex items-center faq-old">
              <span
                className={old.checked ? "faq-check" : "faq-uncheck"}
              ></span>
              <div>
                <p className="font-14">
                  <span>{old.date}</span>
                  <span>{old.source}</span>
                </p>
                <p className="font-12 faq-body">{old.body}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span
                className={newer.checked ? "faq-check" : "faq-uncheck"}
              ></span>
              <div>
                <p className="font-14 flex items-center">
                  <span>{newer.date}</span>
                  <span className="faq-source">{newer.source}</span>
                  <span className="new-label font-10 fw-600">New</span>
                </p>
                <p className="font-12 faq-body">{newer.body}</p>
              </div>
            </div>
          </div>
          <img src={selected ? "/faq-check.svg" : "/faq-uncheck.svg"} />
        </li>
      ))}
    </ul>
  );
}

export default function ConflictingFAQ() {
  return (
    <>
      <section className="flex justify-between items-center faq-list-headbar">
        <h4 className="font-16 fw-600">Conflicting Questions</h4>
        <section className="flex items-center gap-x-20">
          <FAQSearchInput />
          <Button
            txt={"New To Old"}
            tp={"dark"}
            rightIcon={"/chevron-down.svg"}
          />
        </section>
      </section>
      <FAQList />
    </>
  );
}
