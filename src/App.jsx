import { Nav } from "./components"
import { CustomerRevies,Footer,Service,Subscribe,SuperQuality ,Hero,PopularProducts} from "./sections"
import SpecialOffer from "./sections/SpecialOffer"
export default function App() {
  return (
   <>
    <main className="relative ">
     <Nav/> 
      <section className="xl:padding-1 wide:padding-r padding-b pl-5">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts /> 
      </section>
      <section className="padding-x py-10" >
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Service />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="padding bg-pale-blue">
        <CustomerRevies />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black  pb-8">
        <Footer />
      </section>  
    </main>
   </>
  )
}