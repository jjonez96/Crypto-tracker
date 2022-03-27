import React from "react";
import { render } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import NavBar from "./components/Navbar/NavBar";
import NewsPage from "./pages/News/NewsPage";

configure({ adapter: new Adapter() });

describe("Testing Navbar", () => {
  it("Should return one div", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
describe("Testing Logo", () => {
  it("Should render Bitcoin Logo", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("FaBitcoin")).toHaveLength(1);
  });
});
describe("Testing icons", () => {
  it("Should render CgMenuRight icon", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("CgMenuRight")).toHaveLength(1);
  });
});
describe("Testing icons", () => {
  it("Should render CgClose icon when clicked", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("CgClose")).toHaveLength(0);
  });
});
test("There is text Loading...", () => {
  const { getByText } = render(<NewsPage />);
  const content = getByText(/Loading.../i);
  expect(content).toBeInTheDocument;
});
