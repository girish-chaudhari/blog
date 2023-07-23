import React, { forwardRef } from 'react';
import MarkdownIt from 'markdown-it';
// import MdEditor from 'react-markdown-editor-lite';
// import style manually
// import 'react-markdown-editor-lite/lib/index.css';
import dynamic from 'next/dynamic';
const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false
});
import '../node_modules/react-markdown-editor-lite/lib/index.css';


interface Props {
  onChange: () => string;
  onBlur: () => any;
  value: any;
  error: any;
}
type RefEditor = React.LegacyRef<any> | undefined;

const Editor = forwardRef<Props, any>(
  ({ onChange, onBlur, value, error }, ref = null) => {
    const mdParser = new MarkdownIt(/* Markdown-it options */);

    // Finish!
    function handleEditorChange({
      html,
      text
    }: {
      html: string;
      text: string;
    }) {
      console.log('handleEditorChange', html, text);
      console.log('html >>', html, '>> text >>', text)
      onChange(text);
    }
    return (
      <MdEditor
        onBlur={onBlur}
        className={`h-10 border-2 border-red-500  rounded w-full ${
          error ? 'ring-red-500 ring-2' : 'ring-blue-500 focus:ring-2'
        } outline-none ring-offset-2 bg-gray-50 text-black`}
        ref={ref as any}
        style={{ height: '500px' }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    );
  }
);

export default Editor;
