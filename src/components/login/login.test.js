import React from "react";
import Login from "./login";
import axios from "axios";
import { render, screen } from "../../test-utils";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
describe("scenarios for login", () => {
  it("renders login component", () => {
    render(<Login />);
    const loginTitle = screen.getByText("Login page");
    expect(loginTitle).toBeInTheDocument();
  });
  it("empty username",  () => {
    render(<Login />);
    const userNameField = screen.getByLabelText(/user Name/i);
    const passwordField = screen.getByLabelText(/password/i);
    userEvent.type(userNameField, "");
    userEvent.type(passwordField, "rrr");
    userEvent.click(screen.getByText("Enter"));

    expect(
      screen.getByText("Username or password is empty")
    ).toBeInTheDocument();
  });
  it("empty password", () => {
    render(<Login />);
    const userNameField = screen.getByLabelText(/user Name/i);
    const passwordField = screen.getByLabelText(/password/i);
    userEvent.type(userNameField, "rrrr");
    userEvent.type(passwordField, "");
    userEvent.click(screen.getByText("Enter"));

    expect(
      screen.getByText("Username or password is empty")
    ).toBeInTheDocument();
  });
  it("enter the right username and password", async () => {
    const response = {
      status: 200,
    };
    axios.post.mockResolvedValueOnce(response);
    render(<Login />);
    const userNameField = screen.getByLabelText(/user Name/i);
    const passwordField = screen.getByLabelText(/password/i);
    userEvent.type(userNameField, "test");
    userEvent.type(passwordField, "test123");
    userEvent.click(screen.getByText("Enter"));

    const params = new URLSearchParams();
    params.append("username", "test");
    params.append("password", "test123");
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "https://reactlogin-service.herokuapp.com/login",
      params
    );
  });

  it("enter wrong username and password", async () => {
    const errorresponse = {
      response: {
        status: 400,
        data: "Please enter the correct credentials.",
      },
    };
    axios.post.mockRejectedValueOnce(errorresponse);
    render(<Login />);
    const userNameField = screen.getByLabelText(/user Name/i);
    const passwordField = screen.getByLabelText(/password/i);
    userEvent.type(userNameField, "rrtt");
    userEvent.type(passwordField, "rrr");
    userEvent.click(screen.getByText("Enter"));

    const params = new URLSearchParams();
    params.append("username", "rrtt");
    params.append("password", "rrr");
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "https://reactlogin-service.herokuapp.com/login",
      params
    );
    //global.alert = jest.fn();
    // const alertText = await screen.findByText(
    //   "Please enter the correct credentials."
    // );
    await screen.findByText("Please enter the correct credentials.");
    // expect(alertText).toBeInTheDocument();
    //expect(global.alert).toHaveBeenCalled();
  });
});
