interface iStateProps {
  name: string;
  color?: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ name , onClick }: iStateProps) => {
  return (
    <div>
      <h1>Hi there! , My name is {name}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

// Child here might have static properties assigned to it like 'propTypes', 'displayName',  'defaultProps' and 'contextTypes' etc.
// Child will receive props of type 'ChildProps'.

export const ChildAsFc: React.FC<iStateProps> = ({ name, color , onClick , children }) => {
  return (
    <div>
      <h1>Hi there! , My name is {name} </h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};


