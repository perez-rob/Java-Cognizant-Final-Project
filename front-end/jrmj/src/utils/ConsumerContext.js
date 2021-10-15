import React, { useContext, useState} from "react";

export const ConsumerContext = React.createContext();

export const useConsumer = () => useContext(ConsumerContext);

const ConsumerProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ConsumerContext.Provider value={{currentUser, setCurrentUser}} {...props} />
  );
};

export default ConsumerProvider;
