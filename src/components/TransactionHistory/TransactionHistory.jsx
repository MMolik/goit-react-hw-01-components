import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
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
        <tr>
          <td class={css.name}>Invoice</td>
          <td class={css.name}>125</td>
          <td class={css.name}>USD</td>
        </tr>
        <tr>
          <td class={css.name}>Withdrawal</td>
          <td class={css.name}>85</td>
          <td class={css.name}>USD</td>
        </tr>
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
  ).isRequired,
};
