import { useState } from "react";
import UserCard from "./UserCard";
import Workspace from "./Workspace";

export default function SideBar() {
  const generalList = [
    { icon: "dashboard.svg", tl: "Dashboard", label: "" },
    {
      icon: "setup-in-channels.svg",
      tl: "Setup In Channels",
      label: "Essential",
    },
    {
      icon: "ai-data-training.svg",
      tl: "AI Data Training",
      label: "Essential",
      subitems: ["Data Import", "FAQ Management"],
    },
    { icon: "bot-history.svg", tl: "Bot History", label: "" },
    { icon: "bot-settings.svg", tl: "Bot Settings", label: "" },
  ];
  const [curItem, setCurItem] = useState("AI Data Training");
  const [curSubItem, setCurSubItem] = useState("FAQ Management");

  const generalListHTML = generalList.map(({ icon, tl, label, subitems }) => (
    <li key={tl} className="">
      <section
        className={`general-item flex justify-between items-center ${
          curItem == tl ? "active" : ""
        }`}
      >
        <section className="flex items-center">
          <img src={icon} />
          <span className="general-item-text">{tl}</span>
        </section>
        {label && <span className="general-item-label font-12">{label}</span>}
      </section>
      {subitems && (
        <ul className="general-subitems">
          {subitems.map((item) => (
            <li
              className={`font-16 general-subitem flex items-center ${
                item === curSubItem ? "active" : ""
              }`}
              key={item}
            >
              <span
                className={`general-subitem-icon ${
                  item === curSubItem ? "active" : ""
                }`}
              ></span>
              <span className="general-subitem-text">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));
  return (
    <aside>
      <Workspace />
      <section className="general">
        <p className="font-12 general-title">General</p>
        <ul className="general-list">{generalListHTML}</ul>
      </section>
      <UserCard />
    </aside>
  );
}
