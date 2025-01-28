import propTypes from 'prop-types'
function Button({success,warning, secondary, danger, rounded, outline, children}){
    return <button>
        {children}
    </button>
}
Button.propTypes = {

    checkVariation: ({success,warning, secondary, danger, rounded, outline}) => {
       const count = Number(!!success) + Number(!!warning) + Number(!!danger) + Number(!!secondary);
       if(count > 1){
           console.warn("Only one variation of 'primary', 'secondary' 'success' 'danger' can be true");
       };
    }

}
export default Button;