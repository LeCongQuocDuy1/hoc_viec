import React, { useState, useCallback } from "react";
import logo from "../../assets/logo.png";
import avatarPlace from "../../assets/avatar-placeholder.png";
import Input from "../Input/Input";
import Radio from "../Input/Radio";
import Checkbox from "../Input/Checkbox";
import Button from "../Button/Button";
import { validation } from "../../ultils/validations";
import bcrypt from "bcryptjs";
import icons from "../../ultils/icons";
import {
    radioDatas,
    selectDatas,
    checkboxDatas,
} from "../../ultils/dataSelectors";
import { Bounce, toast } from "react-toastify";

const Form = ({ isRegister, setIsRegister, setActiveForm, setUserLogged }) => {
    const [isSwitchPage, setIsSwitchPage] = useState(false);
    const [payload, setPayload] = useState({
        fullname: "",
        username: "",
        email: "",
        avatar: avatarPlace,
        password: "",
        rePassword: "",
        level: "",
        courses: [],
        goal: "Not sure yet",
    });
    const [invalidFields, setInvalidFields] = useState([]);

    const resetPayload = () => {
        setPayload({
            fullname: "",
            username: "",
            email: "",
            avatar: avatarPlace,
            password: "",
            rePassword: "",
            level: "",
            courses: [],
            goal: "Not sure yet",
        });
    };

    const handleSubmit = useCallback(() => {
        // Tách dữ liệu của đăng nhập và đăng ký (page1, page2)
        // đăng nhập (email, password)
        // đăng ký (email, password , fullname, username)

        const { fullname, username, email, avatar, password, rePassword } =
            payload;

        const data = {
            email,
            password,
        };

        const payloadPage1 = {
            fullname,
            username,
            email,
            avatar,
            password,
            rePassword,
        };

        // const { fullname, username, rePassword, level, courses, goal, avatar, ...data } = payload;
        // const { level, courses, goal, ...payloadPage1 } = payload;
        let invalids;
        if (isRegister) {
            if (isSwitchPage) {
                invalids = validation(payload, setInvalidFields);
            } else {
                invalids = validation(payloadPage1, setInvalidFields);
            }
        } else {
            invalids = validation(data, setInvalidFields);
        }

        if (invalids === 0) {
            if (isRegister) {
                if (isSwitchPage) {
                    // Đăng ký
                    //  tạo một users trong localstorage, rồi add thằng vừa mới đăng ký vào và lưu trữ trong đó
                    const storedUsers = localStorage.getItem("users");
                    // Kiểm tra trong localstorage đã có thằng đó chưa thông qua email, có rồi thì không cho đăng ký nữa
                    const isAvailable = JSON.parse(storedUsers)?.some(
                        (item) => item.email === payload.email
                    );
                    if (isAvailable) {
                        const id = toast.loading("Please wait...");
                        new Promise((resolve) =>
                            setTimeout(resolve, 3000)
                        ).then(() => {
                            toast.update(id, {
                                render: "User already exists, please try again!",
                                type: "error",
                                isLoading: false,
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                            });
                        });
                    } else {
                        let users = [];
                        const { rePassword, ...result } = payload;
                        if (storedUsers) {
                            users = JSON.parse(storedUsers);
                        }
                        users.push(result);
                        // Hash password thằng vừa mới tạo để che giấu dữ liệu, tránh bị người khác biết mật khẩu
                        const updatedUsers = users.map((user) => {
                            if (user.email === payload.email) {
                                const salt = bcrypt.genSaltSync(10);
                                const hash = bcrypt.hashSync(
                                    payload?.password,
                                    salt
                                );
                                return { ...user, password: hash };
                            }
                            return user;
                        });
                        localStorage.setItem(
                            "users",
                            JSON.stringify(updatedUsers)
                        );
                        // đăng ký xong thì thông báo thành công và chuyển qua đăng nhập
                        const id = toast.loading("Please wait...");
                        new Promise((resolve) =>
                            setTimeout(resolve, 3000)
                        ).then(() => {
                            toast.update(id, {
                                render: "New account registration successful! Let's log in",
                                type: "success",
                                isLoading: false,
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                            });
                            setIsRegister(!isRegister);
                            resetPayload();
                        });
                    }
                } else {
                    setIsSwitchPage(true);
                }
            } else {
                // Đăng nhập
                // lấy users trong localstorage ra và kiểm tra thằng vừa mới đăng nhập có tồn tại và email
                // với mật khẩu có đúng với thằng tồn tại trong localstorage hay không, nếu oke thì thông báo
                // thành công và chuyển vào trang chủ, nếu không thì thông báo đăng nhập thất bại
                const storedUsers = JSON.parse(localStorage.getItem("users"));

                // Kiểm tra tài khoản có tồn tại trong localstorage không
                const isAvailable = storedUsers?.some(
                    (item) => item.email === data.email
                );

                if (isAvailable) {
                    const userInLocal = storedUsers?.find(
                        (item) => item.email === data.email
                    );

                    // Kiểm tra mật khẩu có trùng khớp hay không
                    const isVerify = bcrypt.compareSync(
                        data.password,
                        userInLocal.password
                    );

                    if (isVerify) {
                        const id = toast.loading("Please wait...");
                        new Promise((resolve) =>
                            setTimeout(resolve, 3000)
                        ).then(() => {
                            toast.update(id, {
                                render: "Logged in successfully! Welcome to F8!",
                                type: "success",
                                isLoading: false,
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                            });
                            setUserLogged(userInLocal);
                            setActiveForm(false);
                        });
                    } else {
                        const id = toast.loading("Please wait...");
                        new Promise((resolve) =>
                            setTimeout(resolve, 3000)
                        ).then(() => {
                            toast.update(id, {
                                render: "Password or email is incorrect, please try again!",
                                type: "error",
                                isLoading: false,
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                            });
                            resetPayload();
                        });
                    }
                } else {
                    const id = toast.loading("Please wait...");
                    new Promise((resolve) => setTimeout(resolve, 3000)).then(
                        () => {
                            toast.update(id, {
                                render: "User does not exist, please try again!",
                                type: "error",
                                isLoading: false,
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                            });
                            resetPayload();
                        }
                    );
                }
            }
        }
    }, [
        isRegister,
        isSwitchPage,
        payload,
        setActiveForm,
        setIsRegister,
        setUserLogged,
    ]);

    const handleChangeSelect = (e) => {
        const { name, value } = e.target;
        setPayload((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUploadAvatar = (e) => {
        const file = e.target.files[0];
        const validExtensions = [".jpg", ".jpeg", ".png"];

        const fileExtension = file.name.split(".")[1];
        const isValidExtension = validExtensions.includes(
            "." + fileExtension.toLowerCase()
        );

        if (!isValidExtension) {
            setInvalidFields((prev) => [
                ...prev,
                {
                    name: "avatar",
                    message:
                        "Please only select files with the extension .jpg, .jpeg or .png",
                },
            ]);
        } else {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPayload((prev) => ({
                    ...prev,
                    avatar: reader.result,
                }));
            };

            reader.readAsDataURL(file);
            setInvalidFields((prev) => [
                ...prev,
                {
                    name: "avatar",
                    message: "",
                },
            ]);
        }
    };

    return (
        <>
            <div
                id="form"
                className={`fixed top-[3%] left-[34%] w-[530px] max-h-[580px] px-[50px] py-[30px] bg-[#fff] rounded-[16px] ${
                    isRegister ? "overflow-y-scroll" : "overflow-y-hidden"
                } z-30`}
            >
                <div className="w-full text-center mb-[15px]">
                    <div className="w-full flex justify-center">
                        <img
                            src={logo}
                            alt=""
                            className="w-[40px] h-[40px] object-cover mb-[20px] rounded-[8px]"
                        />
                    </div>
                    <h3 className="text-[28px] font-bold text-[#333] mb-[20px] leading-[20px]">
                        {isRegister
                            ? "Đăng ký tài khoản F8"
                            : "Đăng nhập vào F8"}
                    </h3>
                    <p className="leading-[20px] text-primary text-[13px]">
                        Mỗi người nên sử dụng một email riêng để đăng ký tài
                        khoản, tài khoản nhiều người sử dụng chung có thể sẽ bị
                        khóa.
                    </p>
                </div>
                {!isSwitchPage ? (
                    <div className="w-full">
                        {isRegister && (
                            <>
                                <div className="w-full text-center">
                                    <div className="leading-none text-left mb-[10px]">
                                        <label
                                            htmlFor="avatar"
                                            className="text-[14px] font-semibold mb-[5px]"
                                        >
                                            Avatar:
                                        </label>
                                    </div>
                                    <div className="w-[100px] h-[100px] rounded-full m-auto overflow-hidden relative">
                                        <img
                                            src={payload?.avatar}
                                            alt="Avatar"
                                            className="w-[100px] h-[100px] rounded-full object-cover m-auto"
                                        />
                                        <label
                                            htmlFor="avatar"
                                            className="absolute group inset-0 hover:bg-overlay2 flex justify-center cursor-pointer"
                                        >
                                            <icons.FaUserEdit className="text-[24px] m-auto text-[#fff] hidden group-hover:block" />
                                            <input
                                                type="file"
                                                name="avatar"
                                                id="avatar"
                                                onChange={handleUploadAvatar}
                                                className="absolute h-full hidden"
                                            />
                                        </label>
                                    </div>
                                    <div className="leading-none my-[5px] text-left w-full">
                                        {invalidFields.some(
                                            (item) => item.name === "avatar"
                                        ) && (
                                            <span className="text-red-500 text-[13px]">
                                                {
                                                    invalidFields.find(
                                                        (item) =>
                                                            item.name ===
                                                            "avatar"
                                                    )?.message
                                                }
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <Input
                                    invalidFields={invalidFields}
                                    label="Fullname"
                                    placeholder="Fullname..."
                                    type="text"
                                    name="fullname"
                                    payload={payload.fullname}
                                    setPayload={setPayload}
                                    setInvalidFields={setInvalidFields}
                                />
                                <Input
                                    invalidFields={invalidFields}
                                    label="Username"
                                    placeholder="Username..."
                                    type="text"
                                    name="username"
                                    payload={payload.username}
                                    setPayload={setPayload}
                                    setInvalidFields={setInvalidFields}
                                />
                            </>
                        )}
                        <Input
                            invalidFields={invalidFields}
                            label="Email"
                            placeholder="Email..."
                            type="email"
                            name="email"
                            payload={payload.email}
                            setPayload={setPayload}
                            setInvalidFields={setInvalidFields}
                        />
                        <Input
                            invalidFields={invalidFields}
                            label="Password"
                            placeholder="Password..."
                            type="password"
                            name="password"
                            payload={payload.password}
                            setPayload={setPayload}
                            setInvalidFields={setInvalidFields}
                            isRegister={isRegister}
                        />
                        {isRegister && (
                            <Input
                                invalidFields={invalidFields}
                                label="Re-enter password"
                                placeholder="Re-enter password..."
                                type="password"
                                name="rePassword"
                                payload={payload.rePassword}
                                setPayload={setPayload}
                                setInvalidFields={setInvalidFields}
                            />
                        )}
                    </div>
                ) : (
                    <div className="w-full">
                        {/* Select */}
                        <div className="bg-white w-full mb-[10px]">
                            <div className="leading-none">
                                <label className="text-[14px] font-semibold mb-[8px] block">
                                    Choose a goal:
                                </label>
                                <select
                                    id="goals"
                                    name="goal"
                                    defaultValue={payload?.goal}
                                    onChange={handleChangeSelect}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                >
                                    {selectDatas?.map((item) => (
                                        <option
                                            value={item?.label}
                                            key={item?.id}
                                        >
                                            {item?.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Checkbox */}
                        <div className="bg-white w-full mb-[10px]">
                            <div className="leading-none">
                                <label className="text-[14px] font-semibold  mb-[8px] block">
                                    Choose a courses:
                                </label>
                                <ul className="grid grid-cols-3 w-full gap-[10px]">
                                    {checkboxDatas?.map((item) => (
                                        <li key={item.id}>
                                            <Checkbox
                                                item={item}
                                                invalidFields={invalidFields}
                                                payload={payload}
                                                setPayload={setPayload}
                                                setInvalidFields={
                                                    setInvalidFields
                                                }
                                            />
                                        </li>
                                    ))}
                                </ul>
                                <div className="leading-none w-full text-center">
                                    {invalidFields.some(
                                        (el) => el.name === "courses"
                                    ) && (
                                        <span className="text-red-500 text-[13px]">
                                            {
                                                invalidFields.find(
                                                    (elm) =>
                                                        elm.name === "courses"
                                                )?.message
                                            }
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Radio */}
                        <div className="bg-white w-full">
                            <div className="leading-none">
                                <label className="text-[14px] font-semibold mb-[5px]">
                                    Set your level:
                                </label>
                            </div>
                            <ul className="p-3 space-y-1 text-sm text-gray-700 ">
                                {radioDatas?.map((item) => (
                                    <li key={item?.id}>
                                        <Radio
                                            item={item}
                                            invalidFields={invalidFields}
                                            payload={payload}
                                            setPayload={setPayload}
                                            setInvalidFields={setInvalidFields}
                                        />
                                    </li>
                                ))}
                            </ul>
                            <div className="leading-none w-full text-center">
                                {invalidFields.some(
                                    (el) => el.name === "level"
                                ) && (
                                    <span className="text-red-500 text-[13px]">
                                        {
                                            invalidFields.find(
                                                (elm) => elm.name === "level"
                                            )?.message
                                        }
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {isRegister ? (
                    <>
                        {isSwitchPage ? (
                            <>
                                <Button
                                    hidden
                                    text={"Trở lại"}
                                    customPrimary={
                                        "w-full leading-[28px] text-[18px]"
                                    }
                                    onClick={() => setIsSwitchPage(false)}
                                />
                                <Button
                                    primary
                                    text="Đăng ký"
                                    customPrimary={
                                        "w-full leading-[28px] text-[18px] mb-[30px]"
                                    }
                                    onClick={handleSubmit}
                                />
                            </>
                        ) : (
                            <icons.FaArrowRight
                                className="m-auto w-[55px] h-[55px] bg-primary hover:opacity-80 cursor-pointer text-[#fff] p-4 mb-[20px] font-bold rounded-[16px]"
                                onClick={handleSubmit}
                            />
                        )}
                    </>
                ) : (
                    <Button
                        primary
                        text="Đăng nhập"
                        customPrimary={
                            "w-full leading-[28px] text-[18px] mb-[30px]"
                        }
                        onClick={handleSubmit}
                    />
                )}
                <div className="text-center w-full">
                    <div className="text-[#000] font-semibold text-[14px] leading-none">
                        {isRegister
                            ? "Bạn đã có tài khoản? "
                            : "Bạn chưa có tài khoản? "}

                        <span
                            className="text-primary cursor-pointer hover:opacity-80"
                            onClick={() => {
                                setIsRegister(!isRegister);
                                resetPayload();
                                setInvalidFields([]);
                            }}
                        >
                            {isRegister ? "Đăng nhập" : "Đăng ký"}
                        </span>
                        <p className="text-[12px] font-normal text-[#333] mt-[10px]">
                            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa
                            bạn đồng ý với{" "}
                            <a href="/" className="underline leading-[15px]">
                                điều khoản và dịch vụ
                            </a>{" "}
                            của chúng tôi.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="fixed inset-0 bg-overlay z-10"
                onClick={(e) => {
                    e.stopPropagation();
                    setActiveForm(false);
                    const bodyElement = document.body;
                    bodyElement.style.overflow = "auto";
                }}
            ></div>
        </>
    );
};

export default Form;
