import React, { useState} from "react";

export const ConsumerContext = React.createContext();

const ConsumerProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ConsumerContext.Provider value={{currentUser: currentUser}} {...props} />
  );
};

export default ConsumerProvider;
