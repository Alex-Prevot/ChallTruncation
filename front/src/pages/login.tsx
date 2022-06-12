import React from "react";
import axios from 'axios';
import { Button, Center, VStack, Input, InputGroup, InputRightElement, Text, useToast} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const Login = (): JSX.Element => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [UserName, setUserName] = React.useState("");
    const [PassWord, setPassWord] = React.useState("");
    const navigate = useNavigate();
    const toast = useToast();

    const ConnectClick = async () => {
        const user = {
            username: UserName,
            password: PassWord,
        };
        try {
            const responce = await axios.post("http://localhost:8080/login/user", user);
            if (responce.status === 200) {
                navigate("/Connect");
                toast({
                    title: 'Account created.',
                    description: "You are login",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
            }
        } catch (err) {
            console.error(err);
        }
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