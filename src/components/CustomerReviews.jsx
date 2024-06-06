import styles from "./CustomerReviews.module.css";
import { StarComponent } from "./StarComponent";

export function CustomerReviews() {
  const customerReviews = [
    {
      id: 0,
      stars: 5,
      author: "Josh&Amanda",
      text: "Perfect armchair. pure indulgence. The deep seat, plush cushions, and velvet upholstery make it a throne fit for royalty.",
    },
    {
      id: 1,
      stars: 5,
      author: "Peter",
      text: "Crafted with meticulous attention to detail, our luxury armchairs elevate any living space. Sturdy, comfortable, and stylish.",
    },
    {
      id: 2,
      stars: 5,
      author: "HappyFamilyReview",
      text: "Armchair combines relaxation with contemporary design. Its high arms and deep seat provide ultimate comfort. Place it anywhere in your room, and it effortlessly adjusts to your interior.",
    },
  ];

  return (
    <div className={styles.customerReviews}>
      <hr />
      <h3>Latest reviews</h3>
      <ul>
        {customerReviews.map((review) => {
          return (
            <li className={styles.review} key={review.id}>
              <h4>{review.author}</h4>
              <div className={styles.starDiv}>
                <StarComponent />
                {review.stars}/5
              </div>
              <p>{review.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
