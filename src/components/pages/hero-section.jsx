import headset from '/icons/headset.png';
export default function HeroSection() {
  return (
    <div className="grid-cols-2 grid sm:grid-cols-3">
      <figure>
        <img src={headset} alt="" />
      </figure>
      <div></div>
    </div>
  );
}
