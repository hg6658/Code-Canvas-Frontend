import './FileEditor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
function TextEditor(){
    return(
        <div className='FileShowcase w-full p-[25px]' contentEditable={true}>

        </div>
    );
}

function FileTab(){

    return (
        <div className="fileTabContainer">
            <span className="fileItemContainer1">
                File 1
            </span>
            <span className="fileItemContainer2" style={{color: 'black'}} >
                <FontAwesomeIcon icon={faSquareXmark} />
            </span>
        </div>
    )
}

function FileShowcase(){
    return(
        <div className='FileShowcase w-full flex flex-row'>
            <FileTab/>
            <FileTab/>
            <FileTab/>
            <FileTab/>
            <FileTab/>
            <FileTab/>
            <FileTab/>
            <FileTab/>
            <FileTab/>
            <FileTab/>
            <FileTab/>
            <FileTab/>
            <FileTab/>
            <FileTab/>
        </div>
    );
}

function FileEditor(){
    return (
        <div className = 'FileEditor Panels p-2'>
            <FileShowcase/>
            <TextEditor/>
        </div>
    )
}


export default FileEditor;