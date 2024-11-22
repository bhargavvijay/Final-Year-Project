import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [roomCode, setRoomCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setRoomCode(e.target.value);
        if (error) setError('');
    };

    const handleOnClick = () => {
        if (roomCode.trim() === '') {
            setError('Room code is required');
            return;
        }
        navigate(`/room/${roomCode}`);
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Join a Room</h2>
                <label htmlFor='roomCode' style={styles.label}>
                    Room Code
                </label>
                <input
                    id='roomCode'
                    type='text'
                    required
                    placeholder='Enter room code'
                    value={roomCode}
                    onChange={handleOnChange}
                    style={styles.input}
                />
                {error && <p style={styles.error}>{error}</p>}
                <button 
                    type='button' 
                    onClick={handleOnClick} 
                    style={styles.button} 
                    disabled={!roomCode.trim()}
                >
                    Enter Room
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
    },
    card: {
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '300px',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '12px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '14px',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonDisabled: {
        backgroundColor: '#a5d1ff',
        cursor: 'not-allowed',
    },
    error: {
        color: 'red',
        fontSize: '14px',
        marginBottom: '12px',
    },
};

// Note: To apply buttonDisabled styling dynamically, you could adjust the `button` style logic in the `handleOnClick` method.
