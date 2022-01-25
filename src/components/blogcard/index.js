import Image from 'next/image';
import Link from 'next/link';

export default function SingleBlog({ id, img, title, date, desc, button }) {
  return (
    <div className="flex-1 flex flex-col gap-y-2 shadow-xm border border-iron">
      <Link href={`/blog/${id}`}>
        <a>
          <Image
            src={img}
            alt=""
            width={350}
            height={250}
            layout="responsive"
          />
        </a>
      </Link>
      <div className="px-5 py-4 font-asap leading-7">
        <Link href={`/blog/${id}`}>
          <a>
            <h5 className="font-medium font-amiko text-base-2 mb-3">{title}</h5>
          </a>
        </Link>
        <p className="mb-2 text-iron-gray">{date}</p>
        <p className="text-iron-gray">{desc}</p>
        {button ? (
          <Link href={`/blog/${id}`}>
            <a className="text-aqua font-sans font-normal text-base uppercase">
              read more
            </a>
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
