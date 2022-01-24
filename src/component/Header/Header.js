import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { courseCategory } from '../../Redux/action/CourseAction'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import './Header.css'

export default function Header(props) {
    let keyInput = useRef(null)
    let keyInputMobile = useRef(null)
    let login = localStorage.getItem('credentials')
    const history = useHistory()
    const dispatch = useDispatch()
    const courseCate = useSelector(state => state.CourseReducer.coursesCategary)
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

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
            return <NavLink className="text-danger"to='/login'>Vui lòng đăng nhập</NavLink>
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
            <section className='header'>
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
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li className='eventHeader courseCate'><NavLink to="/sukien">Sự kiện</NavLink>
                            <ul className='courseCateList'>
                                <li><NavLink to="/sukien/lastYear">Sự kiện Sale Cuối Năm</NavLink></li>
                                <li><NavLink to="/sukien/Noel">Sự kiện Giáng sinh</NavLink></li>
                                <li><NavLink to="/sukien/Noel">Sự kiện Noel</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/thongtin">Thông tin</NavLink></li>
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
