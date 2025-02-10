import "./Capital.css";

function Capital() {
  return (
    <section id="capital">
      <h2 className="captital__title">Trading Capital</h2>
      <div className="current__container">
        <h3 className="current__container-value">1.00865 BTC</h3>
        <div className="balance__container">
          <div className="balance__section">
            <h2>balance:</h2>
            <p>10 850</p>
          </div>
          <div className="onhold__section">
            <h2>on hold:</h2>
            <p>24 000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capital;
