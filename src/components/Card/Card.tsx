import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  addClassName?: string;
  image: string;
  alt: string;
}

const Card = (props: CardProps) => {
  return (
    <div className={`yk_card_class_main ${props.addClassName}`}>
      <p>This is Title: {props.title}</p>
      <img src={props.image} alt={props.alt} />
    </div>
  );
};

export default Card;
