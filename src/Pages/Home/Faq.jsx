const Faq = ({ faq }) => {
  const { question, answer } = faq || {};
  return (
    <div className="collapse collapse-plus bg-base-200 border-x-4 border-stSecondary">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Faq;
