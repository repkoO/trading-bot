import './Time.css'

function Time() {
  return (
    <section id="time">
      <div className="time__container">
        <h2>Time Range:</h2>
        <button className="time__button">24h</button>
        <button className="time__button">7 days</button>
        <button className="time__button">30 days</button>
        <button className="time__button active">All time</button>
      </div>
    </section>
  );
}

export default Time;
