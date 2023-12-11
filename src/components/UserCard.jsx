export default function UserCard() {
  return (
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
  );
}
