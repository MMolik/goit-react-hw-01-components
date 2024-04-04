import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
export const Transactions = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th class={css.head}>Type</th>
          <th class={css.head}>Amount</th>
          <th class={css.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.tr} key={id}>
              <td className={`${css.td} ${css.type}`}>{type}</td>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
