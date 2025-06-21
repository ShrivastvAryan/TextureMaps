'use client'
import { Box, Container, Heading, Text, VStack, HStack, Divider } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Box
      minH="100vh"
      bg="gray.900"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Container maxW="container.md" textAlign="center" zIndex={1}>
        <VStack spacing={12}>
          {/* Main heading */}
          <VStack spacing={6}>
            <Heading
              as="h1"
              size="4xl"
              color="white"
              fontWeight="light"
              letterSpacing="wider"
              fontFamily="mono"
            >
              COMING SOON
            </Heading>
            
            <Divider w="100px" borderColor="gray.600" />
            
            <Text
              fontSize="lg"
              color="gray.400"
              maxW="500px"
              lineHeight="tall"
              fontWeight="normal"
              fontFamily="mono"
            >
              We're crafting something extraordinary. 
              A new experience is on the horizon.
            </Text>
          </VStack>

          {/* Feature highlights */}
          <HStack spacing={12} mt={8} flexWrap="wrap" justify="center">
            <VStack
              spacing={3}
              minW="180px"
              p={6}
              border="1px solid"
              borderColor="gray.700"
              borderRadius="md"
              bg="gray.800"
              _hover={{ 
                borderColor: "gray.500",
                transform: 'translateY(-2px)',
                transition: 'all 0.2s ease'
              }}
            >
              <Text fontSize="2xl" color="gray.300">01</Text>
              <Text color="white" fontWeight="medium" fontSize="sm" letterSpacing="wide">
                INNOVATION
              </Text>
              <Text color="gray.500" fontSize="xs" textTransform="uppercase" letterSpacing="wider">
                Next Generation
              </Text>
            </VStack>

            <VStack
              spacing={3}
              minW="180px"
              p={6}
              border="1px solid"
              borderColor="gray.700"
              borderRadius="md"
              bg="gray.800"
              _hover={{ 
                borderColor: "gray.500",
                transform: 'translateY(-2px)',
                transition: 'all 0.2s ease'
              }}
            >
              <Text fontSize="2xl" color="gray.300">02</Text>
              <Text color="white" fontWeight="medium" fontSize="sm" letterSpacing="wide">
                ELEGANCE
              </Text>
              <Text color="gray.500" fontSize="xs" textTransform="uppercase" letterSpacing="wider">
                Minimal Design
              </Text>
            </VStack>

            <VStack
              spacing={3}
              minW="180px"
              p={6}
              border="1px solid"
              borderColor="gray.700"
              borderRadius="md"
              bg="gray.800"
              _hover={{ 
                borderColor: "gray.500",
                transform: 'translateY(-2px)',
                transition: 'all 0.2s ease'
              }}
            >
              <Text fontSize="2xl" color="gray.300">03</Text>
              <Text color="white" fontWeight="medium" fontSize="sm" letterSpacing="wide">
                PERFORMANCE
              </Text>
              <Text color="gray.500" fontSize="xs" textTransform="uppercase" letterSpacing="wider">
                Optimized
              </Text>
            </VStack>
          </HStack>

          {/* Call to action */}
          <VStack spacing={6} mt={12}>
            <Text
              color="gray.400"
              fontSize="sm"
              fontWeight="normal"
              fontFamily="mono"
              letterSpacing="wide"
            >
              STAY UPDATED
            </Text>
            
            <Box
              as="button"
              bg="transparent"
              color="white"
              px={8}
              py={3}
              border="1px solid"
              borderColor="gray.600"
              borderRadius="none"
              fontWeight="normal"
              fontSize="sm"
              fontFamily="mono"
              letterSpacing="wide"
              textTransform="uppercase"
              _hover={{
                borderColor: "white",
                bg: "white",
                color: "gray.900",
                transition: 'all 0.3s ease'
              }}
              _active={{
                transform: 'scale(0.98)'
              }}
            >
              Notify Me
            </Box>
          </VStack>

          {/* Footer */}
          <VStack spacing={2} mt={16}>
            <Divider w="200px" borderColor="gray.700" />
            <Text
              color="gray.600"
              fontSize="xs"
              fontFamily="mono"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              © 2024 TextureMaps
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home
