import React from "react";
import { Button, Center, VStack, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";

const Login = (): JSX.Element => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [UserName, setUserName] = React.useState("");
    const [PassWord, setPassWord] = React.useState("");

    const ConnectClick = async () => {

    }

    const btn = (UserName === "" || PassWord === "") ?
        <Button disabled width='400px'>Connect</Button> :
        <Button onClick={ConnectClick} width='400px'>Connect</Button>

    return (
        <>
            <Center h='300px'>
                <VStack>
                    <Text fontSize='3xl' as='i'>LOGIN</Text>
                    <Input variant='outline' placeholder='Your Name' onChange={(e) => setUserName(e.target.value)} />
                    <InputGroup size='md'>
                        <Input variant='outline'
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Password'
                            onChange={(e) => setPassWord(e.target.value)}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {btn}
                </VStack>
            </Center>
        </>
    )
}

export default Login;