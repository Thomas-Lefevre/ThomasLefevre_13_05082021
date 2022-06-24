import SecurityIcon from "../designs/img/icon-security.png";

function FeatureSecurity() {
    return (
        <div className="feature-item">
          <img
            src={SecurityIcon}
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
    )
}

export default FeatureSecurity;