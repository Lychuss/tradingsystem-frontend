export default function Button(props){
    return  <>
            <button onClick={props.onClick} type="submit" className={props.className}>{props.label}
            </button>
            </>
}