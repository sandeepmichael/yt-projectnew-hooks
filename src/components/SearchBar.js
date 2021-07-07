import React, {useState} from 'react'


const SearchBar = ({onSubmitted}) => {
    const [term, setTerm] = useState('')

    const onChangeHandler = (e) => {
        setTerm(e.target.value)
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        onSubmitted(term)
    }

    return (
        <div className='search-bar ui segment'>
            <form onSubmit={onFormSubmit} className='ui form'>
                <div className='field'>
                    <label>video search</label>
                <input type='text' value={term} onChange={onChangeHandler} />
                </div>
            </form>
        </div>
    );
}


export default SearchBar;