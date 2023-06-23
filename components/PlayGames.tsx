import Image from 'next/image';
import { PropsWithChildren } from 'react';

function Game({
  children,
  link,
  alt,
  imgSrc
}: PropsWithChildren<{ link: any; alt: string; imgSrc: string }>) {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <Image
        src={imgSrc}
        width={400}
        height={400}
        alt={alt}
        className="rounded-lg"
      ></Image>
      {children}
    </a>
  );
}

export default function PlayGames() {
  return (
    <div className="mt-16">
      <h3>Check out some of relative posts</h3>
      <div className="flex gap-3 flex-col sm:flex-row sm:gap-12">
        <div className="mt-6 w-8/12 sm:w-3/12 ">
          <Game
            link="https://smugchicken.com"
            alt="Smug Chicken"
            imgSrc="/smug-chicken.png"
          ></Game>
          <div>
            <h4>Smug Chicken</h4>
            <p>
              The daily AI art word game.
            </p>
          </div>
        </div>
        <div className="mt-6 w-8/12 sm:w-3/12 ">
          <Game
            link="https://wheretaken.com"
            alt="WhereTaken"
            imgSrc="/wheretaken.png"
          ></Game>
          <div>
            <h4>WhereTaken</h4>
            <p>Guess the country from a photo.</p>
          </div>
        </div>
        <div className="mt-6 w-8/12 sm:w-3/12 ">
          <Game
            link="https://playretrosnake.com"
            alt="Retro Snake Game"
            imgSrc="/snake.jpeg"
          ></Game>
          <div>
            <h4>Retro Snake</h4>
            <p>Eat the food but don't hit the walls or your own body!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
