import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';


export const Statistics = ({ title, stats }) => {
    return (
        <section className= { styles.statistics }>

            { typeof title == "undefined" ? "" : <h2 className={ styles.title }>Upload stats</h2>}

            <ul className={ styles.statlist}>
                {
                    stats.map((stat) => (
                        <li key={stat.id}
                            className= { styles.item }
                            style={{
                                backgroundColor :  randomColor() 
                            }}>
                            <span className="label">{ stat.label }</span>
                            <span className="percentage"> { stat.percentage + '%' } </span>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

const randomColor = () => {
    return (
        "rgb(" + Math.floor(Math.random() * 256) + "," +
            Math.floor(Math.random() * 256) + "," +
                Math.floor(Math.random() * 256) + ")"
            )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}

