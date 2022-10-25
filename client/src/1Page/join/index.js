import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Join = () => {
    return(
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/2Page">
            <JoinText>회원가입</JoinText> 
        </Link>
    )
}

export default Join;


const JoinText = styled.div`
    font-size: 24px;
    text-align: right;
    color: #afafaf;
    margin-top: 10px;
`