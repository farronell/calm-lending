import React from "react";
import styles from "./ArticlesGridCard.module.css";

export default function ArticlesGridCard({ data, index }) {
  const { category, title, date, image, description } = data;

  return (
    <article
      className={`${
        styles[`p${index}`]
      }  rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-left flex flex-col justify-stretch gap-9`}
    >
      <a href="#!">
        <img className="rounded-t-lg w-full h-56" src={image} alt={title} />
      </a>

      <div className="p-6">
        <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
          {category}
        </h5>

        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
          {title}
        </p>
        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
          {description}
        </p>
        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
          {date}
        </p>
      </div>
    </article>
  );
}
