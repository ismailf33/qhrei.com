import Link from 'next/link';
import { SingleBlog } from '..';
import img from '/public/Can-I-Sell-my-Salem-Home-without-Any-Equity_-OG-2-400x250.jpg';

export default function News({ show, setShow }) {
  return (
    <section className="py-16 md:py-28">
      <div className="container px-4">
        <div className="text-center">
          <h2 className="text-aqua font-bold text-2xl md:text-4xl font-amiko capitalize mb-8">
            latest news & blogs
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-7 mt-16">
          <SingleBlog
            button
            img={img}
            title="Buy House"
            data="Jan 25, 2022"
            desc="Contrary to popular belief, there are ways to sell your house fast even with extensive repairs in Salem, Oregon. Although you’ll likely have to sell it for much less, finding a..."
          />
          <SingleBlog
            button
            img={img}
            title="Buy House"
            data="Jan 25, 2022"
            desc="Contrary to popular belief, there are ways to sell your house fast even with extensive repairs in Salem, Oregon. Although you’ll likely have to sell it for much less, finding a..."
          />
          <SingleBlog
            button
            img={img}
            title="Buy House"
            data="Jan 25, 2022"
            desc="Contrary to popular belief, there are ways to sell your house fast even with extensive repairs in Salem, Oregon. Although you’ll likely have to sell it for much less, finding a..."
          />
        </div>
        <div className="text-center mt-14">
          <Link href="/blog">
            <a className="bg-aqua px-7 py-4 font-asap text-xl text-white uppercase font-medium rounded-full">
              Read More Blogs
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
