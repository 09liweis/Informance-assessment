import "./App.css";
import FAQManagement from "./components/FAQManagement";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <main>
      <Header />
      <section className="flex">
        <SideBar />
        <FAQManagement />
      </section>
    </main>
  );
}
