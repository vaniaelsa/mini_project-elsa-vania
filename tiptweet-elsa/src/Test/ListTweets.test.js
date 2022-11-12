import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_TWEET } from "../../GraphQL/mygraphql";
import { ListTweets } from "../../Components/Tweets/ListTweets";
const mocks = [
  {
    request: {
      query: GET_TWEET,
      variables: {
        link: "https://twitter.com/drumbrisix/status/1587324987551416322?s=67&t=Hl9S-_T56oRpInzUlL3NDw ",
      },
    },
    result: {
      data: {
        tweet: {
          id: "3",
          link: "https://twitter.com/drumbrisix/status/1587324987551416322?s=67&t=Hl9S-_T56oRpInzUlL3NDw",
          description: "PB",
          category: "Promo",
        },
      },
    },
  },
];

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ListTweets name="https://twitter.com/drumbrisix/status/1587324987551416322?s=67&t=Hl9S-_T56oRpInzUlL3NDw" />
    </MockedProvider>
  );

  expect(await screen.findByText("Loading...")).toBeInTheDocument();
});
