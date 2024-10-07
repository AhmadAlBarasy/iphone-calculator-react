export default function Button({ onClick, color, children }){
    return <div onClick={onClick} style={{backgroundColor: `${color}`}} className="button">{children}</div>
}