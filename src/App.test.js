import React from "react";
import { render } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import NavBar from "./components/Navbar/NavBar";
import CryptoPage from "./pages/CryptoComponents/CryptoPage";
import PortfolioPage from "./pages/CryptoComponents/PortfolioPage";
import BackToTop from "./components/BackToTop";
import NewsPage from "./pages/NewsPage";
import LoginPage from "./pages/Login/LoginPage";

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
  it("Should render FaBars icon", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("FaBars")).toHaveLength(1);
  });
});
describe("Testing icons", () => {
  it("Should render FaTimes icon when clicked", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("FaTimes")).toHaveLength(0);
  });
});
describe("Testing BackToTop ", () => {
  it("Should return one div", () => {
    const wrapper = shallow(<BackToTop />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
describe("Testing NewsPage", () => {
  it("Should return one div", () => {
    const wrapper = shallow(<NewsPage />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
test("There is text Loading...", () => {
  const { getByText } = render(<NewsPage />);
  const content = getByText(/Loading.../i);
  expect(content).toBeInTheDocument;
});

describe("Testing CryptoPage", () => {
  it("Should return one div", () => {
    const wrapper = shallow(<CryptoPage />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
describe("Testing PortfolioPage", () => {
  it("Should return one div", () => {
    const wrapper = shallow(<PortfolioPage />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
describe("Testing LoginPage", () => {
  it("Should return one div", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
