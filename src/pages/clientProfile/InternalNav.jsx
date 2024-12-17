import Button from '../../components/button/Button';
import './InternalNav.css';

function InternalNav({ menuItems }) {
    return (
        <nav className="internal-nav">
            <ul>
                {menuItems.map((item) => (
                    <li 
                        key={item.id}
                        className={item.active ? 'active' : ''}
                    >
                        <Button 
                            onClick={item.onClick} 
                            children={item.label}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default InternalNav;