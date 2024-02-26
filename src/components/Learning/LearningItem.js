import React from "react";
import Button from "../Button/Button";

const LearningItem = () => {
    return (
        <div className="border-[2px] border-[#ccc] rounded-[16px] py-[15px] px-[30px]">
            <div className="flex max-tablet:flex-col items-center gap-[20px] mb-[20px]">
                <div className="">
                    <h1 className="text-[26px] font-[900] text-[#000] mb-[10px]">
                        Lộ trình học
                    </h1>
                    <p className="text-[14px] text-[#444]">
                        Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một
                        lộ trình học. Ví dụ: Để đi làm với vị trí "Lập trình
                        viên Front-end" bạn nên tập trung vào lộ trình
                        "Front-end".
                    </p>
                </div>
                <img
                    src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png"
                    alt=""
                    className="object-contain rounded-full w-[120px] h-[120px] border-[5px] border-primary max-tablet:border-[2px] max-tablet:w-full max-tablet:h-[200px] max-tablet:rounded-[16px]"
                />
            </div>
            <Button
                text="Xem chi tiết"
                primary={true}
                customPrimary={
                    "max-laptop:w-full max-laptop:py-[10px] max-laptop:text-[16px]"
                }
            />
        </div>
    );
};

export default LearningItem;
