import { reviews } from "../../utils/content";

const Reviews = () => {
  return (
    <section className="gap m-auto flex max-w-[90rem] flex-wrap items-center justify-start gap-x-4 gap-y-4 px-25">
      <ul className="flex items-center">
        {reviews.map((review) => (
          <li key={review.id} className="-mr-4 overflow-clip last:mr-0">
            <img
              src={review.src.toString()}
              alt={review.alt}
              className="border-primary-100 h-12 rounded-full border-2"
            />
          </li>
        ))}
      </ul>
      <p className="text-primary-100 text-xl/loose font-light">
        Trusted by{" "}
        <span className="text-primary-500 font-bold tracking-tighter">
          12,653+
        </span>{" "}
        productivity junkies
      </p>
    </section>
  );
};

export default Reviews;
