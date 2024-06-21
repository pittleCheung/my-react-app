declare module "react-contenteditable" {
  import { Component, HTMLAttributes } from "react"

  export interface ContentEditableProps extends HTMLAttributes<HTMLElement> {
    html: string
    disabled?: boolean
    onChange?: (event: React.ChangeEvent<HTMLElement>) => void
    tagName?: string
  }

  class ContentEditable extends Component<ContentEditableProps> {}

  export default ContentEditable
}
