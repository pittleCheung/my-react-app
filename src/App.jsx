import { Editor, Frame, Element, useNode, useEditor } from "@craftjs/core"
import { Button } from "./Button"
import { ButtonAntd } from "./ButtonAntd"
import { Container } from "./Container"
import { Text } from "./Text"
import { Grid } from "@material-ui/core"
import { SettingsPanel } from "./SettingsPanel"
// import("../meaterials").then((res) => {
//   console.log(res)
// })

const TextComponent = ({ text }) => {
  const {
    connectors: { connect, drag },
    isClicked,
    setProp,
  } = useNode((state) => ({
    isClicked: state.events?.selected,
  }))

  console.log("isClicked====>", isClicked)

  return (
    <div ref={(dom) => connect(drag(dom))}>
      <h2>{text}</h2>
      {isClicked ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setProp(e.target.value)}
        />
      ) : (
        ""
      )}
    </div>
  )
}

const ContainerDemo = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode()

  return (
    <div
      ref={(dom) => {
        console.log(drag(dom), "drag(dom)1")
        // connect(drag(dom))
      }}>
      {children}
    </div>
  )
}

const Hero = ({ background }) => {
  return (
    <div style={{ background }}>
      <Element is={Text} text="Hero Title" id="title_text" />
      {/* <Text text="Hero Title" /> */}
    </div>
  )
}

const TextTest = ({ text, fontSize }) => {
  const {
    connectors: { connect, drag },
    setProp,
    isClicked,
  } = useNode((node) => ({
    isClicked: node.events.selected,
  }))

  console.log("isClicked====>", isClicked)

  return (
    <span
      ref={(dom) => connect(drag(dom))}
      style={{ fontSize }}
      contentEditable={isClicked}
      onKeyUp={(e) => {
        setProp((props) => {
          props.text = e.target.innerText
        })
      }}>
      {text}
    </span>
  )
}

function App() {
  return (
    <>
      <div>
        <header>Some fancy header or whatever</header>
        <Editor
          resolver={{
            TextComponent,
            Text,
            TextTest,
            Container,
            ContainerDemo,
            Button,
            ButtonAntd,
            Hero,
            DragToCreate,
          }}>
          <Frame>
            <Element
              is={Container}
              padding={5}
              background="#eeeeee"
              data-cy="root-container"
              canvas>
              <Button text="Click me" size="small" data-cy="frame-button" />
              <Button text="Click me2" size="small" data-cy="frame-button" />
              <ButtonAntd text="这是一个antd的按钮"></ButtonAntd>
              <Text
                size="small"
                text="It's me again!"
                data-cy="frame-container-text"
              />
              <TextComponent text="I'm already rendered here" />
              <div>
                <div>111</div>
                <div>222</div>
                <div>3333</div>
              </div>
              <Element is="div" canvas>
                <div style={{ background: "#333" }}>zhangsan</div>
                <div>lisi</div>
              </Element>

              <Element is={ContainerDemo} canvas>
                <ContainerDemo>
                  <h1>ContainerDemo----h1</h1>
                  <h2>ContainerDemo----h2</h2>
                </ContainerDemo>
                <Element is="div" canvas>
                  <h1>Element----h1</h1>
                  <h2>Element----h2</h2>
                </Element>
              </Element>

              <TextTest text={"hello world"} fontSize={20} />

              <Hero />

              <Element is="div" canvas>
                <DragToCreate id="pittle" />
              </Element>
            </Element>
          </Frame>
          <Grid>
            <SettingsPanel />
          </Grid>
        </Editor>
      </div>
    </>
  )
}

const DragToCreate = () => {
  const { query } = useEditor()
  return (
    <div>
      <a
        onClick={() => {
          console.log(query.deserialize())
        }}>
        Click me
      </a>
    </div>
  )
}

export default App
