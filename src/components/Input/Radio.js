import React from "react";

const Radio = ({
    item,
    setPayload,
    payload,
    invalidFields,
    setInvalidFields,
}) => {
    const handleChangeRadio = (e) => {
        const { name, value } = e.target;
        setPayload((prev) => ({
            ...prev,
            [name]: value,
        }));

        let currentInvalidFields = [...invalidFields];
        currentInvalidFields = currentInvalidFields.filter(
            (item) => item.name !== name
        );
        setInvalidFields([...currentInvalidFields]);
    };

    return (
        <>
            <div className="flex p-2 rounded hover:bg-gray-100">
                <div className="flex items-center h-5">
                    <input
                        id={item?.id}
                        name={item?.name}
                        type={item?.type}
                        value={item?.title}
                        checked={payload?.level === item?.title}
                        className="w-4 h-4 text-blue-600 "
                        onChange={handleChangeRadio}
                    />
                </div>
                <div className="ms-2 text-sm">
                    <label
                        htmlFor={item?.id}
                        className="font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                    >
                        <div>{item?.title}</div>
                        <p
                            id="level"
                            className="text-xs font-normal text-gray-500 dark:text-gray-300"
                        >
                            {item?.description}
                        </p>
                    </label>
                </div>
            </div>
            {/* <div className="leading-none">
                {invalidFields.some((el) => el.name === item?.name) && (
                    <span className="text-red-500 text-[13px]">
                        {
                            invalidFields.find((elm) => elm.name === item?.name)
                                ?.message
                        }
                    </span>
                )}
            </div> */}
        </>
    );
};

export default Radio;
