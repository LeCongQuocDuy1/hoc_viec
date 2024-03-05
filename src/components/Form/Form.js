import React, { useState, useCallback } from "react";
import logo from "../../assets/logo.png";
import avatarPlace from "../../assets/avatar-placeholder.png";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { validation } from "../../ultils/validations";
import Swal from "sweetalert2";
import bcrypt from "bcryptjs";

const Form = ({ isRegister, setIsRegister, setActiveForm, setUserLogged }) => {
    const [payload, setPayload] = useState({
        fullname: "",
        username: "",
        email: "",
        avatar: avatarPlace,
        password: "",
        rePassword: "",
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
        });
    };

    const handleSubmit = useCallback(() => {
        // Tách dữ liệu của đăng nhập và đăng ký
        // đăng nhập (email, password)
        // đăng ký (email, password , fullname, username)
        const { fullname, username, rePassword, ...data } = payload;

        const invalids = isRegister
            ? validation(payload, setInvalidFields)
            : validation(data, setInvalidFields);

        if (invalids === 0) {
            if (isRegister) {
                // localStorage.setItem('users', )
                // Đăng ký
                //  tạo một users trong localstorage, rồi add thằng vừa mới đăng ký vào và lưu trữ trong đó
                const storedUsers = localStorage.getItem("users");

                // Kiểm tra trong localstorage đã có thằng đó chưa thông qua email, có rồi thì không cho đăng ký nữa
                const isAvailable = JSON.parse(storedUsers)?.some(
                    (item) => item.email === payload.email
                );
                if (isAvailable) {
                    Swal.fire({
                        title: "Error!",
                        text: "User already exists, please try again!",
                        icon: "error",
                    });
                } else {
                    let users = [];

                    if (storedUsers) {
                        users = JSON.parse(storedUsers);
                    }
                    users.push(payload);

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

                    localStorage.setItem("users", JSON.stringify(updatedUsers));
                    // đăng ký xong thì thông báo thành công và chuyển qua đăng nhập
                    Swal.fire({
                        title: "Successfully!",
                        text: "New account registration successful! Let's log in",
                        icon: "success",
                    }).then(() => {
                        setIsRegister(!isRegister);
                        resetPayload();
                    });
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
                        Swal.fire({
                            title: "Successfully!",
                            text: "Logged in successfully! Welcome to F8!",
                            icon: "success",
                        }).then(() => {
                            setUserLogged(userInLocal);
                            setActiveForm(false);
                        });
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: "Password is incorrect, please try again!",
                            icon: "error",
                        });
                    }
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "User does not exist, please try again!",
                        icon: "error",
                    }).then(() => {
                        resetPayload();
                    });
                }
            }
        }
    }, [isRegister, payload, setActiveForm, setIsRegister, setUserLogged]);

    return (
        <>
            <div
                className={`absolute top-[30%] left-[34%] w-[530px] max-h-[580px] px-[50px] py-[30px] bg-[#fff] rounded-[16px] ${
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
                                <img
                                    src={payload?.avatar}
                                    alt="Avatar"
                                    className="w-[100px] h-[100px] rounded-full object-cover m-auto"
                                />
                                <Input
                                    invalidFields={invalidFields}
                                    label="Avatar"
                                    placeholder="Avatar..."
                                    type="file"
                                    name="avatar"
                                    payload={payload.avatar}
                                    setPayload={setPayload}
                                    setInvalidFields={setInvalidFields}
                                />
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
                <Button
                    primary={true}
                    text={isRegister ? "Đăng ký" : "Đăng nhập"}
                    customPrimary={
                        "w-full leading-[28px] text-[18px] mb-[30px]"
                    }
                    onClick={handleSubmit}
                />
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
                }}
            ></div>
        </>
    );
};

export default Form;
