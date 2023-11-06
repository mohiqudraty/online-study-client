import { useEffect, useState } from "react";
import Banner from "./Banner";
import Faq from "./Faq";
import Features from "./Features";
import axios from "axios";

const Home = () => {
  const [faqs, setFaqs] = useState([]);
  const [features, setFeatures] = useState([]);
  // console.log(faqs);

  // data fetch for faq section----
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/faq")
      .then((res) => {
        setFaqs(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // data fetch for features section----
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/features")
      .then((res) => {
        setFeatures(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      {/* banner section ---------- */}
      <Banner></Banner>
      {/* features section -------- */}
      <div className="my-12">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-stBlack my-2">
            Explore Our Key Features
          </h2>
          <p className="text-stGray mb-8 max-w-2xl mx-auto">
            Discover a range of powerful features designed to streamline your
            assignment management. From creating and grading assignments with
            ease to ensuring top-notch security and providing round-the-clock
            support, our platform has you covered.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Features key={feature._id} feature={feature}></Features>
          ))}
        </div>
      </div>

      {/* faq section  ------------ */}
      <div className="my-8 max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-stBlack my-2">
            Explore Our FAQs
          </h2>
          <p className="text-stGray mb-8">
            Explore our comprehensive FAQ section to find answers to common{" "}
            <br />
            questions about assignment creation, submission, marking, and more.
          </p>
        </div>
        <div className="">
          {faqs.map((faq) => (
            <Faq key={faq._id} faq={faq}></Faq>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
