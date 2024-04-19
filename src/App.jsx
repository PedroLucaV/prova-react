import './App.css'
import Container from './Container/Container';
import ContainerModal from './ContainerModal/ContainerModal';
import InputModal from "./InputModal/InputModal"
import Button from './ButtonModal/Button';
import TextSide from './TextSide/TextSide';
import LinkModal from './LinkModal/LinkModal';

const App = () => {
  return (
    <>
        <span className='body'>
          <TextSide Title={"Learn to code by watching others"} Paragraph={"See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable"}/>
          <div className='LeftSide'>
            <ContainerModal TextFocus={"Try it free for 7 days"}/>
            <Container>
              <InputModal placeH={"First Name"} />
              <InputModal placeH={"Last Name"} />
              <InputModal placeH={"Email Address"} />
              <InputModal placeH={"Password"} />
              <Button ModalB={"claim your free trial"} />
              <LinkModal Link={"Terms and Services"}/>
            </Container>
          </div>
        </span>
      </>
      )
}

      export default App
