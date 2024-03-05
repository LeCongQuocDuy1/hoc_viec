import React from "react";

const Input = ({
    setPayload,
    payload,
    label = "",
    placeholder = "",
    type = "text",
    name,
    id,
    invalidFields,
    setInvalidFields,
}) => {
    const handleChangeInput = (e) => {
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
                        "Vui lòng chỉ chọn file có đuôi .jpg, .jpeg hoặc .png.",
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
        }
    };

    return (
        <div className="mb-[15px]">
            <div className="leading-none">
                <label
                    htmlFor={id}
                    className="text-[14px] font-semibold mb-[5px]"
                >
                    {label}
                </label>
            </div>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                className={`w-full ${
                    invalidFields.some((item) => item.name === name)
                        ? "border-red-500"
                        : "border-green-500"
                } border-[1px] rounded-[22px] placeholder:text-[#646464] text-[#000] bg-[#dfdfdf81] text-[16px] px-[20px] py-[12px] leading-none mb-[5px]`}
                value={type !== "file" ? payload : undefined}
                onChange={
                    type === "file" ? handleUploadAvatar : handleChangeInput
                }
                onFocus={() => setInvalidFields && setInvalidFields([])}
            />
            <div className="leading-none">
                {invalidFields.some((item) => item.name === name) && (
                    <span className="text-red-500 text-[13px]">
                        {
                            invalidFields.find((item) => item.name === name)
                                ?.message
                        }
                    </span>
                )}
            </div>
        </div>
    );
};

export default Input;
