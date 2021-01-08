import React, { useState, useEffect } from 'react';
import { PageArea } from './styled' 
import useApi from '../../helpers/OlxAPI'
import { doLogin } from '../../helpers/AuthHandler'
import AdItem from '../../components/partials/AdItem'


import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents'

function SignIn() {
    const api = useApi()

    const [ name, setName] = useState('')
    const [ stateLoc, setStateLoc] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ confirmPassword, setConfirmPassword] = useState('')

    const [ stateList, setStateList] = useState([])

    const [ disabled, setDisabled] = useState(false)
    const [ error, setError] = useState('')

    const [ userList, setUserList] = useState([])
    const [ userData, setUserData] = useState([])

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates()
            
            setStateList(slist)
        }

        getStates()
    }, [])

    useEffect( () => {
        const getAdsListUser = async () => {
            const Ulist = await api.getUserData( {limit: 2} )

            setUserList(Ulist.ads)   
        }

        getAdsListUser()
    }, [api])

    useEffect( () => {
        const getUserData = async () => {
            const userD = await api.getUserData()

            setUserData(userD)
        }

        getUserData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisabled(true)
        setError('')


        if(password !==  confirmPassword) {
            setError('Senhas não batem')
            setDisabled(false)
            return
        }
        
        const json = await api.register(name, email, password, stateLoc)

        if(json.error) {
            setError(json.error)
        } else {
            doLogin(json.token)
            window.location.href = '/'
        }

        setDisabled(false)
    }

    return (
        <PageContainer>
            <PageTitle>Minha conta</PageTitle>
            <PageArea>
                { error && 
                    <ErrorMessage> {error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                            <div className="area--title">Nome Completo</div>
                            <div className="area--input">
                                <input 
                                    type="text"
                                    disabled={disabled} 
                                    placeholder={userData.name}
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)} required>
                                <option></option>
                                {stateList.map((i,k)=>
                                    <option key={k} value={i._id}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </label>
                        <label className="area">
                            <div className="area--title">E-mail</div>
                            <div className="area--input">
                                <input 
                                    type="email"
                                    placeholder={userData.email}
                                    disabled={disabled} 
                                    value={userList.name}
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
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}>Salvar alterações</button>
                            </div>
                        </label>
                </form>

                <div className="userAds">
                    <h2>Seus anuncios</h2>
                    <div className="listAd">
                        {userList.map((i, k) =>
                            <AdItem key={k} data={i} />
                        )}
                    </div>
                </div>
            </PageArea>
        </PageContainer>
    )
}

export default SignIn