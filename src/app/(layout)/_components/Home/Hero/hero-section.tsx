import Image from 'next/image';
import React from 'react';

import { type IHero } from './hero.constant';

export default function HeroSection({ item }: { item: IHero }): JSX.Element {
  return (
    <>
      {item.image !== '' && item.image !== undefined && item.image ? (
        <figure>
          <Image src={`${item.image}`} alt="hero_images" width={704} height={300}></Image>
        </figure>
      ) : (
        <div>Resim eksik</div>
      )}

      <section className="px-6 py-5">
        <h1 itemProp="name" className="mb-2 break-words text-2xl font-bold">
          {item.title}
        </h1>
        <p itemProp="articleBody">{item.description}</p>
      </section>
    </>
  );
}
