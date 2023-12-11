import { useState } from "react";

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
      <section className="btc-coin-community flex items-center justify-between">
        <img src="/btc-coin.svg" alt="BTC Coin Community" />
        <section>
          <p className="font-16 btc-coin-community-title">BTC Coin Community</p>
          <p className="font-14 color-secondary">12,500 Members</p>
        </section>
        <img src="/chevron-down.svg" />
      </section>
      <section className="general">
        <p className="font-12 general-title">General</p>
        <ul className="general-list">{generalListHTML}</ul>
      </section>
      <section className="user-card flex justify-between items-center">
        <section className="flex items-center">
          <img className="user-card-avt" src="/avatar.svg" alt="User Avatar" />
          <div className="">
            <p className="user-card-name font-16 fw-600">Ryan Lee</p>
            <p className="font-12 color-secondary">Premium</p>
          </div>
        </section>
        <img src="/dot.svg" />
      </section>
    </aside>
  );
}
