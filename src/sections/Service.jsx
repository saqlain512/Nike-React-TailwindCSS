import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"
const Service = () => {
  return (
   <section className="flex justify-center flex-wrap gap-9 max-container" >
    {services.map((Service) => (
          <div key={Service.name}>
            <ServiceCard {...Service} />
          </div>
        ))}
   </section>
  )
}

export default Service
