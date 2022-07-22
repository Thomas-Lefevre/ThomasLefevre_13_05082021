function InputFormSignIn({ setEmailValue, setPasswordValue }) {
    return (
        <div>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={setEmailValue} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={setPasswordValue} />
            </div>
        </div>
    )
}

export default InputFormSignIn;