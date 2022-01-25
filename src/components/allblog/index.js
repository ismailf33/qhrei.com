import { SingleBlog } from '..';
import img from '/public/Can-I-Sell-my-Salem-Home-without-Any-Equity_-OG-2-400x250.jpg';

export default function AllBlog({ blogs }) {

  return (
    <section className="py-16">
      <div className="container px-4 gap-y-8 grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-10">
        {
          blogs?.map(item => <SingleBlog
            key={item.id}
            id={item.id}
            img={img}
            title={item.title}
            date={item.date}
            desc={item.description}
          />)
        }
      </div>
    </section>
  );
}
