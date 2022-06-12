import React from "react";
import axios from 'axios';
import { Button, Center, VStack, Input, InputGroup, InputRightElement, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


function Register() {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const [UserName, setUserName] = React.useState("");
    const [PassWord, setPassWord] = React.useState("");
    const [ConfirmPass, setConfirmPass] = React.useState("");
    const navigate = useNavigate();
    const toast = useToast();

    const ClickRegister = async () => {
        const user = {
            username: UserName,
            password: PassWord
        };
        try {
            const responce = await axios.post("http://localhost:8080/create/user", user);
            if (responce.status === 200) {
                navigate("/Login");
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                }
        } catch (error) {
            console.log(error);
        }
    }


    var btn = (UserName === "" || PassWord === "" || ConfirmPass === "") || ConfirmPass !== PassWord ?
        <Button disabled width='400px'>Register</Button> :
        <Button onClick={ClickRegister} width='400px'>Register</Button>

    return (
        <>
            <Center h='300px'>
                <VStack>
                    <Text fontSize='3xl' as='i'>REGISTER</Text>
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
                    <InputGroup size='md'>
                        <Input variant='outline'
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Password'
                            onChange={(e) => setConfirmPass(e.target.value)}
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

export default Register;