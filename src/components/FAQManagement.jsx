import { useState } from "react";
import PriorityFAQ from "./PriorityFAQ";
import ConflictingFAQ from "./ConflictingFAQ";
import UnansweredFAQ from "./UnansweredFAQ";
import AddFAQForm from "./AddFAQForm";
import Button from "./Button";

const FAQTabs = [
  { tl: "Priority FAQ(30)", tab: "priority" },
  { tl: "Conflicting(30)", tab: "conflicting" },
  { tl: "Unanswered(30)", tab: "unanswered" },
];

export default function FAQManagement() {
  const [curTab, setCurTab] = useState("priority");
  const [showFAQForm, setShowFAQForm] = useState(false);

  return (
    <section className="faq-management">
      {showFAQForm && (
        <AddFAQForm showFAQForm={showFAQForm} setShowFAQForm={setShowFAQForm} />
      )}

      <h1 className="font-30 fw-700 faq-management-title">FAQ Management</h1>
      <p className="font-14 fw-400 faq-management-desc">
        Training your AI Assistant with customised data. Supports: URL, PDF,
        Excel, Pptx, MP3, MP4/MOV
      </p>
      <section className="flex justify-between items-center">
        <section className="flex justify-between items-center faq-menus">
          {FAQTabs.map(({ tl, tab }) => (
            <span
              key={tab}
              onClick={() => setCurTab(tab)}
              className={`faq-menu font-16 ${curTab === tab ? "active" : ""}`}
            >
              {tl}
            </span>
          ))}
        </section>
        <section className="flex items-center">
          <Button txt={"Import Data"} />
          <Button
            txt={"Add FAQ"}
            tp="secondary"
            leftIcon={"/add-faq.svg"}
            onClick={() => setShowFAQForm(true)}
          />
        </section>
      </section>
      <section className="faq-list-container">
        {curTab === "priority" && <PriorityFAQ />}
        {curTab === "conflicting" && <ConflictingFAQ />}
        {curTab === "unanswered" && <UnansweredFAQ />}
      </section>
    </section>
  );
}
