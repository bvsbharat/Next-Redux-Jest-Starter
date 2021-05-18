import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../redux";
import { Layout } from "@components";

export default function Dashboard() {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(set("data", { data: "loading data" }));
    }, []);

    return (
        <Layout>
            <h1>Dashboard page</h1>
        </Layout>
    );
}
