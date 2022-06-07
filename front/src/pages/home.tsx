import React from "react";
import { Button, Center, HStack, Link } from "@chakra-ui/react";

const Home = (): JSX.Element => {
    return (
        <>
            <Center h='250px'>
                <HStack>
                    <Link href="/register">
                        <Button>Register</Button>
                    </Link>
                    <Link href="/login">
                        <Button>Login</Button>
                    </Link>
                </HStack>
            </Center>

        </>
    )
}

export default Home;