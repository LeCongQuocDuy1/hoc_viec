import React from "react";

const Checkbox = ({
    item,
    setPayload,
    payload,
    invalidFields,
    setInvalidFields,
}) => {
    const handleChangeCheckbox = (e) => {
        const { name, value, checked } = e.target;

        if (checked) {
            setPayload((prev) => ({
                ...prev,
                [name]: [...payload.courses, value],
            }));
            let currentInvalidFields = [...invalidFields];
            currentInvalidFields = currentInvalidFields.filter(
                (item) => item.name !== name
            );
            setInvalidFields([...currentInvalidFields]);
        } else {
            setPayload((prev) => ({
                ...prev,
                [name]: payload.courses.filter((option) => option !== value),
            }));
        }
    };

    return (
        <>
            <input
                type={item?.type}
                id={item?.id}
                name={item?.name}
                value={item?.label}
                checked={payload?.courses.includes(item?.label)}
                className="hidden peer"
                onChange={handleChangeCheckbox}
            />
            <label
                htmlFor={item?.id}
                className="inline-flex items-center justify-center w-full text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 h-[100px]"
            >
                <div className="block">
                    <img
                        src={item?.logo}
                        alt={item?.value}
                        className="mb-2 w-[50px] h-[50px] rounded-full text-sky-500 m-auto object-contain"
                    />
                    <div className="w-full text-[14px] font-semibold text-center">
                        {item?.label}
                    </div>
                </div>
            </label>
        </>
    );
};

export default Checkbox;
