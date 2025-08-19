import type { FC } from "react";

interface IProps {
  name: string;
  age: number;
}
const WelcomePage: FC<IProps> = ({ name, age }) => {
  return (
    <h1>
      Hello, my name is {name} and I am {age} years old.
    </h1>
  );
};

export default WelcomePage;
