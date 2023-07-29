import { Node as ProsemirrorNode } from '@tiptap/pm/model'
import './styles.scss'

const PlaceholderConfig:
  | string
  | ((PlaceholderProps: { node: ProsemirrorNode }) => string)
  | undefined = ({ node }) => {
  if (node.type.name === 'heading') {
    return 'Title'
  }
  return 'Write here...'
}

export default PlaceholderConfig
