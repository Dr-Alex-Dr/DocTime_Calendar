import styles from './Cell.module.scss';
import classNames from 'classnames';

const Cell = ({params}: any): React.ReactElement => {
    const interval = params ? params.split(' ')[0] : '';
    const cabinet = params ? params.split(' ')[1] : '';
    
    return (
        <div className={classNames(styles.container, { [styles.active]: params })}>
            <p>{interval}</p>
            <p>{cabinet}</p>
        </div>
    )
}

export { Cell }