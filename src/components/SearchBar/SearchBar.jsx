import React from 'react';
import css from "./SearchBar.module.css"
import { toast } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
    const handleSubmit = (evt) => {
        evt.preventDefault();

        const formData = new FormData(evt.target);
        const topic = formData.get('topic');

        if (!topic) {
            toast.error("Please enter search term!");
            return;
        }

        const trimmedTopic = topic.trim();

        if (trimmedTopic === "") {
            toast.error("Please enter search term!");
            return;
        }

        onSearch(trimmedTopic);
        evt.target.reset();
    };

    return (
        <header className={css.headersearchbar}>
            <form className={css.formsearchbar} onSubmit={handleSubmit}>
                <input
                    className={css.inputsearchbar}
                    type="text"
                    name="topic"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.btnsearchbar} type="submit">Search</button>
            </form>
        </header>
    );
}