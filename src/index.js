import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//성능 측정을 위한 모듈
import reportWebVitals from './reportWebVitals';

import CommentList from "./chapter_05/CommentList";
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';

//React applicaition이 렌더링될 위치를 정한다.
const root = ReactDOM.createRoot(document.getElementById('root'));

//이 렌더링하는 컴포넌트가 애플리케이션의 시작점이된다.
root.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
