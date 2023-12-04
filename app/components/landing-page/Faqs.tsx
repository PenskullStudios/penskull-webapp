import Faq from "./Faq";
import Heading from "./Heading";

const faqs = [
  {
    image: "/diamond.webp",
    title: "How will I know which internet plan is suitable for me?",
    content:
      "Having an FAQ section is a great way to present information about your company. Using the question-and-answer format makes it more relatable for users.",
  },
  {
    image: "/cube.webp",
    title: "Does Penskull Studios cover installation fees & services?",
    content:
      "Having an FAQ section is a great way to present information about your company. Using the question-and-answer format makes it more relatable for users.",
  },
  {
    image: "/star.webp",
    title: "Is customer service available 24/7?",
    content:
      "Having an FAQ section is a great way to present information about your company. Using the question-and-answer format makes it more relatable for users.",
  },
];

export default function Faqs() {
  return (
    <div className="relative py-16 h-[72rem] lg:h-[48rem]">
      <div className="absolute top-10 mx-auto left-0 right-0 lg:top-32 lg:left-16 lg:right-16 z-10">
        <Heading title="Faqs" />
        <div className="mt-10 lg:mt-28 flex flex-col lg:flex-row justify-center items-center gap-14">
          {faqs.map((ele, i) => {
            return (
              <Faq
                key={i}
                image={ele.image}
                title={ele.title}
                content={ele.content}
              />
            );
          })}
        </div>
      </div>
      <video
        className="absolute top-0 w-full h-full object-fill"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/back_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
