import AnotherApp from './AnotherApp'
import React from 'react'

import {render} from "@testing-library/react"

test('Test AnotherApp Render', () => {

    let { getByText } = render(<AnotherApp />);
    let h1 = getByText(/Hello from React Library/);

    expect(h1).toHaveTextContent("Hello from React Library");
})