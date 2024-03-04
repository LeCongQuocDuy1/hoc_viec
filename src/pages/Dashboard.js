import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Sidebar } from "../components";
import icons from "../ultils/icons";

const Dashboard = () => {
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollValue(window.scrollY);
        });

        return () => {
            window.removeEventListener("scroll", () => {
                setScrollValue(window.scrollY);
            });
        };
    }, [scrollValue]);

    return (
        <div className="pt-[80px] bg-[#fff] relative">
            <Header />
            <div className="flex mb-[80px]">
                <Sidebar />
                <div className="flex-1 max-laptop:w-full max-laptop:flex-none max-laptop:px-[30px] px-[10px]">
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
                    className="fixed z-40 p-2 max-tablet:p-5 bg-primary bottom-[30px] right-[30px] rounded-[6px] cursor-pointer hover:opacity-80"
                >
                    <icons.FaArrowUp className="text-[20px] text-[#fff]" />
                </div>
            )}
        </div>
    );
};

export default Dashboard;
