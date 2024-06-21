import { useNode } from "@craftjs/core"
import { Button as AButton } from "antd"
import React from "react"

export const ButtonAntd = ({ size, variant, href, text, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode()
  return (
    <AButton
      ref={(ref) => connect(drag(ref))}
      style={{ margin: "5px" }}
      size={size}
      href={href}
      {...props}>
      {text}
    </AButton>
  )
}

// export const ButtonSettings = () => {
//   const {
//     actions: { setProp },
//     props,
//   } = useNode((node) => ({
//     props: node.data.props,
//   }))

//   return (
//     <div>
//       <FormControl size="small" component="fieldset">
//         <FormLabel component="legend">Size</FormLabel>
//         <RadioGroup
//           defaultValue={props.size}
//           onChange={(e) => setProp((props) => (props.size = e.target.value))}>
//           <FormControlLabel
//             label="Small"
//             value="small"
//             control={<Radio size="small" color="primary" />}
//           />
//           <FormControlLabel
//             label="Medium"
//             value="medium"
//             control={<Radio size="small" color="primary" />}
//           />
//           <FormControlLabel
//             label="Large"
//             value="large"
//             control={<Radio size="small" color="primary" />}
//           />
//         </RadioGroup>
//       </FormControl>
//       <FormControl component="fieldset">
//         <FormLabel component="legend">Variant</FormLabel>
//         <RadioGroup
//           defaultValue={props.variant}
//           onChange={(e) =>
//             setProp((props) => (props.variant = e.target.value))
//           }>
//           <FormControlLabel
//             label="Text"
//             value="text"
//             control={<Radio size="small" color="primary" />}
//           />
//           <FormControlLabel
//             label="Outlined"
//             value="outlined"
//             control={<Radio size="small" color="primary" />}
//           />
//           <FormControlLabel
//             label="Contained"
//             value="contained"
//             control={<Radio size="small" color="primary" />}
//           />
//         </RadioGroup>
//       </FormControl>
//       <FormControl component="fieldset">
//         <FormLabel component="legend">Color</FormLabel>
//         <RadioGroup
//           defaultValue={props.color}
//           onChange={(e) => setProp((props) => (props.color = e.target.value))}>
//           <FormControlLabel
//             label="Default"
//             value="default"
//             control={<Radio size="small" color="default" />}
//           />
//           <FormControlLabel
//             label="Primary"
//             value="primary"
//             control={<Radio size="small" color="primary" />}
//           />
//           <FormControlLabel
//             label="Secondary"
//             value="secondary"
//             control={<Radio size="small" color="primary" />}
//           />
//         </RadioGroup>
//       </FormControl>
//     </div>
//   )
// }

export const ButtonDefaultProps = {
  size: "small",
  type: "primary",
  href: "https://www.baidu.com",
}

ButtonAntd.craft = {
  props: ButtonDefaultProps,
  // related: {
  //   settings: ButtonSettings,
  // },
}
