import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Sidebar } from "../components";
import icons from "../ultils/icons";

const Dashboard = () => {
    const [scrollValue, setScrollValue] = useState(0);

    window.addEventListener("scroll", () => {
        setScrollValue(window.scrollY);
    });

    return (
        <div className="pt-[80px] bg-[#fff] relative">
            <Header />
            <div className="flex mb-[80px]">
                <Sidebar />
                <div className="flex-1 px-[10px]">
                    <Outlet />
                </div>
            </div>
            <Footer />

            {scrollValue > 600 && (
                <div
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                    className="fixed z-40 p-2 bg-primary bottom-[50px] right-[50px] rounded-[6px] cursor-pointer hover:opacity-80"
                >
                    <icons.FaArrowUp className="text-[20px] text-[#fff]" />
                </div>
            )}
        </div>
    );
};

export default Dashboard;
