import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"
const CustomerRevies = () => {
  return (
    <div>
      <section className="max-container">
        <h3 className="font-bold text-4xl font-palanquin text-center capitalize ">what our <span className="text-coral-red"> customer</span> say? </h3>
        <p className="mt-4 m-auto text-center max-w-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1  justify-evenly items-center gap-14 max-lg:flex-col">

        {reviews.map((review) => (
          <div key={review.name}>
            <ReviewCard {...review} />
          </div>
        ))}
        </div>
      </section>
    </div>
  )
}

export default CustomerRevies
