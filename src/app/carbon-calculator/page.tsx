import { Button, Column, Heading, Meta, Row, Text } from "@once-ui-system/core";
import { baseURL, home, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Carbon Footprint Detective — Interactive Climate Tool",
    description:
      "Interactive carbon-literacy and footprint calculator by I Putu Arisgunarta.",
    baseURL,
    path: "/carbon-calculator",
  });
}

export default function CarbonCalculatorPage() {
  return (
    <Column maxWidth="xl" fillWidth gap="l" paddingY="24" horizontal="center">
      <Row fillWidth horizontal="between" vertical="center" gap="16" s={{ direction: "column" }}>
        <Column gap="4">
          <Text variant="label-default-s" onBackground="brand-weak">CLIMATE × DATA × COMMUNITY</Text>
          <Heading variant="heading-strong-xl">Carbon Footprint Detective</Heading>
          <Text onBackground="neutral-weak">An interactive climate-literacy tool by {person.name}.</Text>
        </Column>
        <Button href={home.path} variant="secondary" size="m" arrowIcon>Back to portfolio</Button>
      </Row>

      <Column fillWidth border="neutral-alpha-weak" radius="l" overflow="hidden" background="surface">
        <iframe
          title="Carbon Footprint Detective — I Putu Arisgunarta"
          src="/carbon-calculator.html"
          style={{ width: "100%", minHeight: "calc(100vh - 180px)", border: 0 }}
          loading="eager"
        />
      </Column>
    </Column>
  );
}
