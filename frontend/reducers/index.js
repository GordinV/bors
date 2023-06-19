import { combineReducers} from 'redux';
import pictures from './pictures';
import filters from './filters';
import deals from './deals';
import statuses from './statuses';
import menu from './menu';
import authors from './authors';
import userApplications from './userApplications';


export default combineReducers({
    pictures,
    filters,
    deals,
    statuses,
    menu,
    authors,
    userApplications
})