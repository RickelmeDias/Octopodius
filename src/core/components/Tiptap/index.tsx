import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

// import './styles.scss'

import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'
import MenuBar from './components/MenuBar'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { PlaceholderConfig, CodeBlockConfig, Heading } from './configurations'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Image from '@tiptap/extension-image'
import Dropcursor from '@tiptap/extension-dropcursor'
import Paragraph from '@tiptap/extension-paragraph'

function Tiptap() {
  const editor = useEditor({
    extensions: [
      Document.extend({
        content: 'heading block*',
      }),
      StarterKit.configure({
        document: false,
        heading: {
          levels: [1],
        },
      }),
      Image,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Placeholder.configure({ placeholder: PlaceholderConfig }),
      CodeBlockLowlight.configure({ lowlight: CodeBlockConfig }),
      Dropcursor.configure({
        color: '#000',
        width: 1,
      }),
      Heading,
      Paragraph.configure({
        HTMLAttributes: {
          class: 'text-lg',
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
