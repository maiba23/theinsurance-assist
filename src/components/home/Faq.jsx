import { useState } from "react";
import SectionContainer from "../../Layout/SectionContainer";
import { IconArrowRight } from "../../utils/imgLoader";

const questions = [
  {
    question: "What is The Insurance Assist?",
    answer: `The Insurance Assist is a team of people at IA PA LLC, a Guardian Life subsidiary, powered by AI and Machine Learning technology that provide unique, personalized insights. Our Artificial Intelligence and advanced analytics provide complete transparency, so we can show you the basis for our personalized review. Utilizing our advanced technology, our professionals will ensure we provide you with alternatives, at no charge to you.`,
  },
  {
    question: "Can you sell me a life insurance policy?",
    answer: `If at the end of your review you'll express interest in purchasing a policy, you will be referred to a representative that will be able to help you with that.  `,
  },
  {
    question: "How much does life insurance cost?",
    answer: `Well, that depends on you: Do you want to make sure you are covered your entire life? Do you want a policy that will allow you to access money if needed? Let's chat and see what your needs are.`,
  },
  {
    question:
      "If I purchased a Term Life Policy, should I consider a whole life policy now?",
    answer: `That depends on you. Do you want a policy that will allow you access to money if needed? Do you want to make sure you are insured your entire life? Let’s chat and see what your needs are.`,
  },
  {
    question:
      "Do I still need a life insurance policy if I am covered by my employer?",
    answer: `Typically, when a life policy is issued at work, it may not provide you with optimal coverage. Often, the policy will expire If you leave, so you may find yourself exposed in between jobs. At that point, it could be more expensive to issue a new policy. Group policies are not always tailored to your specific needs and to your dependents. This is where we come in, to offer you something that takes care of your financial needs and goals.`,
  },
];

const Faq = () => {
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <SectionContainer>
      <div className="accordion-section-row">
        <div className="accordion-aside">
          <h4 className="large-heading">Frequently asked questions.</h4>
          <div>
            Need more help? Contact us at
            <a href="/" className="link">
              assist@theinsuranceassist.com
            </a>{" "}
            or using our{" "}
            <a href="contact.html" className="link">
              contact form
            </a>
            .
          </div>
        </div>
        <div className="content-width-extra-large">
          {questions.map(({ question, answer }, idx) => (
            <div
              key={idx}
              className={
                idx === activeIdx ? "accordion-group active" : "accordion-group"
              }
            >
              <div
                className="accordion-title-panel"
                onClick={() =>
                  idx === activeIdx ? setActiveIdx(-1) : setActiveIdx(idx)
                }
              >
                <h5 className="accordion-heading">{question}</h5>
                <img
                  src={IconArrowRight}
                  alt="More info button"
                  className={"accordion-arrow"}
                />
              </div>
              <div className={"accordion-content"}>
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Faq;
