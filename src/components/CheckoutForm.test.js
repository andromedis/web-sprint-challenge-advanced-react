import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Dummy values for testing inputs
const dummyValues = {
    firstName: 'Abby',
    lastName: 'Caraway',
    address: '909 Main St',
    city: 'Pheonix',
    state: 'AZ',
    zip: '85029',
};

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // Renders component
    render(<CheckoutForm />);

    // Gets header message and confirms it is in the document
    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    // Renders component
    render(<CheckoutForm />);

    // Gets inputs and button
    const firstNameInput = screen.getByLabelText('First Name:');
    const lastNameInput = screen.getByLabelText('Last Name:');
    const addressInput = screen.getByLabelText('Address:');
    const cityInput = screen.getByLabelText('City:');
    const stateInput = screen.getByLabelText('State:');
    const zipInput = screen.getByLabelText(/zip:/i);
    
    const checkoutButton = screen.getByRole('button');

    // User events to type dummy data in inputs and click button
    userEvent.type(firstNameInput, dummyValues.firstName);
    userEvent.type(lastNameInput, dummyValues.lastName);
    userEvent.type(addressInput, dummyValues.address);
    userEvent.type(cityInput, dummyValues.city);
    userEvent.type(stateInput, dummyValues.state);
    userEvent.type(zipInput, dummyValues.zip);

    userEvent.click(checkoutButton);

    // Gets success message and confirms it is in the document
    const successMessage = screen.queryByTestId('successMessage');
    expect(successMessage).toBeInTheDocument();

    // Checks that success message contains static message content
    expect(successMessage.textContent).toContain('You have ordered some plants! Woo-hoo!');
    expect(successMessage.textContent).toContain('Your new green friends will be shipped to:');

    // Checks that success message contains inputted dummy data
    expect(successMessage.textContent).toContain(dummyValues.firstName);
    expect(successMessage.textContent).toContain(dummyValues.lastName);
    expect(successMessage.textContent).toContain(dummyValues.address);
    expect(successMessage.textContent).toContain(dummyValues.city);
    expect(successMessage.textContent).toContain(dummyValues.state);
    expect(successMessage.textContent).toContain(dummyValues.zip);
});
