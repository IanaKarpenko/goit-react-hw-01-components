import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.scss';


export const TransactionHistory = ({ items }) => {
    return (
        <table>
            <thead>
                <tr className={styles.table}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {
                    items.map((line) => (
                        <tr className="line" key={line.id}>
                            <td>{line.type}</td>
                            <td>{line.amount}</td>
                            <td>{line.currency}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

TransactionHistory.defaulfProps = {};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}