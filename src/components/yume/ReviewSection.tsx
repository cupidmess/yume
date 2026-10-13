
import { REVIEWS, REVIEWS_CTA } from "@/data/content";
import "./ReviewsSection.css";

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <p className="reviews-eyebrow">KIND WORDS</p>
        <h2>Stories from Our Guests</h2>
        <p>
          Real experiences shared by guests who visited Yume Resort.
        </p>
      </div>

      <div className="reviews-grid">
        {REVIEWS.map((review) => (
        <a
        className="review-card"
        key={review.sourceUrl}
        href={review.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
            <div
              className="review-stars"
              aria-label={`${review.rating} out of 5 stars`}
            >
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>

            <p className="review-text">"{review.text}"</p>

            <div className="review-footer">
            <span className="review-author">
  {review.name} ↗
</span>

              <span className="review-source">Google</span>
            </div>
          </a>
        ))}
      </div>

      <div className="reviews-cta">
        <a
          href={REVIEWS_CTA.url}
          target="_blank"
          rel="noopener noreferrer"
          className="reviews-button"
        >
          {REVIEWS_CTA.label} ↗
        </a>
      </div>
    </section>
  );
}
