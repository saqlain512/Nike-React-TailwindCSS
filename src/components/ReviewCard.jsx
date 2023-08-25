import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating,feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center   max-container" >
      <img src={imgURL} alt='customer'
      className="rounded-full w-[100px] h-[100px] object-cover"  />
      <p className="text-center text-slate-gray info-text ">{feedback}</p>
      <div className="mt-2 flex  justify-center items-center gap-2" >
      <img src={star} alt="star" 
      width={24}
      height={24} />
      <p className="text-slate-gray font-montserrat text-xl">{rating}</p>
      </div>
      <h3 className="font-bold font-palanquin  text-3xl ">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
