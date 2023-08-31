import './Editor.css';
import TopPanel from './TopPanel';
import FileExplorer from './FileExplorer';
import Terminal from './Terminal';
import FileEditor from './FileEditor';
function Editor() {
  return (
    <div className="editor">
      <TopPanel/>
      <FileExplorer/>
      <FileEditor />
      <Terminal/>
    </div>
  );
}

export default Editor;
