import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { InputMyTweets } from "../../Pages/Tweets/InputMyTweets";

describe("FormCoding", () => {
  test("submit button", () => {
    render(<InputMyTweets />);

    fireEvent.input(screen.getByRole("textbox", { name: /link/i }), {
      target: {
        value:
          "https://twitter.com/riderkulineran/status/1589888158397001729?s=67&t=CQAMYaJA_RajOTotm2l2PA",
      },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /description/i }), {
      target: { value: "Resep Kare" },
    });

    expect(screen.getByLabelText(/Twitter Link/)).toHaveValue(
      "https://twitter.com/riderkulineran/status/1589888158397001729?s=67&t=CQAMYaJA_RajOTotm2l2PA"
    );
    expect(screen.getByLabelText(/Description/)).toHaveValue("Resep Kare");

    fireEvent.click(screen.getByRole("button"));
    // fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByLabelText(/Twitter Link/)).toHaveValue("");
    expect(screen.getByLabelText(/Description/)).toHaveValue("");
  });
});
