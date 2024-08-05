import NavBar from "../../app/components/NavBar";
import { render, screen } from "@testing-library/react";
import {
  mockSessionAuthenticated,
  mockSessionLoading,
  mockSessionUnauthenticated,
} from "../utils";
import React from "react";

describe("NavBar", () => {
  it("should render the Authenticating message while fetching the auth status", () => {
    mockSessionLoading({
      status: "loading",
      data: null,
    });
    render(<NavBar />);

    expect(screen.getByText(/authenticating/i)).toBeInTheDocument();
  });

  it("should show the login button when not authenticated", () => {
    mockSessionUnauthenticated({
      status: "unauthenticated",
      data: null,
    });
    render(<NavBar />);
    const loginButton = screen.getByText(/login/i);

    expect(loginButton).toBeInTheDocument();
  });

  it("should show the unauthenticated navbar when not authenticated", () => {
    mockSessionUnauthenticated({
      status: "unauthenticated",
      data: null,
    });
    render(<NavBar />);

    expect(screen.getByRole("link", { name: /login/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /logout/i })
    ).not.toBeInTheDocument();
  });

  it("should show the authenticated navbar when authenticated", () => {
    mockSessionAuthenticated({
      status: "authenticated",
      data: {
        expires: "",
        user: {
          name: "Robyn Fenty",
        },
      },
    });
    render(<NavBar />);
    const loginButton = screen.queryByRole("link", { name: /login/i });
    expect(loginButton).not.toBeInTheDocument();

    expect(screen.getByText(/robyn fenty/i)).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /logout/i })).toBeInTheDocument();
  });
});
