import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './image/logomfu.jpg';
import googleLogo from './image/google-logo.png'; // Make sure this file exists

const Login = () => {
    const [language, setLanguage] = useState('EN');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown visibility
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/loginW'); // Redirect to desired page on click
    };

    const toggleLanguage = () => {
        setLanguage(language === 'EN' ? 'TH' : 'EN');
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const getText = () => {
        return language === 'EN'
            ? {
                welcome: 'MFU ECOMMERCE',
                signIn: 'Log in using your account on:',
                loginButton: 'Login By MFU & Lamduan Email',
                account: 'ACCOUNT',
                profile: 'Profile',
                logout: 'Logout',
                footer: 'Mae Fah Luang University',
            }
            : {
                welcome: 'MFU ECOMMERCE',
                signIn: 'เข้าสู่ระบบโดยใช้อีเมล MFU & ลำดวน:',
                loginButton: 'เข้าสู่ระบบโดยใช้อีเมล MFU & ลำดวน',
                account: 'บัญชี',
                profile: 'โปรไฟล์',
                logout: 'ออกจากระบบ',
                footer: 'มหาวิทยาลัยแม่ฟ้าหลวง',
            };
    };

    const text = getText();

    return (
        <div className="login-page">
            <div className="navbar">
                <div className="navbar-left">
                    <img src={logo} alt="MFU Logo" className="navbar-logo" />
                    <span>{text.welcome}</span>
                </div>
                <div className="navbar-right">
                    <div className="account-menu" onClick={toggleDropdown}>
                        <span>{text.account}</span>
                        {isDropdownOpen && (
                            <div className="dropdown">
                                <a href="/profile">{text.profile}</a>
                                <a href="/logout">{text.logout}</a>
                            </div>
                        )}
                    </div>
                    <button className="language-toggle" onClick={toggleLanguage}>
                        {language}
                    </button>
                </div>
            </div>
            <div className="login-container">
                <div className="login-box">
                    <div className="login-header">
                        <img src={logo} alt="MFU Logo" className="logo" />
                        <h1>{text.welcome}</h1>
                        <h2>{text.signIn}</h2>
                    </div>
                    <button className="login-button" onClick={handleLoginClick}>
                        <img src={googleLogo} alt="Google Logo" className="google-logo" />
                        {text.loginButton}
                    </button>
                </div>
            </div>
            <footer className="footer">
                <p>{text.footer}</p>
            </footer>
        </div>
    );
};

export default Login;
