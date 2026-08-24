import {
  Badge,
  Button,
  Column,
  Heading,
  Line,
  Meta,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";
import { about, baseURL, home, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="24" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column fillWidth horizontal="center" gap="m" paddingTop="32">
        <Badge
          background="brand-alpha-weak"
          paddingX="12"
          paddingY="4"
          onBackground="neutral-strong"
          textVariant="label-default-s"
          arrow={false}
          href={home.featured.href}
        >
          {home.featured.title}
        </Badge>

        <Heading wrap="balance" variant="display-strong-l" align="center">
          {home.headline}
        </Heading>

        <Text
          wrap="balance"
          onBackground="neutral-weak"
          variant="heading-default-xl"
          align="center"
          maxWidth="m"
        >
          {home.subline}
        </Text>

        <Row gap="12" wrap horizontal="center" paddingTop="12">
          <Button href="/work" variant="primary" size="m" arrowIcon>
            Explore research
          </Button>
          <Button href="/about" variant="secondary" size="m" arrowIcon>
            View profile
          </Button>
          <Button href="/carbon-calculator" variant="tertiary" size="m" arrowIcon>
            Try carbon tool
          </Button>
        </Row>
      </Column>

      <Column fillWidth gap="24">
        <Row fillWidth vertical="center" gap="16">
          <Line />
          <Text onBackground="neutral-weak" variant="label-default-s">
            IMPACT SNAPSHOT
          </Text>
          <Line />
        </Row>
        <Row fillWidth gap="12" s={{ direction: "column" }}>
          <Column flex={1} border="neutral-alpha-weak" radius="l" padding="l" background="surface">
            <Text variant="display-strong-m">R 0.97</Text>
            <Text onBackground="neutral-weak">AI temperature model correlation</Text>
          </Column>
          <Column flex={1} border="neutral-alpha-weak" radius="l" padding="l" background="surface">
            <Text variant="display-strong-m">20k+</Text>
            <Text onBackground="neutral-weak">vlog views from climate outreach</Text>
          </Column>
          <Column flex={1} border="neutral-alpha-weak" radius="l" padding="l" background="surface">
            <Text variant="display-strong-m">100+</Text>
            <Text onBackground="neutral-weak">students reached in disaster education</Text>
          </Column>
        </Row>
      </Column>

      <Column fillWidth gap="24">
        <Row fillWidth horizontal="between" vertical="center">
          <Heading as="h2" variant="display-strong-s">
            Selected work
          </Heading>
          <Button href={work.path} variant="tertiary" size="s" arrowIcon>
            All research
          </Button>
        </Row>
        <Projects range={[1, 3]} />
      </Column>

      <Column fillWidth border="neutral-alpha-weak" radius="l" padding="xl" background="surface">
        <Text variant="label-default-s" onBackground="brand-weak">INTERACTIVE CLIMATE TOOL</Text>
        <Heading as="h2" variant="display-strong-s" marginTop="8">Carbon Footprint Detective</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" marginTop="8">
          Explore an interactive investigation journal that connects everyday choices with CO₂e estimates, hypotheses, and practical climate commitments.
        </Text>
        <Row marginTop="16">
          <Button href="/carbon-calculator" variant="primary" size="m" arrowIcon>Open the tool</Button>
        </Row>
      </Column>

      <Column fillWidth border="brand-alpha-weak" radius="l" padding="xl" background="brand-alpha-weak">
        <Text variant="label-default-s" onBackground="brand-strong">
          CLIMATE × DATA × COMMUNITY
        </Text>
        <Heading as="h2" variant="display-strong-s" marginTop="8">
          Science should be useful.
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" marginTop="8">
          From neural-network climate modeling and PM2.5 sensing to youth climate literacy,
          the goal is the same: make evidence easier to understand, act on, and scale.
        </Text>
      </Column>
    </Column>
  );
}
