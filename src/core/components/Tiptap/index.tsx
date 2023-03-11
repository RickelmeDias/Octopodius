import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import './styles/tiptap.scss'

import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'
import MenuBar from './components/MenuBar'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { PlaceholderConfig, CodeBlockConfig } from './configurations'

function Tiptap() {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none !important',
      },
    },
    extensions: [
      Document.extend({
        content: 'heading block*',
      }),
      StarterKit.configure({
        document: false,
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
      Placeholder.configure({ placeholder: PlaceholderConfig }),
      CodeBlockLowlight.configure({ lowlight: CodeBlockConfig }),
    ],
  })

  return (
    <div className="editor">
      {editor && <MenuBar editor={editor} />}
      <EditorContent className="editor__content" editor={editor} />
    </div>
  )
}

export default Tiptap
