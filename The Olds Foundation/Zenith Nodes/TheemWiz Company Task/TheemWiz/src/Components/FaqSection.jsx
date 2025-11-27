import FAQItem from "../Components/FaqItems";

function App() {
  const faqs = [
    {
      question: "A digital agency is a business",
      answer:
        "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
    },
    {
      question: "Hire to outsource your digital",
      answer:
        "Yes, you can hire us to outsource your digital projects, ensuring expert solutions, timely delivery, and quality results.",
    },
    {
      question: "marketing efforts",
      answer:
        "Our marketing efforts aim to strengthen brand visibility, drive customer engagement, boost sales, and achieve long-term business growth.",
    },
    {
      question: "Can provide your business",
      answer:
        "Yes, we can provide tailored business solutions designed to meet your specific needs and help drive success.",
    },
  ];

  return (
    <div className="bg-[#fdf0e9] px-4 sm:px-6 md:px-10 py-5 sm:py-10 md:py15">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          {/* Details Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-md sm:text-lg text-[#f29280] tracking-widest mb-2 sm:mb-3">FAQ</h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#391400] font-bold mb-6">
              Frequently Asked Question
            </h1>
            <p className="text-[#7f6454] text-sm sm:text-base md:text-md font-semibold mb-6">
              A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
            </p>
            <p className="text-lg sm:text-xl text-black font-bold mb-3">Contact Us</p>
          </div>

          {/* FAQ Section */}
          <div className="w-full lg:w-1/2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar