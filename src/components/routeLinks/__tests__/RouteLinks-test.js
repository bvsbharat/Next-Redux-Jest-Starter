import React from "react";
import mount from "@test";
import renderer from "react-test-renderer";
import RouteLinks from "../RouteLinks";

describe(RouteLinks, () => {
    it("Should render correctly", () => {
        const component = renderer.create(<RouteLinks />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("should show the route name as link text", () => {
        const routes = [{ name: "Some Link", href: "post", current: false }];
        const component = mount(<RouteLinks routes={routes} />);

        expect(component.find("a").text()).toEqual("Some Link");
    });

    it("should create equal routes as passed as pros", () => {
        const routes = [{ name: "Some Link", href: "post", current: false }];
        const component = mount(<RouteLinks routes={routes} />);

        expect(component.find("a")).toHaveLength(1);
    });
});
