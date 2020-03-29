import React from "react";
import { FormCheck, useAccordionToggle } from "react-bootstrap";

type Props = {
  eventKey: string;
  label: string;
  name: string;
  id: string;
  checked: boolean;
  onChange: (key: string) => void;
};

const CustomToggle: React.FC<Props> = props => {
    console.log("rendered", props.label)
  const decoratedOnClick = useAccordionToggle(props.eventKey, () => {
    console.log("changed")
    props.onChange(props.eventKey);
  });

  return (
    <FormCheck
      type="radio"
      label={props.label}
      name={props.name}
      id={props.id}
      onChange={decoratedOnClick}
      checked={props.checked}
    ></FormCheck>
  );
};

export default CustomToggle;
