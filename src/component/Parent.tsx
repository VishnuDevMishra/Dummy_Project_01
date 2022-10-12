import { Child, ChildAsFc } from "./Child";

const Parent = () => {
  return (
    <>
      <ChildAsFc name="Varun" onClick={() => alert("Button Clicked")}> Hi , I am Child Vishnu </ChildAsFc>
      <Child name="Vishnu" onClick={() => alert("Button Clicked")} >Hi , I am Child Vishnu </Child>
    </>
  );
};

export default Parent;
