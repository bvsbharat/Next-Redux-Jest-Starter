import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const RouteLinks = ({ routes }) => {
    const renderRouteLinks = () => {
        if (!routes.length) {
            return false;
        }

        return routes.map((item, i) => (
            <Link href={`/${item.href}`} key={i}>
                <a
                    key={item.name}
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white"
                    aria-current={item.current ? "page" : undefined}
                >
                    {item.name}
                </a>
            </Link>
        ));
    };

    return <React.Fragment>{renderRouteLinks()}</React.Fragment>;
};

RouteLinks.propTypes = {
    routes: PropTypes.array,
};

RouteLinks.defaultProps = {
    routes: [],
};

export default RouteLinks;
