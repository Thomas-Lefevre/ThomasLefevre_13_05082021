function Transaction({ transactionTitle, transactionAmount, transactionBalance }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{transactionTitle}</h3>
                <p className="account-amount">{transactionAmount}</p>
                <p className="account-amount-description">{transactionBalance}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

export default Transaction;