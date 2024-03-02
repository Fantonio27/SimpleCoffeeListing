type Button = {
    text: string, 
    index: number,
    active: boolean,
    method:(event: any)=> void
}

const ButtonGroup = ({text, active, index, method}: Button) => {
    return (
        <>
            <button className={`buttonStyle ${ active && 'gray'}`} onClick={method} name={String(index)}>{text}</button>
        </>
    )
}

export default ButtonGroup