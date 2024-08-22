import './Switcher.css'

const Switcher = () => {
    return (
        <div className="switcher">
            <input type="checkbox" id="switch" />
            <label htmlFor="switch">Toggle</label>
        </div>
        
    );
}

export default Switcher