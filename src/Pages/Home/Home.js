import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CountupNumber from '../../component/CountUp/CountupNumber'
import { getListCourse } from '../../Redux/action/CourseAction';
import './Home.css'
// import { Carousel } from 'antd';
// import { Card, Avatar } from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function Home() {
    const { coursesList } = useSelector(state => state.CourseReducer)
    const [value, setValue] = React.useState(4);
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    // console.log(coursesList);
    const dispatch = useDispatch()

    const renderCoursePopular = () => {
        return coursesList.map((course, index) => {
            if (index <= 3) {
                return (
                    <div key={index} className="col-md-6 col-xl-3 cardGlobalRes mt-4" >
                        <NavLink to={`/chitiet/${course.maKhoaHoc}`} className="gradient-border">
                            <div>
                                <img src={course.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = "https://ectimes.files.wordpress.com/2019/03/cac-ngon-ngu-lap-trinh-pho-bien-2.jpg" }} alt="" style={{ width: '100%', height: "150px", objectFit: "cover" }} />
                                <div className="mt-1 text-center" >
                                    <h3 style={{ textShadow: '2px 2px 5px red' }} className="text-center">{course.tenKhoaHoc.length > 5 && course.tenKhoaHoc === '123123123' ? 'LAP TRINH WEB' : course.tenKhoaHoc}</h3>
                                    <button className="btn btn-danger mb-1">Đăng Kí</button>

                                </div>

                            </div>
                        </NavLink>

                    </div>
                )
            }
        })
    }

    const renderCoures = () => {
        return coursesList.map((course, index) => {
            if (index > 7 && index <= 11) {
                return (
                    <div className="col-md-4 col-xl-3 mt-2 cardGlobalRes">
                        <NavLink to={`/chitiet/${course.maKhoaHoc}`} className="card">
                            <div className="imgBx">
                                <img src={course.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = "https://canhme.com/wp-content/uploads/2018/09/Nodejs.png" }} />
                            </div>
                            <div className="contentBx">
                                <h2>{course.tenKhoaHoc.length <= 10 && course.tenKhoaHoc !== 'Học khỉ' ? course.tenKhoaHoc : "Lập trình web"}</h2>
                                <div className="size">
                                    <h3>Price :</h3>
                                    <span>4</span>
                                    <span>0</span>
                                    <span>0</span>
                                    <span>K</span>
                                </div>
                                <div className="color">
                                    <h6 className="text-white mt-1">BOOTCAMP - LẬP TRÌNH FULL STACK</h6>
                                </div>
                                <a href="#">Buy Now</a>
                            </div>
                        </NavLink>
                    </div>
                )
            }
        })
    }

    const renderFE = () => {
        return coursesList.map((course, index) => {
            var days = 1;
            var newDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
            if (index > 7 && index <= 11) {
                return (
                    <div className="col-md-4 col-xl-3 mt-2 cardGlobalRes">
                        <Card sx={{ maxWidth: 345 }}>
                            <NavLink to={`/chitiet/${course.maKhoaHoc}`}>

                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://picsum.photos/200/300?random=1">
                                            R
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader={`${newDate}`}
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://canhme.com/wp-content/uploads/2018/09/Nodejs.png"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <Box
                                            sx={{
                                                '& > legend': { mt: 2 },
                                            }}
                                        >
                                            <Typography component="legend"><h4> {course.tenKhoaHoc.length <= 10 && course.tenKhoaHoc !== 'Học khỉ' ? course.tenKhoaHoc : "Lập trình web"}</h4></Typography>
                                            <Rating name="read-only" value={value} readOnly />
                                            <Typography component="legend">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <h3 className="display-4"><MonetizationOnIcon className="text-warning" />50</h3>
                                                    </div>
                                                    <div className="col-6">
                                                        <AccessTimeSharpIcon style={{ fontSize: "35px" }} className="text-warning display-3" /> 100 <br />
                                                        <EventAvailableSharpIcon style={{ fontSize: "35px" }} className="text-warning display-3" /> 4
                                                    </div>
                                                </div>
                                            </Typography>
                                        </Box>
                                    </Typography>
                                </CardContent>
                            </NavLink>

                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteBorderIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>CÁC ĐIỂM SÁNG CỦA NGHỀ :</Typography>
                                    <Typography paragraph>
                                        Ngành IT ở Việt Nam đang thiếu hụt rất nhiều nhân sự, nghĩa là số lượng đang không đáp được nhu cầu. Vì thế mà các công ty họ phải đưa ra các chính sách tốt để thu hút, hoặc giữ chân các nhân sự IT chất lượng.
                                    </Typography>
                                    <Typography paragraph>
                                        Lập trình là một nghề “toàn cầu”, một trang web được lập trình tại Việt Nam cũng giống như một trang web được lập trình tại Mỹ, Úc, Canada. Chỉ cần có Tiếng Anh (đương nhiên là cả trình độ chuyên môn nữa) là bạn có thể làm việc ở nhiều quốc gia trên thế giới.

                                        Lập trình cũng là một công việc lý tưởng để “Work from home”, bạn có thể đang ăn phở ở quê nhưng lại làm việc cho một công ty ở xứ ăn “Hăm bơ gơ”. Sống ở Việt Nam, nhưng thu nhập lại ở Mỹ. Ấy, đọc câu này nhiều bạn chắc sẽ ảo tưởng nghĩ thế này thì nhanh giàu lắm. Việc sống ở Việt nhưng thu nhập ở Mỹ là điều có thật, nhưng nó cũng tỷ lệ thuận với công sức bạn bỏ ra để vượt qua các khó khăn như khác ngôn ngữ, khác múi giờ, khác văn hóa, không tiện trao đổi. Nên nhớ “có làm thì mới có ăn”, nếu không người ta đã giàu hết rồi.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>

                );
            }
        })
    }


    const renderLinear = () => {
        return (
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="success" />
            </Stack>
        )
    }

    useEffect(() => {
        dispatch(getListCourse)
    }, [])

    return (
        <>
            <div className='homePage'>

                <div className="">
                    <div id="carouselExampleIndicators" className="carousel slide position-relative" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block" style={{ objectFit: "cover" }} height={'500px'} width={"100%"} src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="First slide" />
                            </div>
                            <div className="carousel-item ">
                                <img className="d-block" style={{ objectFit: "cover" }} height={'500px'} width={"100%"} src='https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt="Second slide" />
                            </div>
                            <div className="carousel-item h-100">
                                <img className="d-block" style={{ objectFit: "cover" }} height={'500px'} width={"100%"} src='https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' alt="Second slide" />
                            </div>

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                        <div className='row sliderHome position-absolute' style={{ top: 0, left: '50%' }}>
                        </div>
                    </div>
                    <div className='boxNumberContainer mt-5 ' style={{ borderRadius: "10px" }}>
                        <div className='row'>
                            <div className='col-lg-3 p-4 col-md-6'>
                                <div className='boxNumber' >
                                    <i class="fab fa-youtube" style={{ fontSize: "70px" }}></i>
                                    <div className='textNumber'>
                                        <CountupNumber end='9000' />
                                    </div>
                                    <p className='textNumberTitle'>Khoá học và video</p>
                                </div>
                            </div>
                            <div className="col-lg-3 p-4 col-md-6">
                                <div className='boxNumber'>
                                    <i class="fa fa-user-graduate" style={{ fontSize: "70px" }}></i>
                                    <div className='textNumber'>
                                        <CountupNumber end='1000' />
                                    </div>
                                    <p className='textNumberTitle'>Học viên</p>
                                </div>
                            </div>
                            <div className="col-lg-3 p-4 col-md-6">
                                <div className='boxNumber'>
                                    <i class="fa fa-clock" style={{ fontSize: "70px" }}></i>
                                    <div className='textNumber'>
                                        <CountupNumber end='33200' />
                                    </div>
                                    <p className='textNumberTitle'>Giờ học</p>
                                </div>
                            </div>
                            <div className="col-lg-3 p-4 col-md-6">
                                <div className='boxNumber'>
                                    <i class="fa fa-chalkboard-teacher" style={{ fontSize: "70px" }}></i>
                                    <div className='textNumber'>
                                        <CountupNumber end='400' />
                                    </div>
                                    <p className='textNumberTitle'>Giảng viên</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* Course Info */}
                <div className='infoCoureBox'>
                    <div className="text-center">
                        <h3 className="py-3">3 Điểm Khác Biệt Tại E-Learning Giúp Bạn Thăng Tiến Trong Sự Nghiệp</h3>
                    </div>
                    <div className="border rounded" style={{ borderColor: "gray" }}>
                        <div className="row">
                            <div class="col-sm-6">
                                <div class="card">
                                    <img className="card-img-top" style={{ objectFit: "cover" }} src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" width={400} height={350} alt="" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card" style={{ border: "none" }}>
                                    <div class="card-body">
                                        <h5 class="card-title">Học qua dự án, hiểu tận rễ vấn đề</h5>
                                        <p class="card-text">E Learning đã xây dựng hệ thống bài giảng qua các dự án vô cùng thực tế, trực quan, sinh động, minh hoạ rõ ràng giúp hiểu rõ, hiểu sâu, nhớ dai, áp dụng thực tế tốt. Học qua dự án thực tế, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay.</p>
                                        <a href="#" class="btn btn-primary mt-2">Đăng kí</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded mt-2" style={{ borderColor: "gray" }}>
                        <div className="row">
                            <div class="col-sm-6">
                                <div class="card" style={{ border: "none" }}>
                                    <div class="card-body">
                                        <h5 class="card-title">Lộ trình phù hợp cho cả bạn mới, trái ngành và nâng cao kỹ năng chuyên sâu</h5>
                                        <p class="card-text">Chúng tôi tin rằng ai cũng có thể học lập trình từ đầu. Bằng chứng là 42% các bạn trái ngành tốt nghiệp tại ELearning đều làm việc rất tốt. Nhiều bạn mất căn bản, mất gốc đều được chúng tôi cung cấp một lộ trình bài bản để tự tin học tập và có ngay việc làm sau tốt nghiệp.</p>
                                        <a href="#" class="btn btn-primary mt-2">Đăng kí</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">

                                <div class="card">
                                    <img className="card-img-top" style={{ objectFit: "cover" }} src="https://media.istockphoto.com/photos/portrait-of-smiling-diverse-people-raising-hands-at-seminar-picture-id1342228491?b=1&k=20&m=1342228491&s=170667a&w=0&h=rZuhcq_sbRYQIVWFfsDdqFi6XeQwcwR8gs7ZIlTrVQ8=" width={400} height={350} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded mt-2" style={{ borderColor: "gray" }}>
                        <div className="row">
                            <div class="col-sm-6">
                                <div class="card">
                                    <img className="card-img-top" style={{ objectFit: "cover" }} src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" width={400} height={350} alt="" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card" style={{ border: "none" }}>
                                    <div class="card-body">
                                        <h5 class="card-title">Tương tác thảo luận cùng Mentor và Giảng viên</h5>
                                        <p class="card-text">Tương tác học tập qua phần thảo luận cùng Mentor và giảng viên. Hệ thống sẽ chấm điểm tương tác để giúp các học viên tăng cường kỹ năng hỗ trợ lẫn nhau. Các bài luyện tập và các dự án sẽ được Giảng viên cùng mentor chấm bài trực tiếp và nhận xét, review code để giúp học viên học hỏi các kinh nghiệm code. Giảng viên là các chuyên gia trong các tập đoàn phần mềm có kinh nghiệm, có khả năng truyền đạt tốt nhất, hiểu rõ các khó khăn của những bạn mới vào nghề.</p>
                                        <a href="#" class="btn btn-primary mt-2">Đăng kí</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                    </div>

                </div >
                {/* Course Popular */}
                <div className="text-center">
                    <h3>Khoá học phổ biến</h3>
                    <div className='row mt-4'>
                        {renderCoursePopular()}
                    </div>
                </div>
                
                {/* Course Student */}
                <div className="container-a text-center mt-5">
                    <h3><a href="">Khóa học tham khảo</a></h3>
                    <div className="row">
                        {renderCoures()}
                    </div>
                </div>
            </div >

            {/* Box Number */}
            <div className="d-flex justify-content-center mt-5 mb-3">

                <div className="row">
                    <div className="col-12 text-center">
                        <h3>KHOÁ FRONT-END</h3>
                    </div>
                    {renderFE()}
                </div>
            </div>


        </>
    )
}
