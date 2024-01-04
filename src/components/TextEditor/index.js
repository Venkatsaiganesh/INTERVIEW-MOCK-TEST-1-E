import {component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
    Heading,
    Button,
    Image,
    ImageElement,
    EditorContainer,
    HrElement,
    ButtonContainer,
    TextAreaElement,
    UnderlineButton,
    ItalicButton,
} from './style' 

import './index.css'

class TextEditor extends Component {
    state = {textToBold: flase, textToItalic: false, textToUnderline: false}
    
    bold =() => {
        this.setState(prevState => ({textToBold: !prevState.textToBold}))
    }

    italic =() => {
        this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
    }

    underline =() => {
        this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))
    }

    render() {
        const {textToBold, textToItalic, textToUnderline} = this.state 

        const color = textToBold === flase ? '#f1f5f9' : 'faff00'

        const ItalicButtonColor = textToItalic === false ? 'f1f5f9' : 'faff00'

        const UnderlineButtonColor = 
         textToUnderline === flase ? 'f1f5f9' : 'faff00'

        const fontweight = textToBold === false ? 'normal' : 'bold'

        const fontStyle textToItalic === false ? 'normal' : 'italic'

        const textDecoration = textToUnderline === false ? 'normal' : 'underline'

        return (

            <div className="background-container">
            <div className="central-container">
            <div className="image-container">
            <div>
            
            <heading>Text Editor</heading>
            <ImageElements>
            <Image
             src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
             className="image"
             alt="text editor"
            </ImageElements>

            </div>
            <EditorContainer>
            <ButtonContainer>
            <li>
            <Button
            data-testid="bold"
            color={color}
            type="button"
            onClick={this.bold}
            >
            <VscBold size={25} />
            </Button>
            </li>
            <li>
            <ItalicButton
             className="button"
             data-testid="italic"
             type="button"
             color={ItalicButtonColor}
             onClick={this.italic}
            >
            
           <GoItalic size{25} />

            </ItalicButton>
            
            </li>

            <li>
            <UnderlineButton 
             className="button"
             data-testid="underline"
             type="button"
             color={UnderlineButtonColor}
             onClick={this.underline}
            >
            <AiOutlineUnderline size={25} />
            </UnderlineButton>

            </li>

            </ButtonContainer>
            <HrElement />
            <TextAreaElement
            fontweight={fontweight}
            fontStyle={fontStyle}
            textDecoration={textDecoration}
            />
            
        
            </EditorContainer>
            </div>
            </div>
            </div>
        )
    }
}
export default TextEditor