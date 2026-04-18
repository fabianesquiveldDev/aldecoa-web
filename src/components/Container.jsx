//container.jsx 
export default function Container({ children, className = "" }) {

  return (

    <div className={`container mx-auto px-8 ${className}`}>

      {children}

    </div>

  );

}