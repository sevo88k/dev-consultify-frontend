import App from "./App";
import { render, screen } from '@testing-library/react';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import AdminForgotPassword from "./Admin/components/authentication/forgotpassword/AdminForgotPassword";
// import UserLogin from "./UserPanel/components/userlogin/UserLogin";
// import { BrowserRouter, MemoryRouter } from "react-router-dom";
// import Register from "./UserPanel/components/register/Register";
// import userEvent from "@testing-library/user-event";
// import { act,NameConsumer } from "react-dom/test-utils";

// single singel test case----->
// describe("userlogin", () => {
//   it("takes input for logging in User-Pannel", () => {
//     render(<UserLogin /> , {wrapper:BrowserRouter});
//     const tt = screen.getByPlaceholderText("Email");
//     expect(tt).toBeTruthy();
//   });
// });
// describe("userlogin/password", () => {
//   it("takes input for logging in User-Pannel", () => {
//     render(<UserLogin /> , {wrapper:BrowserRouter});
//     const P = screen.getByPlaceholderText("Login Password");
//     expect(P).toBeTruthy();
//   });
// });
// combine test case---->
// describe("userlogin/email/password", () => {
//   it("take input email", () => {
//     render(<UserLogin />, { wrapper: BrowserRouter });
//     const E = screen.getByPlaceholderText("Email");
//     expect(E).toBeTruthy();
//   });
//   it("takes input password", () => {
//     render(<UserLogin />, { wrapper: BrowserRouter });
//     const P = screen.getByPlaceholderText("Login Password");
//     expect(P).toBeTruthy();
//   });
  // test("check true or false", async () => {
  //   render(<UserLogin />, { wrapper: BrowserRouter });
  //   const checkboxLabel = screen.getByLabelText("checkbox");
  // expect(screen.getByLabelText(/checkbox/)).toBeTruthy()
  // expect(checkboxLabel).not.toBeChecked();
  // await act(() => fireEvent.click(checkboxLabel))
  // await act( async () => userEvent.click(checkboxLabel))
  // expect(checkboxLabel).toBeChecked();

  // expect(checkboxLabel).toHaveStyle("display: none");
  // expect(screen.getByRole("checkbox")).toBeChecked();
  // expect(checkboxLabel).toHaveStyle("display: block");
  // });
//   it("checks if the page is routed to register", async () => {
//     render(
//       <BrowserRouter>
//         <UserLogin />
//       </BrowserRouter>
//     );
//     const registerBtn = screen.getByLabelText("registerToday")
//     expect(registerBtn).toBeTruthy()
// });

 
// describe("login/to/register", () => {
  // it("checks if the page is routed to register", async () => {
  //   render(
  //     <BrowserRouter>
  //       <UserLogin />
  //     </BrowserRouter>
  //   );
  //   const registerBtn = screen.getByLabelText("registerToday")
  //   expect(registerBtn).toBeTruthy()
    // await act( async () => userEvent.click(registerBtn))
    // waitFor(() => expect(screen.getByLabelText("registerPage")).toBeTruthy())
  //  await fireEvent.click(registerBtn)
  //   waitFor (() => {
  //     expect(screen.getByLabelText("registerPage")).toBeTruthy()
  //   })


//   });
// });

// test("userpass", () => {
//   it("takes input ", () => {
//     render(<UserLogin />);
//     const tt = screen.getByPlaceholderText("password");
//     expect(tt).toBeTruthy();
//   });
// });
