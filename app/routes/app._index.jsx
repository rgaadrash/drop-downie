// import { useEffect } from "react";
// import { useFetcher } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
  Divider,
} from "@shopify/polaris";
import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import "../app_index.css";
// import { json } from "stream/consumers";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }) => {
  const {session} = await authenticate.admin(request);

  const SHOPIFY_ACCORDIEXTENSION_ID = process.env.SHOPIFY_ACCORDIEXTENSION_ID;
  return json({shop: session.shop , SHOPIFY_ACCORDIEXTENSION_ID});
};


export default function Index() {
  
  const {shop, SHOPIFY_ACCORDIEXTENSION_ID} = useLoaderData();

  return (
    <Page>
      {/* <TitleBar title="Remix app template">
        <button variant="primary" onClick={generateProduct}>
          Generate a product
        </button>
        <button variant="primary">About</button>
      </TitleBar> */}
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <BlockStack gap="500">
              <BlockStack gap="500">
                <div className="main-title">
                  <Text as="h1" variant="heading2xl">
                    Welcome to Accordie 🎉
                  </Text>
                </div>
              </BlockStack>
            </BlockStack>

            <BlockStack gap="300">
              <Card>
                <BlockStack gap="500">
                  {/* <BlockStack gap="200">
                    <Text as="h2" variant="headingMd">
                      Congrats on creating a new Shopify app 🎉
                    </Text>
                    <Text variant="bodyMd" as="p">
                      This embedded app template uses{" "}
                      <Link
                        url="https://shopify.dev/docs/apps/tools/app-bridge"
                        target="_blank"
                        removeUnderline
                      >
                        App Bridge
                      </Link>{" "}
                      interface examples like an{" "}
                      <Link url="/app/additional" removeUnderline>
                        additional page in the app nav
                      </Link>
                      , as well as an{" "}
                      <Link
                        url="https://shopify.dev/docs/api/admin-graphql"
                        target="_blank"
                        removeUnderline
                      >
                        Admin GraphQL
                      </Link>{" "}
                      mutation demo, to provide a starting point for app
                      development.
                    </Text>
                  </BlockStack> */}
                  
                  {/* Custom code */}
                  <BlockStack gap="500">
                    <Text as="h2" variant="headingLg" className="main-title">
                      Accordions
                    </Text>
                    <InlineStack align="space-between">
                      <Text as="h2" variant="headingMd">
                        Add as a new section
                      </Text>
                      <Button
                        primary
                        onClick={() => {
                          window.open(`https://${shop}/admin/themes/current/editor?template=product&addAppBlockId=${SHOPIFY_ACCORDIEXTENSION_ID}/accordion&target=newAppsSection`);
                        }}
                      >
                        Use Accordions
                      </Button>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="h2" variant="headingMd">
                        Add as a new block
                      </Text>
                      <Button
                        primary
                        onClick={() => {
                          window.open(`https://${shop}/admin/themes/current/editor?template=product&addAppBlockId=${SHOPIFY_ACCORDIEXTENSION_ID}/accordion&target=mainSection`);
                        }}
                      >
                        Use Accordions
                      </Button>
                    </InlineStack>

                    <Text variant="bodyMd" as="p">
                      Click the above button to use accordions on product page.
                      You can customize the icon and its position in the app settings.
                    </Text>
                  </BlockStack>
                </BlockStack>
              </Card>
              
              <Card>
                <BlockStack gap="500">
                  <BlockStack gap="500">
                    <InlineStack align="space-between">
                      <Text as="h2" variant="headingLg">
                        Floating Icon
                      </Text>
                      <Button
                        primary
                        onClick={() => {
                          window.open(`https://${shop}/admin/themes/current/editor?context=apps&activateAppId=${SHOPIFY_ACCORDIEXTENSION_ID}/customer_support`);
                        }}
                      >
                        Enable Floating Icon
                      </Button>
                    </InlineStack>

                    <Text variant="bodyMd" as="p">
                      Click the above button to enable Floating icon. Enabling this will add a floating icon to the corner of the page.
                      You can customize the icon and its position in the app settings.
                    </Text>
                  </BlockStack>
                </BlockStack>
              </Card>

              <Card>
                <BlockStack gap="500">     
                  <BlockStack gap="500">
                    <InlineStack align="space-between">
                      <Text as="h2" variant="headingLg">
                        Scroll to Top
                      </Text>
                      <Button
                        primary
                        onClick={() => {
                          window.open(`https://${shop}/admin/themes/current/editor?context=apps&activateAppId=${SHOPIFY_ACCORDIEXTENSION_ID}/move_top`);
                        }}
                      >
                        Enable Scroll to Top
                      </Button>
                    </InlineStack>

                    <Text variant="bodyMd" as="p">
                      Click the above button to enable Scroll to top button. Enabling this will add a floating icon to the corner of the page.
                      You can customize the icon and its position in the app settings.
                    </Text>
                  </BlockStack>

                </BlockStack>
              </Card>
              </BlockStack>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <BlockStack gap="500">
              <Card>
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    App template specs
                  </Text>
                  <BlockStack gap="200">
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">
                        Framework
                      </Text>
                      <Link
                        url="https://remix.run"
                        target="_blank"
                        removeUnderline
                      >
                        Remix
                      </Link>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">
                        Database
                      </Text>
                      <Link
                        url="https://www.prisma.io/"
                        target="_blank"
                        removeUnderline
                      >
                        Prisma
                      </Link>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">
                        Interface
                      </Text>
                      <span>
                        <Link
                          url="https://polaris.shopify.com"
                          target="_blank"
                          removeUnderline
                        >
                          Polaris
                        </Link>
                        {", "}
                        <Link
                          url="https://shopify.dev/docs/apps/tools/app-bridge"
                          target="_blank"
                          removeUnderline
                        >
                          App Bridge
                        </Link>
                      </span>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">
                        API
                      </Text>
                      <Link
                        url="https://shopify.dev/docs/api/admin-graphql"
                        target="_blank"
                        removeUnderline
                      >
                        GraphQL API
                      </Link>
                    </InlineStack>
                  </BlockStack>
                </BlockStack>
              </Card>
              <Card>
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    Next steps
                  </Text>
                  <List>
                    <List.Item>
                      Build an{" "}
                      <Link
                        url="https://shopify.dev/docs/apps/getting-started/build-app-example"
                        target="_blank"
                        removeUnderline
                      >
                        {" "}
                        example app
                      </Link>{" "}
                      to get started
                    </List.Item>
                    <List.Item>
                      Explore Shopify’s API with{" "}
                      <Link
                        url="https://shopify.dev/docs/apps/tools/graphiql-admin-api"
                        target="_blank"
                        removeUnderline
                      >
                        GraphiQL
                      </Link>
                    </List.Item>
                  </List>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}