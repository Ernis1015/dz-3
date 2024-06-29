import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/action';

const RegistrationForm = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch();
    const { user, error } = useSelector(state => state)

    const handleSubmit = (event) => {
        event.preventDefault()

		if (fullName.trim().length < 4) {
			alert('Имя должно содержать как минимум 4 буквы.');
			return;
		}
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Некорректный формат email.')
            return
        }
        if (!/^[a-zA-Z0-9]{3,12}$/.test(username)) {
            alert('Имя пользователя должно быть алфавитно-цифровым и содержать от 3 до 12 символов.')
            return
        }
        if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password)) {
            alert('Пароль должен содержать как минимум 8 символов, включая цифру и специальный символ.')
            return
        }
        if (password !== confirmPassword) {
            alert('Пароли не совпадают.')
            return
        }

        dispatch(registerUser({ fullName, email, username, password }))
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Полное имя:</label><br/>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} /><br/>

            <label>Email:</label><br/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>

            <label>Имя пользователя:</label><br/>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>

            <label>Пароль:</label><br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>

            <label>Подтвердите пароль:</label><br/>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/><br/><br/>

            <button type="submit" >Зарегистрироваться</button>
 
            {user && <p>Регистрация успешна!</p>}
            {error && <p>Ошибка: {error}</p>}
        </form>
    )
}

export default RegistrationForm;