import React, { useRef, useEffect } from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';


const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        
        {Array.from(Array(10).keys()).map(n => (
        <ChannelMessage
          author="Igor Becker"
          date="22/06/2020"
          content="Hello World!"
        />))}

        <ChannelMessage
          author="Nilton"
          date="22/06/2020"
          content={
            <>
              <Mention>@Igor Becker</Mention>, me ajuda no TLOU2
            </>
          }
          hasMention={true}
          isBot={true}
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;