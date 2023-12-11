export default function Header() {
  return (
    <header className="flex justify-between">
      <img src="/logo.svg" alt="Informance AI Logo" />
      <section className="language flex items-center">
        <img className="language-icon" src="/language.svg" alt="Language" />
        <span>English</span>
      </section>
    </header>
  );
}
