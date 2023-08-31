import { useState } from 'react';
import './FileExplorer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lodash  from 'lodash';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';

import {faFolderClosed,faFile,faCaretDown,faCaretUp} from '@fortawesome/free-solid-svg-icons';

function Level({items}){


    let [list , setList] = useState(items);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    function toggle(){
        let newList = lodash.cloneDeep(list);
        newList.isClicked = !newList.isClicked;
        setList(newList);
        return;
    }
    return(
        <ol className="list-none">
            {list.isClicked?
            <li key={list.path} onClick = {()=>{toggle()}}><span onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} className='file'><FontAwesomeIcon style={isHovered?{color: 'white' }:{color: 'purple' }} icon={faFolderOpen} /> {list.name}  {isHovered?<FontAwesomeIcon icon={faCaretUp} />:<></>}</span></li>:
            <li key={list.path} onClick = {()=>{toggle()}}><span onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} className='file'><FontAwesomeIcon style={isHovered?{color: 'white' }:{color: 'purple' }} icon={faFolderClosed} /> {list.name}  {isHovered?<FontAwesomeIcon icon={faCaretDown}/>:<></>}</span></li>}
            {  
                list.children.map((item,index)=>{
                    if(list.isClicked){
                        if(item.type === 'folder'){
                            return <li className="ml-4 mt-2" key ={item.path}><Level items={item}/></li>
                        }else{
                            return < li className="ml-4 mt-2" key ={item.path}><span className='file'><FontAwesomeIcon  style={{ color: 'purple' }} icon={faFile} /> {item.name}</span></li>
                        }
                    }
                    return undefined;
                })
            }
        </ol>
    );
}

function FileTree(){
    let items ={
        type: 'folder',
        name: 'repl1',
        path:'/repl1',
        isClicked: true,
        children:[
            {
            type:'folder',
            name:'folder1',
            path:'repl1/folder1',
            isClicked: false,
            children:[
                {
                    type:'folder',
                    name:'folder2',
                    isClicked: false,
                    children:[
                        {
                            type:'folder',
                            name:'folder7',
                            isClicked: false,
                            children:[{
                                type:'file',
                                name:'file8',
                                path:'repl1/folder1/folder2/folder7/file8'
                            }],
                            path:'repl1/folder1/folder2/folder7'
                        },
                        {
                        type:'file',
                        name:'file1',
                        path:'repl1/folder1/folder2/file1'
                        }],
                    path:'repl1/folder1/folder2'
                },
                {
                    type:'file',
                    name:'file2',
                    path:'repl1/folder1/file2'    
                }
            ]
            },
            {
                type:'folder',
                name:'folder3',
                path:'repl1/folder3',
                isClicked: false,
                children:[
                    {
                        type:'folder',
                        name:'folder4',
                        children:[{
                            type:'file',
                            name:'file5',
                            path:'repl1/folder3/folder4/file5'
                        }],
                        path:'repl1/folder3/folder4'
                    },
                    {
                        type:'file',
                        name:'file6',
                        path:'repl1/folder3/file6'    
                    }
                ] 
            },
            {
                type:'file',
                name:'file4',
                path:'repl1/file4'  
            },
            {
                type:'folder',
                name:'folder11',
                path:'repl1/folder11',
                isClicked: false,
                children:[
                    {
                        type:'folder',
                        name:'folder2',
                        isClicked: false,
                        children:[
                            {
                                type:'folder',
                                name:'folder7',
                                isClicked: false,
                                children:[{
                                    type:'file',
                                    name:'file8',
                                    path:'repl1/folder1/folder2/folder7/file8'
                                }],
                                path:'repl1/folder1/folder2/folder7'
                            },
                            {
                            type:'file',
                            name:'file1',
                            path:'repl1/folder1/folder2/file1'
                            }],
                        path:'repl1/folder1/folder2'
                    },
                    {
                        type:'file',
                        name:'file2',
                        path:'repl1/folder1/file2'    
                    }
                ]
            },
            {
                    type:'folder',
                    name:'folder13',
                    path:'repl1/folder13',
                    isClicked: false,
                    children:[
                        {
                            type:'folder',
                            name:'folder4',
                            children:[{
                                type:'file',
                                name:'file5',
                                path:'repl1/folder3/folder4/file5'
                            }],
                            path:'repl1/folder3/folder4'
                        },
                        {
                            type:'file',
                            name:'file6',
                            path:'repl1/folder3/file6'    
                        }
                    ] 
            },
            {
                    type:'file',
                    name:'file14',
                    path:'repl1/file14'  
            }
        ]
    };

    return(
    <div className='innerPanels'>
            <Level items={items}/> 
    </div>
    );
}

function ExplorerBar(){

    return(
        <div className='innerPanels w-full' style={{textAlign: 'center',padding:'5px'}}>
            <span className="font-bold text-xl text-black">Files</span>
        </div>
    );
}

function FileExplorer(){
    return (
        <div className = 'FileExplorer Panels p-2'>
            <ExplorerBar/>
            <FileTree/> 
        </div>
    )
}




export default FileExplorer;