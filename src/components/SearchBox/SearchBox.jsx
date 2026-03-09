import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

function SearchBox() {
    const dispatch = useDispatch();
    const value = useSelector(selectNameFilter);
    return (
        <div className={css.wrapper}>
            <label className={css.label}>
                Find contacts by name
                <input
                    type="text"
                    value={value}
                    onChange={(e) => dispatch(changeFilter(e.target.value))}
                    className={css.input}
                />
            </label>
        </div>
    );
}

export default SearchBox;