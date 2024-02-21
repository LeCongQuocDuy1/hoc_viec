import React from "react";
import CourseItem from "./CourseItem";

const CourseList = ({ courses }) => {
    return (
        <div className="flex flex-wrap mr-[-12px] ml-[-12px]">
            {courses.map((course) => (
                <React.Fragment key={course.id}>
                    <CourseItem course={course} />
                </React.Fragment>
            ))}
        </div>
    );
};

export default CourseList;
