import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { useSelector, useDispatch} from "react-redux";
import { setStatusFilter } from "../../redux/actions";
import { statusFilters } from "../../redux/constants";

export const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);
  const dispatch = useDispatch();
  const handleOnSubmit = filter => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all } onClick={() => handleOnSubmit(statusFilters.all)}>All</Button>
      <Button selected={filter === statusFilters.active } onClick={() => handleOnSubmit(statusFilters.active)}>Active</Button>
      <Button selected={filter === statusFilters.completed } onClick={() => handleOnSubmit(statusFilters.completed)}>Completed</Button>
    </div>
  );
};
