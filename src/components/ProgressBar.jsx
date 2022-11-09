import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/progressbar.scss'

function Progress(props) {
  return <ProgressBar className='progress' now={props.percentage} label={`${props.percentage}%`} />;
}

export default Progress;