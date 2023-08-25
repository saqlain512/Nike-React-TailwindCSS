import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className="flex justify-start mt-2 gap-2">
      <img src={star} alt="icon" />
      <p className="font-montserrat leading-normal text-lg text-slate-gray"> {4.5}</p>
      </div>
      <div className="mt-2 font-semibold font-palanquin text-2xl">{name}</div>
      <div className="mt-2 text-coral-red leading-normal text-21x font-semibold font-montserrat">{price}</div>
    </div>
  );
};

export default PopularProductCard;