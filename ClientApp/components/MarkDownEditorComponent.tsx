import * as React from 'react';
//import {SimpleMDE} from 'simplemde';

interface MarkDownEditorProps
{

}

export class MarkDownEditor extends React.Component<MarkDownEditor, void>
{
    render()
    {
  //      let smde = new SimpleMDE({ element: document.getElementById("MyID") });
        return <div>
            <textarea name="MyID" id="MyID" cols={30} rows={10}></textarea>
        </div>
    }

    componentDidMount()
    {
        //let smde = new SimpleMDE();
    }
}