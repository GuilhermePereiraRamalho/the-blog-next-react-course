import clsx from "clsx";

export default function HomePage() {
  return (
    <div>
      <h1
        className={clsx(
          "text-xl font-bold text-blue-500 hover:text-blue-50 hover:bg-blue-500 transition duration-1000",
        )}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, optio
        aperiam sequi ipsa asperiores tempore earum velit harum molestias
        deserunt dignissimos odit! Voluptatem assumenda consequatur corrupti
        ratione reiciendis voluptates ipsa!
      </h1>
    </div>
  );
}
