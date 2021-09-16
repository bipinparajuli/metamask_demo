import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./component/Layout";
import ConnectButton from "./component/ConnectButton";

export default function App() {
  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton />
      </Layout>
    </ChakraProvider>
  )
}