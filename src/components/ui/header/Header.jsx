import logo from '/icons/logo.png';
import phone from '/icons/phone.png';
import power from '/icons/power.png';
import cart from '/icons/cart.png';
export default function Header() {
  return (
    <>
      <header className="bg-cyan-200">
        <img src={logo} alt="" />
        <ul className="flex">
          <li>
            <img src={phone} alt="" />
            Phone accessories{' '}
          </li>
          <li>
            <img src={power} alt="" />
            Power
          </li>
          <li>
            <img src={cart} alt="" />
            Add to cart
          </li>
        </ul>
      </header>
    </>
  );
}
