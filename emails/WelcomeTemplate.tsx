import React, { CSSProperties } from 'react'
import {Html,Body,Tailwind,Container,Text,Link,Preview} from "@react-email/components";


const WelcomeTemplate = ({name}: {name:string}) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
        <Tailwind >
            <Body style={body}>
                <Container>
                    <Text style={heading}>Hello {name}</Text>
                    <Link className='font-extralight text-xs' href='https://www.codewithmosh.com'>www.codewithmosh.com</Link>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
};

const body: CSSProperties = {
    background: '#fff'
}

const heading: CSSProperties ={
    fontSize: '32px'
}

export default WelcomeTemplate
