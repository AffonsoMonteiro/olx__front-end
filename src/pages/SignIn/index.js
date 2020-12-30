import React, { useState } from 'react';
import { PageArea } from './styled' 
import useApi from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler'

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents'

function SignIn() {
    const api = useApi()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remenberPassword, setRemenberPassword] = useState(false)
    const [ disabled, setDisabled] = useState(false)
    const [ error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisabled(true)
        setError('')

        const json = await api.login(email, password)

        if(json.error) {
            setError(json.error)
        } else {
            doLogin(json.token, remenberPassword)

            window.location.href = '/'
        }

        setDisabled(false)
    }

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                { error && 
                    <ErrorMessage> {error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                                type="email"
                                disabled={disabled} 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                type="password" 
                                disabled={disabled} 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Lembrar senha</div>
                        <div>
                            <input 
                                type="checkbox" 
                                disabled={disabled} 
                                checked={remenberPassword}
                                onChange={ () => setRemenberPassword(!remenberPassword) }
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Entrar</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default SignIn