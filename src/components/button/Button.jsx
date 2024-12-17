function Button({ id, onClick, children }) {
    return (
        <>
            <button id={id} onClick={onClick}>
                {children}
            </button>
        </>
    );
}
export default Button;
