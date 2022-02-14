import React, {createContext, useState} from 'react';

export const ConversionContext = createContext();

const ConversionContextProvider = ({children}) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('PKR');
  const [conversionRate, setConversionRate] = useState(171.5);

  const swapCurrencies = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
  };

  const contextValues = {
    baseCurrency,
    setBaseCurrency,
    targetCurrency,
    setTargetCurrency,
    conversionRate,
    setConversionRate,
    swapCurrencies,
  };

  return (
    <ConversionContext.Provider value={contextValues}>
      {children}
    </ConversionContext.Provider>
  );
};

export default ConversionContextProvider;
