import question from '/icons/question.png';
export default function Faq() {
  return (
    <section className="strike-bg flex items-center justify-center gap-10 flex-col-reverse sm:flex-row">
      <div className="max-w-[600px] space-y-7">
        <h2 className="text-[42px] sm:text-[55px] font-medium text-center">
          Got Questions ?
        </h2>
        <p className="text-xl sm:text-2xl">
          Welcome to our FAQ page – your go-to resource for quick answers about
          our products like Earbuds, Smartwatches, Wireless Speakers and more.
        </p>
      </div>
      <figure>
        <img
          src={question}
          alt="question mark icon"
          className="h-24 sm:h-[unset]"
        />
      </figure>
    </section>
  );
}
