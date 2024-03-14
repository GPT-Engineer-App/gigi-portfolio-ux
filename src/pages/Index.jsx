import React from "react";
import { Box, Heading, Text, Image, Grid, Link, Container, Flex, Spacer } from "@chakra-ui/react";
import { FaLinkedin, FaDribbble, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "Fintech App",
    description: "Designed a mobile banking app focused on simplifying personal finance management.",
    image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYXBwJTIwdXglMjBkZXNpZ258ZW58MHx8fHwxNzEwNDE1MTUxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "E-commerce Website",
    description: "Revamped the user experience of an e-commerce website, improving conversion rates.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwdXglMjBkZXNpZ258ZW58MHx8fHwxNzEwNDE1MTUxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
  {
    title: "Healthcare Dashboard",
    description: "Created an intuitive dashboard for healthcare providers to manage patient data.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGFzaGJvYXJkJTIwdXglMjBkZXNpZ258ZW58MHx8fHwxNzEwNDE1MTUxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    link: "#",
  },
];

const Index = () => {
  return (
    <Box>
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="2xl">
              Gigi Johnson
            </Heading>
            <Spacer />
            <Link href="#" mr={4}>
              <FaLinkedin />
            </Link>
            <Link href="#" mr={4}>
              <FaDribbble />
            </Link>
            <Link href="#">
              <FaEnvelope />
            </Link>
          </Flex>
          <Text fontSize="2xl" mt={6}>
            UX Designer crafting delightful digital experiences
          </Text>
        </Container>
      </Box>

      <Container maxW="container.lg" my={20}>
        <Heading as="h2" size="xl" mb={10}>
          Featured Projects
        </Heading>

        <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={8}>
          {projects.map((project) => (
            <Link href={project.link} key={project.title}>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden" _hover={{ shadow: "lg" }}>
                <Image src={project.image} alt={project.title} />
                <Box p={6}>
                  <Heading as="h3" size="lg" mb={2}>
                    {project.title}
                  </Heading>
                  <Text>{project.description}</Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;
