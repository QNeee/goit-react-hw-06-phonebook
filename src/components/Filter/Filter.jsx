import PropTypes from "prop-types";
import { Container, FilterText, FilterInput } from "./Filter.styled";
import { useDispatch } from "react-redux/es/exports";
export const Filter = ({ value, setFilterValue }) => {
    const dispatch = useDispatch();
    return (<Container>
        <FilterText>Find contact</FilterText>
        <FilterInput value={value} onChange={(e) => dispatch(setFilterValue(e.target.value))}></FilterInput>
    </Container>)
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    setFilterValue: PropTypes.func.isRequired
}