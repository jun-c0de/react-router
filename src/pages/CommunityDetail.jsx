import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

const CommunityDetail = () => {
    const { id } = useParams()
    const { state } = useLocation();
    const nav = useNavigate()

    return (
        <section>
            <h1>게시글 상세</h1>
            <p>현재 글 ID :{id} </p>
            <p>과목명 :{state.subject} </p>
            <p>작성자 :{state.writer} </p>
            <p>작성일자 :{state.date} </p>
            <p>조회수 :{state.views} </p>
            
            <button onClick={() => nav(-1)}>뒤로 가기</button>
            <button onClick={() => nav('/')}>홈으로 가기</button>
        </section>
    )
}

export default CommunityDetail