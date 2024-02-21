import React from "react";
import Button from "../Button/Button";

const LearningItem = () => {
    return (
        <div className="border-[2px] border-[#ccc] rounded-[16px] py-[15px] px-[30px]">
            <div className="flex items-center gap-[20px] mb-[20px]">
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
                <div className="text-center border-[5px] border-primary rounded-full w-[330px] h-[115px] overflow-hidden flex items-center justify-center">
                    <img
                        src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png"
                        alt=""
                        className="w-[85%]"
                    />
                </div>
            </div>
            <Button text="Xem chi tiết" primary={true} />
        </div>
    );
};

export default LearningItem;
