import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import {CurrencyState, CurrencyType} from '../../redux/currencyReducer';
import {Dispatch} from 'redux';
import {
  ChangeActionAC,
  ChangeCurrencyFieldAC,
  СhangeCurrentCurrencyAC,
  CurrencyReducersTypes
} from '../../redux/actions';
import {connect, ConnectedProps, useDispatch, useSelector} from 'react-redux';
import {IGlobalState} from "../../redux/state";
import {selectAllProps} from "../../redux/selectors";

const CurrencyEContainer: React.FC = () => {

  // const {
  //     currencies,
  //     currentCurrency,
  //     isBuying,
  //     amountOfBYN,
  //     amountOfCurrency,
  //     setCurrencyAmount,
  //     setAction,
  //     changeCurrency,
  // } = props;

  // сокращенная версия mapDispatchToProps
  // const {
  //     currencies,
  //     currentCurrency,
  //     isBuying,
  //     amountOfBYN,
  //     amountOfCurrency,
  // } = props;

  // useSelector
  const {
    currencies,
    currentCurrency,
    isBuying,
    amountOfBYN,
    amountOfCurrency,
  } = useSelector(selectAllProps);

  const dispatch = useDispatch<Dispatch<CurrencyReducersTypes>>();

  let currencyRate: number = 0;
  const currenciesName = currencies.map((currency: CurrencyType) => {
    if (currency.currencyName === currentCurrency) {
      currencyRate = isBuying ? currency.buyRate : currency.sellRate;
    }
    return currency.currencyName;
  });

  const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!isFinite(+value)) return;
    if (e.currentTarget.dataset.currency) {
      const trigger: string = e.currentTarget.dataset.currency;
      if (trigger === 'byn') {
        if (value === '') {
          // setCurrencyAmount(value, value);
          // ChangeCurrencyFieldAC(value, value);
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
          // setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
          // ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
          dispatch(ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
        }
      } else {
        if (value === '') {
          // setCurrencyAmount(value, value);
          // ChangeCurrencyFieldAC(value, value);
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
          // setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
          // ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
          dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
        }
      }
    }
  };
  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
    // e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
    e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeActionAC(true)) : dispatch(ChangeActionAC(false));
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    // e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
    e.currentTarget.dataset.currency && dispatch(СhangeCurrentCurrencyAC(e.currentTarget.dataset.currency));
  };

  return (
    <React.Fragment>
      <CurrencyExchange
        currenciesName={currenciesName}
        currentCurrency={currentCurrency}
        currencyRate={currencyRate}
        isBuying={isBuying}
        amountOfBYN={amountOfBYN}
        amountOfCurrency={amountOfCurrency}
        changeCurrencyField={changeCurrencyField}
        changeAction={changeAction}
        changeCurrentCurrency={changeCurrentCurrency}
      />
    </React.Fragment>
  );
};

// const mapStateToProps = ( { currency } : {currency: CurrencyState} ): CurrencyState => {
//     return {
//         currencies: currency.currencies,
//         currentCurrency: currency.currentCurrency,
//         isBuying: currency.isBuying,
//         amountOfBYN: currency.amountOfBYN,
//         amountOfCurrency: currency.amountOfCurrency,
//     };
// };

// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>) => {
//     return {
//         setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
//             dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
//         },
//         setAction(isBuying: boolean) {
//             dispatch(ChangeActionAC(isBuying));
//         },
//         changeCurrency(currency: string) {
//             dispatch(СhangeCurrentCurrencyAC(currency));
//         },
//     };
// };

// const connector = connect(mapStateToProps, mapDispatchToProps);
// const connector = connect(mapStateToProps, {
//     ChangeActionAC,
//     ChangeCurrencyFieldAC,
//     СhangeCurrentCurrencyAC,
// });

// const connector = connect(mapStateToProps, {});

// type TProps = ConnectedProps<typeof connector>;

// export default connector(CurrencyEContainer);
export default CurrencyEContainer;

