import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import './styles/placeholder.scss'
import './styles/tiptap.scss'

import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'
import MenuBar from './MenuBar'

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
          levels: [1, 2],
        },
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'What is the title?'
          }

          return 'Write more here...'
        },
      }),
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
