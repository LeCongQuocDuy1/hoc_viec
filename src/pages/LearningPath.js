import React from "react";
import LearningItem from "../components/Learning/LearningItem";
import Button from "../components/Button/Button";

const LearningPath = () => {
    return (
        <div className="px-[50px] bg-[#fff]">
            <h1 className="text-[30px] font-[900] text-[#000] mb-[10px]">
                Lộ trình học
            </h1>
            <p className="text-[14px] text-[#444] w-[50%]">
                Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ
                trình học. Ví dụ: Để đi làm với vị trí "Lập trình viên
                Front-end" bạn nên tập trung vào lộ trình "Front-end".
            </p>
            <div className="flex items-center justify-between gap-[20px] my-[60px]">
                <div className="w-1/2">
                    <LearningItem />
                </div>
                <div className="w-1/2">
                    <LearningItem />
                </div>
            </div>

            <div className="flex items-center justify-between w-full">
                <div className="w-2/3">
                    <h1 className="text-[30px] font-[900] text-[#000] mb-[10px]">
                        Tham gia cộng đồng học viên F8 trên Facebook
                    </h1>
                    <p className="text-[14px] text-[#444] w-[50%] mb-[20px]">
                        Hàng nghìn người khác đang học lộ trình giống như bạn.
                        Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá
                        trình học nhé.
                    </p>
                    <Button text="Tham gia nhóm" primary={true} />
                </div>
                <div className="w-1/3">
                    <img
                        src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png"
                        alt=""
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default LearningPath;
