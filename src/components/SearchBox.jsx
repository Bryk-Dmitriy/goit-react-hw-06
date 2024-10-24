import css from './SearchBox.module.css'

export default function SearchBox({setFilter}) {
    return(
        <div>
        <p>Find contacts by name</p>
        <input type="text"
            className={css.searchInput}
            onChange={(event) => setFilter(event.target.value)}/>
        </div>
    )
};
