import React, { useState, useEffect } from "react";
import "../css/FAQ.css";
import { Link } from "react-router-dom";

const questions = [
    {
        question: "How long will the roofing installation take?",
        answer: "The duration of a roofing installation project will depend on several factors, including the size of the roof, the type of materials being used, and the complexity of the installation. We will provide you with a more accurate estimate based on your specific needs and requirements. However, it is important to keep in mind that the installation process can take anywhere from a few days to a few weeks to complete. The roofing contractor should be able to provide you with a timeline for the project and keep you updated on any delays or changes that may occur.",
    },
    {
        question: "What type of roofing material is best for my home?",
        answer:
            "Determining the best type of roofing material for your home depends on several factors, such as the climate in your area, the style and architecture of your home, and your budget. Popular roofing materials include asphalt strip shingles, dimensional shingles, and luxury shingles,. Each material has its own advantages and disadvantages, and a professional roofing contractor can help you choose the best material for your specific needs and requirements. They can also provide information on the durability, maintenance requirements, and expected lifespan of each type of material to help you make an informed decision. It is important to select a roofing material that not only complements the design of your home but also provides long-lasting protection from the elements.",
    },
    {
        question: "What is the expected lifespan of the roofing material?",
        answer:
            "The expected lifespan of asphalt roofing material can vary depending on several factors, including the quality of the material, the manufacturer's warranty, and the local climate conditions. However, on average, asphalt shingles have an expected lifespan of 15-30 years. Proper installation and maintenance can also impact the lifespan of the material. A professional roofing contractor can provide more specific information on the expected lifespan of asphalt roofing material based on your specific needs and location.",
    },
    {
        question: "What is the cost of the roofing project?",
        answer:
            "The cost of a roofing project can vary widely depending on several factors such as the size of the roof, the type of materials being used, the complexity of the installation, and the location of the project. It is recommended to obtain a detailed written estimate from a professional roofing contractor, which should outline all costs associated with the project. This will give you a better understanding of the total cost and help you make an informed decision. It is important to remember that while cost is an important factor, it should not be the only consideration when choosing a roofing contractor. Quality workmanship and the use of high-quality materials can be just as important in ensuring a long-lasting and durable roof for your home.",
    },
    {
        question: "Do you offer any warranties or guarantees for the roofing work?",
        answer:
            "Yes, we do offer warranties or guarantees for our roofing work. At our company, we stand behind our workmanship and the quality of the materials we use, and we want our customers to have peace of mind knowing that their investment is protected. Our warranties and guarantees may vary depending on the type of roofing project and materials used, but we always provide our customers with clear and transparent information about what is covered and for how long. If you have any questions about our warranties or guarantees, please don't hesitate to contact us.",
    },
    {
        question: "Will the roofing installation team clean up after the project is completed?",
        answer:
            "Certainly, as a professional roofing company, we prioritize the satisfaction of our customers and take pride in delivering high-quality roofing services. Therefore, our roofing installation team is committed to cleaning up after the project is completed. We understand that a clean and safe work environment is essential for your peace of mind and we make sure to leave your property in pristine condition once the roofing installation is done. You can trust us to dispose of all debris, materials, and equipment, leaving your property clean and free of any potential hazards.",
    },
    {
        question: "Can you provide a detailed written estimate of the roofing project?",
        answer:
            "Absolutely, we would be happy to provide you with a detailed written estimate of the roofing project. Our estimate will include all the necessary details regarding the materials needed, labor costs, and any other expenses associated with the project. We will make sure that our estimate is clear and easy to understand so that you have a complete understanding of the scope of the project and associated costs. Please let us know the best way to get the estimate to you, whether that's through email, regular mail, or another method of your choosing. Thank you for considering our services.",
    },
    {
        question: "What steps will be taken to protect my property during the roofing installation process?",
        answer:
            "During the roofing installation process, protecting your property is of utmost importance to us. We take several steps to ensure your property remains safe and secure throughout the process.\n Firstly, we will conduct a thorough inspection of your property prior to beginning the installation process to identify any potential hazards or areas of concern. We will take the necessary precautions to protect these areas, such as covering nearby plants, landscaping, and outdoor furniture.\n Secondly, we will use protective tarps and coverings to shield your property from debris and dust during the roofing installation. Our team will ensure that all tarps are secured properly to prevent any potential damage.\n Thirdly, we will use caution when accessing your roof to minimize the risk of damage to your property. Our team will take extra care to avoid stepping on delicate areas such as skylights, vents, or other roof features.\n Lastly, we will conduct a final inspection of your property after the installation is complete to ensure that it is in the same condition as it was before the work started. We will also remove any debris or equipment from your property, leaving it clean and tidy.\n At our company, protecting your property during the roofing installation process is a top priority. Our experienced team takes all necessary precautions to ensure your property is safe and secure throughout the entire process.",
    },
 
];

const FAQQuestion = ({ question, answer, expanded }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className=" faq-question">
            <div className="faq-question-header" onClick={handleClick}>
                <h3>{question}</h3>
                {/* <span>{isExpanded ? "-" : "+"}</span> */}
            </div>
            {isExpanded && <div className="faq-answer">{answer}</div>}
            {!isExpanded && <div className="faq-answer-heigth"></div>}
        </div>
    );
};

const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    useEffect(() => {
        const handleScroll = () => {
            const faqSection = document.querySelector("#faq-section");
            const faqSectionTop = faqSection.offsetTop;
            const faqSectionHeight = faqSection.offsetHeight;
            const windowTop = window.pageYOffset;
            const windowHeight = window.innerHeight;

            if (
                windowTop >= faqSectionTop - windowHeight / 2 &&
                windowTop <= faqSectionTop + faqSectionHeight - windowHeight / 2
            ) {
                faqSection.classList.add("faq-section-visible");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="faq-page">
            <h2 className ="heading animated fadeInDown">FAQ</h2>
            <div id="faq-section" className="faq-section animated fadeInUp">
                {questions.map((q, i) => (
                    <FAQQuestion
                        key={i}
                        question={q.question}
                        answer={q.answer}
                        expanded={i === expandedIndex}
                        onClick={() => setExpandedIndex(i === expandedIndex ? -1 : i)}
                    />
                ))}
                <p className="animated fadeInUp">For more information <Link to="/">Contact us</Link>.</p>
            </div>
        </div>
    );
};


export default FAQ;
