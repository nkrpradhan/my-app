import { render, screen } from "@testing-library/react";
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Login from "./login";
import {BrowserRouter} from 'react-router-dom';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
it('renders login component',()=>{
    act(()=>{
        render(<Login/>,{wrapper: BrowserRouter})
    })
})