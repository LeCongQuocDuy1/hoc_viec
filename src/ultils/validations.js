export const validation = (payload, setInvalidFields) => {
    let invalid = 0;

    const formatPayload = Object.entries(payload);
    const newFormatPayload = formatPayload.filter(
        (item) => item[0] !== "rePassword"
    );

    for (let item of newFormatPayload) {
        if (typeof item[1] === "string") {
            if (item[1].trim() === "") {
                invalid++;
                setInvalidFields((prev) => [
                    ...prev,
                    {
                        name: item[0],
                        message: `${
                            item[0].charAt(0).toUpperCase() + item[0].slice(1)
                        } is required!`,
                    },
                ]);
            }
        }

        if (Array.isArray(item[1])) {
            if (item[1].length === 0) {
                invalid++;
                setInvalidFields((prev) => [
                    ...prev,
                    {
                        name: item[0],
                        message: `${
                            item[0].charAt(0).toUpperCase() + item[0].slice(1)
                        } is required!`,
                    },
                ]);
            }
        }
    }
    for (let item of formatPayload) {
        switch (item[0]) {
            case "fullname":
            case "username":
                if (item[1].length <= 5 || item[1].length > 20) {
                    invalid++;
                    setInvalidFields((prev) => [
                        ...prev,
                        {
                            name: item[0],
                            message:
                                "Fullname or Username must have a minimum of 5 characters and a maximum of 20 characters!",
                        },
                    ]);
                }
                break;
            case "email":
                const regexEmail =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!item[1].toLowerCase().match(regexEmail)) {
                    invalid++;
                    setInvalidFields((prev) => [
                        ...prev,
                        {
                            name: item[0],
                            message:
                                "Email invalid! Please enter a valid email",
                        },
                    ]);
                }
                break;
            case "password":
                if (item[1].length < 6) {
                    invalid++;
                    setInvalidFields((prev) => [
                        ...prev,
                        {
                            name: item[0],
                            message: "Password must be at least 6 characters!",
                        },
                    ]);
                }
                break;
            case "rePassword":
                if (payload.password !== item[1]) {
                    invalid++;
                    setInvalidFields((prev) => [
                        ...prev,
                        {
                            name: item[0],
                            message: "Re-enter password does not match!",
                        },
                    ]);
                }
                break;
            default:
                break;
        }
    }

    return invalid;
};
