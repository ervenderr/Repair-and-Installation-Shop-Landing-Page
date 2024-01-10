import { Hero, About, Blog, BookingForm, Contact, CustomerReviews, Feature, Footer, Newsletter, Partner, Portfolio, Pricing, Promo, Services, Team, WorkingTime } from './sections';
import Nav from './components/Nav';


const App = () => (
  <main className="Relative">
      <Nav/>
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero/>
    </section>
    <section className="">
      <BookingForm />
    </section>
    <section className="padding">
      <About/>
    </section>
    <section className="bg-pale-blue padding">
      <Services />
    </section>
    <section className="padding">
      <WorkingTime />
    </section>
    <section className="padding bg-pale-blue">
      <Portfolio />
    </section>
    <section className="padding bg-seal bg-fixed bg-cover bg-promo opacity-100">
      <Promo />
    </section>
    <section className="padding ">
      <Team />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding ">
      <Pricing />
    </section>
    <section className="padding bg-pale-blue">
      <Partner />
    </section>
    <section className="padding">
      <Contact />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;