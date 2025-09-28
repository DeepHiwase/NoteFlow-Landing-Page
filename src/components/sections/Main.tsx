interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className="">{children}</main>;
};

export default Main;
