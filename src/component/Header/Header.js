import React, { useEffect, useRef, useState , useMemo  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { courseCategory , ChangeTheme } from '../../Redux/action/CourseAction'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './Header.css'
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TryRounded } from '@mui/icons-material';

export default function Header(props) {
    let keyInput = useRef(null)
    let keyInputMobile = useRef(null)
    let login = localStorage.getItem('credentials');
    let theme = useSelector((state) => state.ChangeTheme.theme);
    const history = useHistory()
    const dispatch = useDispatch()
    const courseCate = useSelector(state => state.CourseReducer.coursesCategary)
    const { Search } = Input;
    const [light , setLight] = useState(false);
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

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
                    backgroundColor: theme.palette.mode === 'dark'  ? '#8796A5' : '#aab4be',
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

    const onSearch = value => console.log(value);

    // Login
    const { credentials } = useSelector(state => state.UserReducer)
    // console.log(credentials);
    // renderCourseCate
    const renderCourseCate = () => {
        return courseCate.map((courseCate, index) => {
            return (
                <li key={index}>
                    <NavLink to={`/danhmuckhoahoc/${courseCate.maDanhMuc}`}>{courseCate.tenDanhMuc}</NavLink>
                </li>
            )
        })
    }

    const handleSubmitSearch = async (e) => {
        e.preventDefault()
        // console.log(keyInput.current.value);    
        if (keyInput.current.value !== '') {
            await history.push(`/timkiem/${keyInput.current.value}`)
            keyInput.current.value = ''
        }
    }

    const handleSubmitSearchMobile = async (e) => {
        e.preventDefault()
        // console.log(keyInputMobile.current.value);
        if (keyInputMobile.current.value !== '') {
            await history.push(`/timkiem/${keyInputMobile.current.value}`)
            keyInputMobile.current.value = ''
        }

    }

    // Log out
    const logOut = () => {
        localStorage.removeItem("credentials")
        // taiKhoan = null
    }

    // showMenuMobie
    const renderShowMobie = () => {
        const menuMobie = document.querySelector('.menuHeaderMobie')
        if (menuMobie) {
            menuMobie.classList.toggle('active')
        } else {
            return ''
        }

    }

    // Xử lý đăng nhập
    const hanleBtnLogin = () => {
        if (login) {
            let loginAccount = JSON.parse(login)
            return (
                <div className='headerAvatar'>
                    <span className='headerSet'><NavLink to=""><i className="fas fa-cog"></i></NavLink></span>
                    <NavLink className='infoHeader' to="/thongtincanhan">
                        <img className='avatar' src={loginAccount.hinhAnh}></img>
                        <span className="logout" onClick={logOut}>
                            <NavLink to="/trangchu">
                                <i className="fas fa-power-off"></i>
                            </NavLink>
                        </span>
                    </NavLink>
                </div>
            )
        } else {
            return <NavLink className="text-danger" to='/login'>Vui lòng đăng nhập</NavLink>
        }
    }

    const setHeaderFixed = () => {
        const headerFixed = document.querySelector('.header')
        if (headerFixed) {
            if (window.scrollY >= 200) {
                headerFixed.classList.add('headerFixed')
            } else {
                headerFixed.classList.remove('headerFixed')
            }

        } else {
            return null
        }
    }

    const renderSwitch = () => {
        dispatch({
            type : 'CHANGETHEME',
            data : true
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', setHeaderFixed)
        return () => {
            window.addEventListener('scroll', setHeaderFixed)
        }
    }, [])

    useEffect(() => {
        dispatch(courseCategory)
    }, [])

    return (
        <>
            <section className={`header ${theme ? 'bg-dark' : 'bg-white'}`}>
                <div className='headerLeft'>
                    <NavLink to='/'>
                        <span className='text-success h1'><i class="fab fa-connectdevelop"></i>E Learning Technology</span></NavLink>
                    <form onSubmit={handleSubmitSearch} ><input ref={keyInput} action="#" className='searchForm' type="text" placeholder="Tìm kiếm" /></form>
                </div>
                <div className='headerRight'>
                    <ul className='menuHeader'>
                        <li className='courseCate'><i className="fas fa-bars mr-1"></i><NavLink to="/trangchu">Danh sách khoá học</NavLink>
                            <ul className='courseCateList'>
                                {renderCourseCate()}
                            </ul>
                        </li>
                        <li><NavLink to="/khoahoc">Khóa học</NavLink></li>
                        {/* <li><NavLink to="/blog">Blog</NavLink></li> */}
                        {/* <li className='eventHeader courseCate'><NavLink to="/sukien">Sự kiện</NavLink>
                            <ul className='courseCateList'>
                                <li><NavLink to="/sukien/lastYear">Sự kiện Sale Cuối Năm</NavLink></li>
                                <li><NavLink to="/sukien/Noel">Sự kiện Giáng sinh</NavLink></li>
                                <li><NavLink to="/sukien/Noel">Sự kiện Noel</NavLink></li>
                            </ul>
                        </li> */}
                        {/* <li><NavLink to="/thongtin">Thông tin</NavLink></li> */}
                        <li> 
                        <FormGroup className="mt-2">
                            <FormControlLabel
                                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                                label=""
                                // onClick={() =>{renderSwitch()}}
                            />
                        </FormGroup></li>
                    </ul>
                </div>
                <div className='showIconHeader'>
                    {hanleBtnLogin()}
                    <div className='menuMobie'>
                        <i onClick={renderShowMobie} className="fas fa-sort-down iconMenuMobie"></i>
                        <ul className='menuHeaderMobie'>
                            <li><form onSubmit={handleSubmitSearchMobile} ><input ref={keyInputMobile} action="" className='searchFormMobile' type="text" placeholder="Tìm kiếm" /></form></li>
                            <li className='courseCateMobie'><NavLink to="/trangchu">Danh mục</NavLink>
                                <ul className='courseCateListMobie'>
                                    {renderCourseCate()}
                                </ul>
                            </li>
                            <li><NavLink to="/khoahoc">Khóa học</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li className='eventHeaderMobie courseCateMobie'><NavLink to="/sukien">Sự kiện</NavLink>
                                <ul className='courseCateListMobie'>
                                    <li><NavLink to="/sukien/lastYear">Sự kiện Sale Cuối Năm</NavLink></li>
                                    <li><NavLink to="/sukien/Noel">Sự kiện Giáng sinh</NavLink></li>
                                    <li><NavLink to="/sukien/Noel">Sự kiện Noel</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/thongtin">Thông tin</NavLink></li>
                            <li onClick={logOut}><NavLink to="/trangchu">Đăng xuất</NavLink></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
