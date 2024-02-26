import React from "react";
import CourseItem from "./CourseItem";

const CourseList = ({ courses }) => {
    return (
        <div className="grid grid-cols-4 max-laptop:grid-cols-3 max-tablet-sm:grid-cols-2 max-mobile-sm:grid-cols-1 gap-[24px]">
            {courses.map((course) => (
                <React.Fragment key={course.id}>
                    <CourseItem course={course} />
                </React.Fragment>
            ))}
        </div>
    );
};

export default CourseList;
