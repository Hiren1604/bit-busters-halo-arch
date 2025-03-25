
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is the typical timeline for a residential project?",
    answer: "The timeline varies depending on the scope and complexity of the project. Generally, the design phase takes 2-4 months, permitting 1-3 months, and construction 8-14 months for a custom home. We provide detailed timelines during our initial consultation."
  },
  {
    question: "How do you incorporate sustainability into your designs?",
    answer: "Sustainability is at the core of our design philosophy. We incorporate energy-efficient systems, eco-friendly materials, passive design strategies, and renewable energy solutions. Each project is assessed for its specific environmental context to maximize sustainability."
  },
  {
    question: "What is your fee structure?",
    answer: "Our fees are typically structured as a percentage of the construction cost, ranging from 8-15% depending on project scope and services required. For smaller projects, we may work on an hourly basis. We provide detailed fee proposals after our initial consultation."
  },
  {
    question: "Do you handle the construction process as well?",
    answer: "While we don't directly build, we offer comprehensive construction administration services where we work closely with builders, oversee the construction process, conduct site visits, and ensure that the design is being properly executed."
  },
  {
    question: "How involved will I be in the design process?",
    answer: "Client collaboration is essential to our process. We maintain open communication throughout the project and involve you in key decisions. We'll have regular meetings to review designs, select materials, and discuss any adjustments needed."
  },
  {
    question: "Do you work with existing buildings or only new construction?",
    answer: "We work with both new construction and renovations/restorations of existing buildings. In fact, many of our projects involve transforming existing spaces to better meet our clients' needs while preserving architectural character."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-2">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our architectural services and process.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-border rounded-lg transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "bg-background shadow-md" : "bg-background/50"
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            Can't find the answer you're looking for?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-primary hover:text-primary/70 transition-colors font-medium"
          >
            <span>Contact our team</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
