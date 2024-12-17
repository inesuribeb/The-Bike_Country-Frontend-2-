function Button({ id, onClick, className, children }) {
    return (
        <button id={id} onClick={onClick} className={className}>
            {children}
        </button>
    );
}
export default Button;
