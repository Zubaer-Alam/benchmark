const Container = ({
  children,
  className,
}) => {
  return (
    <div className={` w-full max-w-[1220px] px-[20px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
