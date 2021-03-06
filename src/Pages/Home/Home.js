import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
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

export default function Home(props) {
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
                                    <button className="btn btn-danger mb-1">????ng K??</button>

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
                                <h2>{course.tenKhoaHoc.length <= 10 && course.tenKhoaHoc !== 'H???c kh???' ? course.tenKhoaHoc : "L???p tr??nh web"}</h2>
                                <div className="size">
                                    <h3>Price :</h3>
                                    <span>4</span>
                                    <span>0</span>
                                    <span>0</span>
                                    <span>K</span>
                                </div>
                                <div className="color">
                                    <h6 className="text-white mt-1">BOOTCAMP - L???P TR??NH FULL STACK</h6>
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
                                            <Typography component="legend"><h4> {course.tenKhoaHoc.length <= 10 && course.tenKhoaHoc !== 'H???c kh???' ? course.tenKhoaHoc : "L???p tr??nh web"}</h4></Typography>
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
                                    <Typography paragraph>C??C ??I???M S??NG C???A NGH??? :</Typography>
                                    <Typography paragraph>
                                        Ng??nh IT ??? Vi???t Nam ??ang thi???u h???t r???t nhi???u nh??n s???, ngh??a l?? s??? l?????ng ??ang kh??ng ????p ???????c nhu c???u. V?? th??? m?? c??c c??ng ty h??? ph???i ????a ra c??c ch??nh s??ch t???t ????? thu h??t, ho???c gi??? ch??n c??c nh??n s??? IT ch???t l?????ng.
                                    </Typography>
                                    <Typography paragraph>
                                        L???p tr??nh l?? m???t ngh??? ???to??n c???u???, m???t trang web ???????c l???p tr??nh t???i Vi???t Nam c??ng gi???ng nh?? m???t trang web ???????c l???p tr??nh t???i M???, ??c, Canada. Ch??? c???n c?? Ti???ng Anh (??????ng nhi??n l?? c??? tr??nh ????? chuy??n m??n n???a) l?? b???n c?? th??? l??m vi???c ??? nhi???u qu???c gia tr??n th??? gi???i.

                                        L???p tr??nh c??ng l?? m???t c??ng vi???c l?? t?????ng ????? ???Work from home???, b???n c?? th??? ??ang ??n ph??? ??? qu?? nh??ng l???i l??m vi???c cho m???t c??ng ty ??? x??? ??n ???H??m b?? g?????. S???ng ??? Vi???t Nam, nh??ng thu nh???p l???i ??? M???. ???y, ?????c c??u n??y nhi???u b???n ch???c s??? ???o t?????ng ngh?? th??? n??y th?? nhanh gi??u l???m. Vi???c s???ng ??? Vi???t nh??ng thu nh???p ??? M??? l?? ??i???u c?? th???t, nh??ng n?? c??ng t??? l??? thu???n v???i c??ng s???c b???n b??? ra ????? v?????t qua c??c kh?? kh??n nh?? kh??c ng??n ng???, kh??c m??i gi???, kh??c v??n h??a, kh??ng ti???n trao ?????i. N??n nh??? ???c?? l??m th?? m???i c?? ??n???, n???u kh??ng ng?????i ta ???? gi??u h???t r???i.
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
        if(localStorage.getItem("credentials")){
            props.history.push("/trangchu")
        }else {
           return props.history.push("/login")
        }
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
                                    <p className='textNumberTitle'>Kho?? h???c v?? video</p>
                                </div>
                            </div>
                            <div className="col-lg-3 p-4 col-md-6">
                                <div className='boxNumber'>
                                    <i class="fa fa-user-graduate" style={{ fontSize: "70px" }}></i>
                                    <div className='textNumber'>
                                        <CountupNumber end='1000' />
                                    </div>
                                    <p className='textNumberTitle'>H???c vi??n</p>
                                </div>
                            </div>
                            <div className="col-lg-3 p-4 col-md-6">
                                <div className='boxNumber'>
                                    <i class="fa fa-clock" style={{ fontSize: "70px" }}></i>
                                    <div className='textNumber'>
                                        <CountupNumber end='33200' />
                                    </div>
                                    <p className='textNumberTitle'>Gi??? h???c</p>
                                </div>
                            </div>
                            <div className="col-lg-3 p-4 col-md-6">
                                <div className='boxNumber'>
                                    <i class="fa fa-chalkboard-teacher" style={{ fontSize: "70px" }}></i>
                                    <div className='textNumber'>
                                        <CountupNumber end='400' />
                                    </div>
                                    <p className='textNumberTitle'>Gi???ng vi??n</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* Course Info */}
                <div className='infoCoureBox'>
                    <div className="text-center">
                        <h3 className="py-3">3 ??i???m Kh??c Bi???t T???i E-Learning Gi??p B???n Th??ng Ti???n Trong S??? Nghi???p</h3>
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
                                        <h5 class="card-title">H???c qua d??? ??n, hi???u t???n r??? v???n ?????</h5>
                                        <p class="card-text">E Learning ???? x??y d???ng h??? th???ng b??i gi???ng qua c??c d??? ??n v?? c??ng th???c t???, tr???c quan, sinh ?????ng, minh ho??? r?? r??ng gi??p hi???u r??, hi???u s??u, nh??? dai, ??p d???ng th???c t??? t???t. H???c qua d??? ??n th???c t???, h???c ??i ????i v???i h??nh, kh??ng l?? thuy???t lan man, ph??n t??ch c???i ngu???n c???a v???n ?????, x??y d???ng t??? c??c v?? d??? nh??? ?????n th???c thi m???t d??? ??n l???n ngo??i th???c t??? ????? h???c vi??n h???c xong l??m ???????c ngay.</p>
                                        <a href="#" class="btn btn-primary mt-2">????ng k??</a>
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
                                        <h5 class="card-title">L??? tr??nh ph?? h???p cho c??? b???n m???i, tr??i ng??nh v?? n??ng cao k??? n??ng chuy??n s??u</h5>
                                        <p class="card-text">Ch??ng t??i tin r???ng ai c??ng c?? th??? h???c l???p tr??nh t??? ?????u. B???ng ch???ng l?? 42% c??c b???n tr??i ng??nh t???t nghi???p t???i ELearning ?????u l??m vi???c r???t t???t. Nhi???u b???n m???t c??n b???n, m???t g???c ?????u ???????c ch??ng t??i cung c???p m???t l??? tr??nh b??i b???n ????? t??? tin h???c t???p v?? c?? ngay vi???c l??m sau t???t nghi???p.</p>
                                        <a href="#" class="btn btn-primary mt-2">????ng k??</a>
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
                                        <h5 class="card-title">T????ng t??c th???o lu???n c??ng Mentor v?? Gi???ng vi??n</h5>
                                        <p class="card-text">T????ng t??c h???c t???p qua ph???n th???o lu???n c??ng Mentor v?? gi???ng vi??n. H??? th???ng s??? ch???m ??i???m t????ng t??c ????? gi??p c??c h???c vi??n t??ng c?????ng k??? n??ng h??? tr??? l???n nhau. C??c b??i luy???n t???p v?? c??c d??? ??n s??? ???????c Gi???ng vi??n c??ng mentor ch???m b??i tr???c ti???p v?? nh???n x??t, review code ????? gi??p h???c vi??n h???c h???i c??c kinh nghi???m code. Gi???ng vi??n l?? c??c chuy??n gia trong c??c t???p ??o??n ph???n m???m c?? kinh nghi???m, c?? kh??? n??ng truy???n ?????t t???t nh???t, hi???u r?? c??c kh?? kh??n c???a nh???ng b???n m???i v??o ngh???.</p>
                                        <a href="#" class="btn btn-primary mt-2">????ng k??</a>
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
                    <h3>Kho?? h???c ph??? bi???n</h3>
                    <div className='row mt-4'>
                        {renderCoursePopular()}
                    </div>
                </div>
                
                {/* Course Student */}
                <div className="container-a text-center mt-5">
                    <h3><a href="">Kh??a h???c tham kh???o</a></h3>
                    <div className="row">
                        {renderCoures()}
                    </div>
                </div>
            </div >

            {/* Box Number */}
            <div className="d-flex justify-content-center mt-5 mb-3">

                <div className="row">
                    <div className="col-12 text-center">
                        <h3>KHO?? FRONT-END</h3>
                    </div>
                    {renderFE()}
                </div>
            </div>


        </>
    )
}
