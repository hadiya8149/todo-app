import pomodoro_img from './pomodoro-1.jpg'
import './pomodoro.css';
export default function PomodoroClock(){
    return(
        <div className="pomodoro-container">
            <img src={pomodoro_img}></img>
        </div>
    )
};