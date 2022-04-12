

import Header from "./../components/Header";
import Banner from "./../components/Banner";
import SmallCard from "./../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from './../components/Footer';
import Head  from 'next/head';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull - вытащить some data from a server - api enpoints  */}
          <div className="p-3 -ml-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={distance}
                distance={distance}
                location={location}
                img={img}
              />
            ))}
          </div>
        </section>

        {/* another section */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
          <LargeCard title="The greatest outdors"
          description="wishlist curated"
          buttonText="Get Inspired"
          img="https://links.papareact.com/4cj" />
        </section>
      </main>
    
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData,
    },
  };
}
