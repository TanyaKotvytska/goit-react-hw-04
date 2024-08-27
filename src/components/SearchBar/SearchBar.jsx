import { useState } from 'react'
import css from "./SearchBar.module.css"
import { toast } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleChange = (evt) => {
        setQuery(evt.target.value);
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (query.trim() === '') {
            toast.error('Please enter a search query');
            return;
        }
        onSubmit(query);
        setQuery(query);
    }

    return (
        <header className={css.headersearchbar}>
            <form className={css.formsearchbar} onSubmit={handleSubmit}>
                <input
                    className={css.inputsearchbar}
                    type="text"
                    name="topic"
                    value={query}
                    onChange={handleChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.btnsearchbar} type="submit">Search</button>
            </form>
        </header>
    );
}