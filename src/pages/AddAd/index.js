import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { PageArea } from './styled' 
import useApi from '../../helpers/OlxAPI'


import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents'

function SignIn() {
    const api = useApi()
    const history = useHistory()

    const filefield = useRef()
    
    const [ categoryList, setCategoryList] = useState([])

    const [title, setTitle] = useState('')
    const [ category, setCategory] = useState('')
    const [ price, setPrice] = useState('')
    const [ priceNegotiable, setPriceNegotiable] = useState(false)
    const [ description, setDescription] = useState('')

    
    const [ disabled, setDisabled] = useState(false)
    const [ error, setError] = useState('')

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories()
            setCategoryList(cats)
        }
        getCategories()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisabled(true)
        setError('')

        let errors = []

        if(!title.trim()) {
            errors.push('Digite um título')
        }

        if( !category) {
            errors.push('Selecione uma categoria')
        }

        if(errors.length === 0) {

            const fData = new FormData()
            fData.append('title', title)
            fData.append('price', price)
            fData.append('priceneg', priceNegotiable)
            fData.append('desc', description)
            fData.append('cat', category)

            if(filefield.current.files.length > 0) {
                for(let i = 0; i > filefield.current.files.length; i++) {
                    fData.append('img', filefield.current.files[i])
                }
            }

            const json = await api.addAd(fData)

            if(!json.error) {
                history.push(`/ad/${json.id} `)
                return 
            } else {
                setError(json.error)
            }

        } else {
            setError(errors.join("\n"))
        }

        setDisabled(false)
    }

    const priceMask = createNumberMask({
        prefix: 'R$  ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.', 
        allowDecimal: true,
        decimalSymbol: ','
    })

    return (
        <PageContainer>
            <PageTitle>Postar um Anúncio</PageTitle>
            <PageArea>
                { error && 
                    <ErrorMessage> {error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Titulo</div>
                        <div className="area--input">
                            <input 
                                type="text"
                                disabled={disabled} 
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                            <select disabled={disabled} onChange={e => setCategory(e.target.value)} required>
                                <option></option>
                                {categoryList && categoryList.map(i =>
                                    <option key={i._id} value={i._id}> {i.name} </option>
                                )}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                            <MaskedInput  
                                mask={ priceMask }
                                placeholder="R$ "
                                disabled={ disabled || priceNegotiable }
                                value={ price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço Negociável</div>
                        <div>
                            <input 
                                type="checkbox"
                                disabled={disabled} 
                                value={priceNegotiable}
                                onChange={e => setPriceNegotiable(!priceNegotiable)}
                                
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                            <textarea 
                                disabled={disabled}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            >

                            </textarea>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Imagens (1 ou mais )</div>
                        <div className="area--input">
                            <input 
                                type="file"
                                disabled={disabled} 
                                ref = { filefield }
                                multiple
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Adicionar Anúncio</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default SignIn