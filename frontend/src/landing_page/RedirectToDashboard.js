import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectToDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.location.href = 'http://localhost:3001';
    }, [navigate]);

    return null;
};

export default RedirectToDashboard;
