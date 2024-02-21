import post1 from "../assets/posts/post1.png";
import post2 from "../assets/posts/post2.jpg";
import post3 from "../assets/posts/post3.png";
import post4 from "../assets/posts/post4.png";
import post5 from "../assets/posts/post5.jpg";
import post6 from "../assets/posts/post6.png";
import post7 from "../assets/posts/post7.jpg";
import user1 from "../assets/users/user1.jpg";
import user2 from "../assets/users/user2.jpg";
import user3 from "../assets/users/user3.jpg";
import avatar from "../assets/avatar.jpg";

export const posts = [
    {
        id: 1,
        title: "Tổng hợp các sản phẩm của học viên tại F8 👏👏",
        description:
            "Bài viết này nhằm tổng hợp lại các dự án mà học viên F8 đã hoàn thành và chia sẻ trên nhóm Học lập trình web F8. Các dự án dưới đây được mình ngẫu nhiên lựa chọn để đăng chứ không mang tính xếp hạng các bạn nhé.",
        thumbnail: post1,
        author: {
            name: "Admin",
            avatar: avatar,
            isAdmin: true,
        },
        readTime: 6,
    },
    {
        id: 2,
        title: "[Phần 1] Tạo dự án ReactJS với Webpack và Babel",
        description:
            'Hôm nay mình có quay một video trong khóa học ReactJS là "Tạo dự án ReactJS với Webpack và Babel".',
        thumbnail: post2,
        author: {
            name: "Hồng Nguyễn",
            avatar: user1,
            isAdmin: false,
        },
        readTime: 10,
    },
    {
        id: 3,
        title: "Ký sự ngày thứ 25 học ở F8 ",
        description:
            "Hí ae, tôi cũng tên Sơn nhưng mà là newbie còn ông Sơn kia thì trùm rồi :))). Tôi cũng vừa mới đến với lập trình,tôi là sv năm 1.",
        thumbnail: post3,
        author: {
            name: "gưegkew",
            avatar: user3,
            isAdmin: false,
        },
        readTime: 5,
    },
    {
        id: 4,
        title: "Các nguồn tài nguyên hữu ích cho 1 front-end developer",
        description:
            "Bài viết này nhằm tổng hợp lại các dự án mà học viên F8 đã hoàn thành và chia sẻ trên nhóm Học lập trình web F8. Các dự án dưới đây được mình ngẫu nhiên lựa chọn để đăng chứ không mang tính xếp hạng các bạn nhé.",
        thumbnail: post4,
        author: {
            name: "Giang Trần",
            avatar: user2,
            isAdmin: false,
        },
        readTime: 6,
    },
    {
        id: 5,
        title: "Thời gian và Động lực",
        description:
            'Hôm nay mình có quay một video trong khóa học ReactJS là "Tạo dự án ReactJS với Webpack và Babel".',
        thumbnail: post5,
        author: {
            name: "grltlpl",
            avatar: user1,
            isAdmin: false,
        },
        readTime: 8,
    },
    {
        id: 6,
        title: "Tổng hợp tài liệu tự học tiếng anh cơ bản.",
        description:
            "Hí ae, tôi cũng tên Sơn nhưng mà là newbie còn ông Sơn kia thì trùm rồi :))). Tôi cũng vừa mới đến với lập trình,tôi là sv năm 1.",
        thumbnail: post6,
        author: {
            name: "hrtiop",
            avatar: user2,
            isAdmin: false,
        },
        readTime: 3,
    },
    {
        id: 7,
        title: "Học như thế nào là phù hợp ?",
        description:
            "Hí ae, tôi cũng tên Sơn nhưng mà là newbie còn ông Sơn kia thì trùm rồi :))). Tôi cũng vừa mới đến với lập trình,tôi là sv năm 1.",
        thumbnail: post7,
        author: {
            name: "Tioemqwr",
            avatar: user3,
            isAdmin: false,
        },
        readTime: 4,
    },
];
