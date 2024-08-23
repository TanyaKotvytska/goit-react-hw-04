import css from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {

    const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
        const topic = form.elements.topic.value;
        
        if(form.elements.topic.value.trim() === "") {
			alert("Please enter search term!")
			return;
		}

    onSearch(topic);
        form.reset();
    };
    
    return (
        <div className={css.searchbarcontainer}>
            <header className={css.headersearchbar}>
                <form className={css.formsearchbar} onSubmit={handleSubmit}>
                    <input
                        className={css.inputsearchbar}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button className={css.btnsearchbar} type="submit">Search</button>
                </form>
            </header>
        </div>
    );
}