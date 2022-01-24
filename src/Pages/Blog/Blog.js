import React from 'react'
import './Blog.css'
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

export default function Blog() {
    return (
        <>
            <FormGroup>
                <FormControlLabel
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                    label="MUI switch"
                />
            </FormGroup>
            <section className='blogCourse'>
                <div className='titleCourse'>
                    <h3>Blog</h3>
                    <p>Thông tin công nghệ số!!!</p>
                </div>
                <div className='blogCourseContainer'>
                    <h6><a href=""><i class="fas fa-bullhorn"></i>PHÙ HỢP VỚI BẠN</a></h6>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='blogItemLeft'>
                                <div className='row'>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>
                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1671/61b6368a3a089.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1671/61b6368a3a089.jpg" }} alt="" />
                                                </div>
                                                <h6>Thời gian và động lực</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>
                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1653/61b46a3d757cc.png" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1653/61b46a3d757cc.png" }} alt="" />
                                                </div>
                                                <h6>Tailwind css và cách cài đặt cơ bản </h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>
                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1637/61b175b3debf2.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1653/61b46a3d757cc.png" }} alt="" />

                                                </div>
                                                <h6>Cấu trúc cơ bản trong HTML</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Custom theme Material UI với TypeScript đơn giản, hiệu quả...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>

                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1463/61a1bbd28851c.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1463/61a1bbd28851c.jpgog_posts/1653/61b46a3d757cc.png" }} alt="" />
                                                </div>
                                                <h6>Material UI custom theme với TypeScript</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Trắc hẳn ai cũng biết một trang web thì không thể nào thiếu đi HTML và HTML làm nên cấu trúc của một trang web...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>

                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1385/6197a09e60b56.png" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1385/6197a09e60b56.png" }} alt="" />
                                                </div>
                                                <h6>Cách tạo một component nhanh chóng chỉ bằng 3 ký tự</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Tạo một component nhiều lúc cũng khá mất nhiều thời gian nên mình xin giới thiệu extention này cho mọi người nhé...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>

                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1355/619482df77279.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1355/619482df77279.jpg" }} alt="" />
                                                </div>
                                                <h6>Material UI custom theme với TypeScript</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Như các bạn đã biết chúng ta sẽ sử dụng target="_blank" cho thẻ a để khi người dùng click vô sẽ mở liên kết trên một tab mới...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <div className='imgCardBlog'>

                                                    <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1069/617946ecf0f63.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1069/617946ecf0f63.jpg" }} alt="" />
                                                </div>
                                                <h6>Xử lý bất đồng bộ trong Javascript (phần 2)</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Async/await là cơ chế giúp bạn thực thi các thao tác bất đồng bộ một cách tuần tự hơn , giúp đoạn code nhìn qua tưởng như đồng...</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-4">
                                        <div className='cardBlog'>
                                            <div className='cardBlogContent'>
                                                <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1073/6179eca8efb18.jpg" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1073/6179eca8efb18.jpg" }} alt="" />
                                                <h6>TyperScrip là gì, Vì sao nên dùng TyperScript</h6>
                                                <div className='timeBlogCourse'>
                                                    <div className='reviewBlog'>
                                                        <span><i className="far fa-thumbs-up"></i> 300</span>
                                                        <span><i className="far fa-comment"></i> 500</span>
                                                        <span><i className="fas fa-eye"></i> 200</span>
                                                    </div>
                                                    <p>Đăng bởi<span> Jhony Đặng</span></p>
                                                </div>
                                                <p className='colorCardTitle'>Link khóa học cho anh em nào tò mò ( Đừng lo vì tất cả đều miễn......</p>
                                                <button className='btnGlobal btnCardBlog'><a href="">Xem thêm</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='blogItemRight'>
                                <div className='blogRightBox'>
                                    <h6>Các chủ đề được đề xuất</h6>
                                    <ul>
                                        <li><a href="">Front-end / Mobile apps</a></li>
                                        <li><a href="">UI / UX / Design</a></li>
                                        <li><a href="">BACK-END</a></li>
                                        <li><a href="">Thư viện</a></li>
                                        <li><a href="">Chia sẻ người trong nghề</a></li>
                                        <li><a href="">Châm ngôn IT</a></li>
                                        <li><a href="">Chủ đề khác</a></li>
                                    </ul>
                                </div>

                                <div className='blogRightBox'>
                                    <h6>Bài đăng được đề xuất</h6>
                                    <div className='postBlog'>
                                        <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1027/6174b331c4b4f.png" alt="" />
                                        <h6>Routing trong reactjs</h6>
                                        <p className='colorCardTitle'>Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...</p>
                                        <div className='imgPost'>
                                            <img src={require('../../Assets/Img/imgInstrutors/instrutor13.jpg').default} alt="" />
                                            <span className='colorCardTitle'> Nguyên Văn</span>
                                        </div>
                                    </div>
                                    <div className='postBlog'>
                                        <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1021/6173be68944ad.jpg" alt="" />
                                        <h6>Lập trình hướng đối tượng oop</h6>
                                        <p className='colorCardTitle'>Chúng ta sẽ cùng nhau tìm hiểu cách oop trong reactjs...</p>
                                        <div className='imgPost'>
                                            <img src={require('../../Assets/Img/imgInstrutors/instrutor12.jpg').default} alt="" />
                                            <span className='colorCardTitle'> Nguyên Văn Vũ</span>
                                        </div>
                                    </div>
                                    <div className='postBlog'>
                                        <img src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1017/6172259ab8b80.png" alt="" />
                                        <h6>Xử Lý Bất Đồng Bộ Trong Javascript</h6>
                                        <p className='colorCardTitle'>Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời gian delay (gọi API, lấy dữ liệu từ Database, đọc/ghi file,...). Và đây...</p>
                                        <div className='imgPost'>
                                            <img src={require('../../Assets/Img/imgInstrutors/instrutor11.jpg').default} alt="" />
                                            <span className='colorCardTitle'> Nguyên Minh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
