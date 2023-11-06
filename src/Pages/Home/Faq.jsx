const Faq = () => {
  return (
    <div className="container mx-auto">
      <div className="collapse collapse-plus bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
